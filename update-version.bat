@echo off
for /f "delims=" %%a in ('powershell -command "Get-Date -Format \"yyyy-MM-dd HH:mm\""') do set datetime=%%a

echo const versionInfo = { > version.js
echo   updatedAt: "%datetime%" >> version.js
echo }; >> version.js
echo. >> version.js
echo export default versionInfo; >> version.js

echo version.js updated with timestamp: %datetime%
