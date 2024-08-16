"use server";
const baseUrl = process.env.GREPTILE_API_BASE_URL;
const gitHubToken = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
const greptileApiKey = process.env.GREPTILE_API_KEY;

console.log("BASE URL:", baseUrl);

async function getAccessibilityConcerns(repo: string) {
  const query = {
    messages: [
      {
        content: `Look closely at this code base and find files that have accessibility concerns.
        The output response should be a json object formatted like this:
        {concerns: [{"id": string, "title": string, "description": string, "file": string},]}
        where "id" is a unique identifier for the concern, "title" is a brief description of the concern,
        "description" is a detailed description of the accessibility concerns in that file, and "file" is the file path where the concern is located.`,
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
    jsonMode: true,
    // sessionId: "accessibility-test",
    genius: true,
  };

  //   const options = {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${greptileApiKey}`,
  //       "X-GitHub-Token": gitHubToken,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(query),
  //   };
  //   console.log("OPTIONS", options);

  const response = await fetch(`${baseUrl}/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${greptileApiKey}`,
      "X-GitHub-Token": gitHubToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(query),
  });

  console.log(response);
  const data = await response.json();
  console.log("DATA:", data);
  const message = JSON.parse(data.message);
  console.log("MESSAGE:", message);

  return message.concerns;
}

// async function createIssueDescriptions(concernIds: string[]) {
//     const query = {
//         messages: [
//         {
//             id: "q-2",
//             content: `Take into account only the following concerns from the previous question: ${concernIds}.
//             Create several github issues that take into account all of the above concerns.
//             There does not to be one issue per concern. Instead, you may group similar concerns together into one issue.
//             The output format should be formatted like this:
//             [
//                 {
//                     "title": "title of the issue",
//                     "body": "body of the issue, formatted to be displayed as markdown"
//                     "labels": ["array of labels to apply to this issue"]
//                 }, {...}]

//             // do not include any other text in your response accept for the json object unless something goes wrong. do not include any new line characters like '/n' in the json.
//             // this response will be parsed into an object for use in a javascript application and must be pure json and nothing else`,
//             role: "user",
//         },
//         ],
//         sessionId: "accessibility-test",
//         genius: true,
//     };

//     const options = {
//         method: "POST",
//         headers: {
//         Authorization: `Bearer ${greptileApiKey}`,
//         "X-GitHub-Token": gitHubToken,
//         "Content-Type": "application/json",
//         },
//         body: JSON.stringify(query),
//     };

//     console.log("OPTIONS ISSUES", options);

//     const response = await fetch(`${baseUrl}/query`, options);
//     console.log("RESPONSE ISSUES", response);

//     const data = await response.json();
//     console.log("DATA ISSUES:", data);
//     const issues = JSON.parse(data.message);
// }

async function createIssueDescriptions(repo: string) {
  const query = {
    messages: [
      {
        content: `Look closely at this code base and find five accessibility concerns. Be very specific in your findings.
          Create several github issues that take into account all of the above concerns.
            There does not to be one issue per concern. Instead, you may group similar concerns together into one issue.
            The output format should be formatted like this:
            [
                {
                    "title": "title of the issue",
                    "body": "body of the issue, formatted to be displayed as markdown"
                    "labels": ["array of labels to apply to this issue"]
                }, {...}]

              In the body of the issue, include the following information:
                - A description of the issue
                - The file path where the issue is located
                - A code snippet of the issue
                - A description of how to fix the issue
                - A code snippet of the fixed code
              Do not include any other text in your response accept for the json object. do not include any new line characters like '/n' in the json.
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
    //   genius: true,
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
  // const data = await response.json();
  // console.log("DATA:", data);
  // const issues = JSON.parse(data.message);
  // console.log("ISSUES", issues);
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let jsonString = "";
  let done = false;

  while (!done) {
    const { value, done: readerDone } = await reader.read();
    done = readerDone;

    jsonString += decoder.decode(value, { stream: !done });

    // // Handle incomplete JSON
    // try {
    //     const parsedData = JSON.parse(jsonString);
    //     console.log("Parsed Data:", parsedData);
    //     // Do something with parsedData here (e.g., extracting issues)
    //     issues = parsedData;
    // } catch (error) {
    //     if (done) {
    //         console.error("Error parsing JSON:", error);
    //     }
    // }
  }
  console.log("JSON STRING", jsonString);
  const data = JSON.parse(jsonString);
  console.log("message", data.message);
  return data.message;
}

export { getAccessibilityConcerns, createIssueDescriptions };
