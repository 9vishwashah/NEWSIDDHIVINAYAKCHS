@echo off
echo Running version update...
call update-version.bat

echo Committing to Git...
git add .
git commit -m "Auto commit with version update"