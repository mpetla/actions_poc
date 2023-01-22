curl \
  -X PUT \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer <YOUR-TOKEN>"\
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/OWNER/REPO/environments/ENVIRONMENT_NAME \
  -d '{"wait_timer":30,"reviewers":[{"type":"User","id":1},{"type":"Team","id":1}],"deployment_branch_policy":{"protected_branches":false,"custom_branch_policies":true}}'


gh api \
-X PUT \
-H "Accept: application/vnd.github+json" \
-H "X-GitHub-Api-Version: 2022-11-28" \
https://api.github.com/repos/mpetla/actions_poc/environments/dev

gh api \
-X PUT \
-H "Accept: application/vnd.github+json" \
-H "X-GitHub-Api-Version: 2022-11-28" \
https://api.github.com/repos/mpetla/actions_poc/environments/qa

gh api \
-X PUT \
-H "Accept: application/vnd.github+json" \
-H "X-GitHub-Api-Version: 2022-11-28" \
https://api.github.com/repos/mpetla/actions_poc/environments/uat

gh api \
-X PUT \
-H "Accept: application/vnd.github+json" \
-H "X-GitHub-Api-Version: 2022-11-28" \
https://api.github.com/repos/mpetla/actions_poc/environments/prod


gh workflow list
gh workflow run unit_tests.yaml