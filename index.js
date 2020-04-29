const core = require('@actions/core')
const github = require('@actions/github')

async function main() {
  try {
    const { owner, repo } = github.context.repo

    const token = core.getInput('token')
    const event = core.getInput('event')
    const octokit = new github.GitHub(token)

    octokit.repos.createDispatchEvent({
      owner,
      repo,
      event_type: event,
    });

  } catch (error) {
    core.setFailed(error.message)
  }
}

main()
