# dispatch

A GitHub Action that dispatch a github dispatch event

## Usage
Add .github/workflows/sanity-check.yml with the following:

```
name: Sanity check
on:
  pull_request:
    types: [opened]
  issue_comment:
    types: [created]]

jobs:
  commits_check_job:
    runs-on: ubuntu-latest
    name: Commits Check
    steps:
    - name:
      id: 'dispatch'
      uses: tim-actions/dispatch@master
      with:
        token: ${{ secrets.GITHUB_TOKEN }}
        event: trigger-workflow-build

```
