
# Set default commit message
commit_message=${1:-"Auto Commit"}

# Call the Windows batch file to update version
cmd //c update-version.bat

# Run Git commands
git add .
git commit -m "$commit_message"
git push