/* ==========================================================================
   tools/restore-seed-data.js
   Restore seed data from a backup, with SHA-256 verification.
   Usage:
     node site/tools/restore-seed-data.js --list
     node site/tools/restore-seed-data.js --restore <timestamp>
   ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DATA_DIR = path.resolve(__dirname, '..', 'data');
const BACKUP_ROOT = path.join(DATA_DIR, 'backups');

function sha256(filePath) {
  const data = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(data).digest('hex');
}

function listBackups() {
  if (!fs.existsSync(BACKUP_ROOT)) {
    console.log('No backups found.');
    return [];
  }
  return fs.readdirSync(BACKUP_ROOT)
    .filter((d) => {
      const stat = fs.statSync(path.join(BACKUP_ROOT, d));
      return stat.isDirectory();
    })
    .sort();
}

function parseArgs() {
  const args = process.argv.slice(2);
  const mode = args[0];
  const ts = args[1];
  if (mode === '--list') return { mode: 'list' };
  if (mode === '--restore' && ts) return { mode: 'restore', timestamp: ts };
  console.log('Usage:');
  console.log('  node restore-seed-data.js --list');
  console.log('  node restore-seed-data.js --restore <timestamp>');
  console.log('');
  console.log('Timestamps are directory names under site/data/backups/');
  process.exit(1);
}

function showList() {
  const backups = listBackups();
  if (backups.length === 0) {
    console.log('No backups available.');
    return;
  }
  console.log('Available backups:');
  for (const ts of backups) {
    const manifestPath = path.join(BACKUP_ROOT, ts, 'manifest.json');
    let fileCount = '?';
    if (fs.existsSync(manifestPath)) {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
      fileCount = manifest.files ? manifest.files.length + ' files' : '?';
    }
    console.log('  ' + ts + '  (' + fileCount + ')');
  }
}

function restoreBackup(timestamp) {
  const backupPath = path.join(BACKUP_ROOT, timestamp);
  if (!fs.existsSync(backupPath)) {
    console.error('ERROR: backup not found: ' + timestamp);
    const available = listBackups();
    if (available.length) console.log('Available: ' + available.join(', '));
    process.exit(1);
  }

  const manifestPath = path.join(backupPath, 'manifest.json');
  if (!fs.existsSync(manifestPath)) {
    console.error('ERROR: manifest.json missing in backup ' + timestamp);
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  console.log('=== Restore from backup: ' + timestamp + ' ===');
  console.log('Files to restore: ' + manifest.files.length);

  let errors = 0;

  for (const entry of manifest.files) {
    const srcFile = path.join(backupPath, entry.name);
    const destFile = path.join(DATA_DIR, entry.name);

    if (!fs.existsSync(srcFile)) {
      console.error('  MISSING in backup: ' + entry.name);
      errors++;
      continue;
    }

    const actualHash = sha256(srcFile);
    if (actualHash !== entry.sha256) {
      console.error('  HASH MISMATCH: ' + entry.name);
      console.error('    expected: ' + entry.sha256);
      console.error('    actual:   ' + actualHash);
      errors++;
      continue;
    }

    fs.copyFileSync(srcFile, destFile);
    console.log('  Restored: ' + entry.name + ' (verified)');
  }

  if (errors > 0) {
    console.error('Restore completed with ' + errors + ' error(s).');
    process.exit(1);
  }

  console.log('=== Restore Complete ===');
  console.log('All files restored and SHA-256 verified.');
}

function main() {
  const { mode, timestamp } = parseArgs();
  if (mode === 'list') showList();
  else if (mode === 'restore') restoreBackup(timestamp);
}

main();
