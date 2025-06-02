@echo off
:: Get current datetime
for /f "tokens=1-3 delims=/- " %%a in ("%date%") do (
    set day=%%a
    set month=%%b
    set year=%%c
)

for /f "tokens=1-2 delims=: " %%a in ("%time%") do (
    set hour=%%a
    set minute=%%b
)

:: Fix leading spaces if hour is single digit
if "%hour:~0,1%"==" " set hour=0%hour:~1,1%

set timestamp=%year%-%month%-%day% %hour%:%minute%

:: Write to version.js
(
    echo const versionInfo = {
    echo   updatedAt: "%timestamp%"
    echo };
    echo export default versionInfo;
) > version.js

echo version.js updated with timestamp %timestamp%
