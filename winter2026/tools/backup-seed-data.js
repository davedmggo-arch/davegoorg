/* ==========================================================================
   tools/backup-seed-data.js
   Full backup of site/data/*.json with SHA-256 manifest and 5-backup rotation.
   Usage: node site/tools/backup-seed-data.js
   ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DATA_DIR = path.resolve(__dirname, '..', 'data');
const BACKUP_ROOT = path.join(DATA_DIR, 'backups');
const MAX_BACKUPS = 5;

function sha256(filePath) {
  const data = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(data).digest('hex');
}

function backupDirPath() {
  const now = new Date();
  const ts = now.toISOString().replace(/[.:]/g, '-');
  return path.join(BACKUP_ROOT, ts);
}

function listBackups() {
  if (!fs.existsSync(BACKUP_ROOT)) return [];
  return fs.readdirSync(BACKUP_ROOT)
    .filter((d) => {
      const stat = fs.statSync(path.join(BACKUP_ROOT, d));
      return stat.isDirectory();
    })
    .sort();
}

function pruneBackups() {
  const backups = listBackups();
  while (backups.length > MAX_BACKUPS) {
    const oldest = backups.shift();
    const oldPath = path.join(BACKUP_ROOT, oldest);
    fs.rmSync(oldPath, { recursive: true, force: true });
    console.log('  Pruned old backup: ' + oldest);
  }
}

function main() {
  console.log('=== Seed Data Backup ===');
  console.log('Time: ' + new Date().toISOString());

  if (!fs.existsSync(DATA_DIR)) {
    console.error('ERROR: data directory not found at ' + DATA_DIR);
    process.exit(1);
  }

  const jsonFiles = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.json'));
  if (jsonFiles.length === 0) {
    console.error('ERROR: no JSON files found in ' + DATA_DIR);
    process.exit(1);
  }

  const destDir = backupDirPath();
  if (!fs.existsSync(BACKUP_ROOT)) {
    fs.mkdirSync(BACKUP_ROOT, { recursive: true });
  }
  fs.mkdirSync(destDir, { recursive: true });

  const manifest = { timestamp: destDir.split(path.sep).pop(), files: [] };

  for (const file of jsonFiles) {
    const srcPath = path.join(DATA_DIR, file);
    const stat = fs.statSync(srcPath);
    if (stat.isDirectory()) continue;

    const hash = sha256(srcPath);
    fs.copyFileSync(srcPath, path.join(destDir, file));
    manifest.files.push({ name: file, sha256: hash, size: stat.size });
    console.log('  Backed up: ' + file + ' (' + stat.size + ' bytes) sha256=' + hash.slice(0, 16) + '...');
  }

  fs.writeFileSync(
    path.join(destDir, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );

  console.log('Backup written to: ' + destDir);
  console.log('Total files: ' + manifest.files.length);

  pruneBackups();

  console.log('Active backups: ' + listBackups().length + '/' + MAX_BACKUPS);
  console.log('=== Backup Complete ===');
}

main();
