commit_message=${1:-"Auto Commit"}

# Run Git commands
git add .
git commit -m "$commit_message"
git push
