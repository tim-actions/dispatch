const core = require('@actions/core')
const github = require('@actions/github')

async function main() {
  try {
    const { owner, repo } = github.context.repo

    const token = core.getInput('token')
    const event = core.getInput('event')
    const octokit = new github.GitHub(token)

    console.log("before")
    const result = await octokit.repos.createDispatchEvent({
      owner,
      repo,
      event_type: event,
    });

    console.log("=====================")
    console.log(owner, repo, event)
    console.log("result:", result)

  } catch (error) {
    core.setFailed(error.message)
  }
}

main()
