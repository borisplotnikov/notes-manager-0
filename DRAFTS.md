killall pboard

git branch; git branch -r; git branch -a; git branch -vv
git switch -c main
git push -u origin workbranch

git pull origin main

git pull

gh pr create --base main --head workbranch \
--title "Practice pull request" \
--body "My first pull request using GitHub CLI."

gh pr create --fill --base main

gh pr view

gh pr merge --merge --squash --rebase

gh repo edit --default-branch main
gh repo view --json defaultBranchRef

git push origin --delete project-setup
git fetch --prune
