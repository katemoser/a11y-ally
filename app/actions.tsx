"use server";
const baseUrl = process.env.GREPTILE_API_BASE_URL;
const gitHubToken = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
const greptileApiKey = process.env.GREPTILE_API_KEY;

console.log("BASE URL:", baseUrl);

async function getAccessibilityConcerns(repo: string) {
  const query = {
    messages: [
      {
        id: "q-1",
        content: `Look closely at this code base and find five accessibility concerns. Be very specific in your findings.
        The output format should be formatted like this:
        [
            {
                "id": "unique identifier for this issue",
                "issueTitle": "one line title of this issue",
                "issueDescription": "string description of accessibility issue",
                "issueFile": "the file path where this issue is located",
                "issueLines": "lines where this issue is located, in the format 5-8",
                'solutionDescription': "string of description of how to fix accessibility issue",
            },
            { ...}
        ]
            Do not include any other text in your response accept for the json object.
            this response will be parsed into an object for use in a javascript application and must be pure json and nothing else`,
        role: "user",
      },
    ],
    repositories: [
      {
        remote: "github",
        repository: "katemoser/one-thing",
        branch: "main",
      },
    ],
    sessionId: "accessibility-test",
    genius: true,
  };

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${greptileApiKey}`,
      "X-GitHub-Token": gitHubToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(query),
  };
  console.log("OPTIONS", options);

  const response = await fetch(`${baseUrl}/query`, options);
  console.log(response);
  const data = await response.json();
  console.log("DATA:", data);
  const concerns = JSON.parse(data.message);
  return concerns;
}


async function createIssueDescriptions(concernIds: string[]) {
    const query = {
        messages: [
        {
            id: "q-2",
            content: `Take into account only the following concerns from the previous question: ${concernIds}.
            Create several github issues that take into account all of the above concerns.
            There does not to be one issue per concern. Instead, you may group similar concerns together into one issue.
            The output format should be formatted like this:
            [
                {
                    "title": "title of the issue",
                    "body": "body of the issue, formatted to be displayed as markdown"
                    "labels": ["array of labels to apply to this issue"]
                }, {...}]

            do not include any other text in your response accept for the json object.
            this response will be parsed into an object for use in a javascript application and must be pure json and nothing else`,
            role: "user",
        },
        ],
        sessionId: "accessibility-test",
        genius: true,
    };

    const options = {
        method: "POST",
        headers: {
        Authorization: `Bearer ${greptileApiKey}`,
        "X-GitHub-Token": gitHubToken,
        "Content-Type": "application/json",
        },
        body: JSON.stringify(query),
    };

    const response = await fetch(`${baseUrl}/query`, options);
    console.log("RESPONSE", response);

    const data = await response.json();
    console.log("DATA:", data);
    const issues = JSON.parse(data.message);
}

export { getAccessibilityConcerns, createIssueDescriptions };