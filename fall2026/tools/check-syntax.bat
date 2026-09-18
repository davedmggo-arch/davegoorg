@echo off
rem ==========================================================================
rem  check-syntax.bat - pre-deploy JS syntax gate (double-click to run).
rem  Scans the whole fall2026 site for .js files and validates each one
rem  parses as an ES module without executing it (see validate-js-syntax.js).
rem  ==========================================================================
setlocal
cd /d "%~dp0.."

where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo [check-syntax] Node.js was not found on this machine.
  echo Please install Node.js from https://nodejs.org and run this again.
  echo.
  pause
  exit /b 1
)

echo [check-syntax] Validating JS syntax (ES modules, no execution)...
echo.
node tools\validate-js-syntax.js
set RC=%errorlevel%
echo.
if %RC% equ 0 (
  echo [check-syntax] Done - all clear, safe to deploy.
) else (
  echo [check-syntax] FAILED - fix the files listed above before deploying.
)
pause
exit /b %RC%
