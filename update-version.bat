@echo off
for /f "delims=" %%a in ('powershell -command "Get-Date -Format \"yyyy-MM-dd HH:mm\""') do set datetime=%%a

(
echo const versionInfo = {
echo   updatedAt: "%%datetime%%"
echo };
echo.
echo export default versionInfo;
) > version.js

echo version.js updated with timestamp: %datetime%
