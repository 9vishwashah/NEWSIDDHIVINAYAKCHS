#!/bin/bash

# Get the latest commit hash and date
commit_hash=$(git rev-parse --short HEAD)
commit_date=$(git log -1 --format=%cd --date=iso)

# Generate version.json
echo "{
  \"commit\": \"$commit_hash\",
  \"date\": \"$commit_date\"
}" > version.json
