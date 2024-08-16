"use server";
import Loading from "@/app/loading";
const baseUrl = process.env.GREPTILE_API_BASE_URL;
const gitHubToken = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
const greptileApiKey = process.env.GREPTILE_API_KEY;

import AccessibilityConcernCard from "@/components/AccessibilityConcernCard";
import AccessibilityConcernCardList from "@/components/AccessibilityConcernCardList";

async function getAccessibilityConcerns(repo: string) {
  //
  //
  // commenting out the fetch request to the Greptile API for now! replacing with placeholder data.
  //
  //
  //     const query = {
  //         messages: [
  //           {
  //             id: "q-1",
  //             content:
  //               "Find all accessibility issues in this code base. The output format for should be a json string of an array of accessibility issues that starts with '[' and ends with ']'. each item in this list is a separate accessibility issue and should start with '{' and end with '}', with these key value pairs: 'id': <unique identifier for this issue>, 'issueTitle': <string describing issue briefly>, 'issueDescription':<string description of accessibility issue>, 'issueFile':<the file path where this issue is>, 'issueLines': <lines where this issue is in the format 5-8>, 'sourceCode':<snippet of code with this issue>, 'solutionDescription': <string of description of how to fix accessibility issue>, 'codeSolution': <code snippet of the fixed code> Do not include any other text in your response accept for the json object. do not include any new line characters like '/n' in the json. this response will be parsed to use in an application and must be pure json and nothing else",
  //             role: "user",
  //           },
  //         ],
  //         repositories: [
  //           {
  //             remote: "github",
  //             repository: "katemoser/one-thing",
  //             branch: "main",
  //           },
  //         ],
  //         sessionId: "accessibility test",
  //         genius: true,
  //       };

  //   const options = {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${greptileApiKey}`,
  //       "X-GitHub-Token": gitHubToken,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(query)
  // }
  //   const response = await fetch(`${baseUrl}/query`, options);
  //   console.log(response);
  //   const data = await response.json();
  //   console.log("DATA:", data);
  //   const issues = JSON.parse(data.message);
  const issues = [
    {
      id: "A001",
      issueTitle: "Missing alt text for button icon",
      issueDescription:
        "The Button component in AllComplete.tsx does not have an alt text for its icon, which can make it difficult for screen reader users to understand the button's purpose.",
      issueFile: "/components/AllComplete.tsx",
      issueLines: "16-18",
      sourceCode:
        '<Button asChild><Link href="/reports">View Reports</Link></Button>',
      solutionDescription:
        "Add an aria-label to the Button component to describe its purpose.",
      codeSolution:
        '<Button asChild aria-label="View Reports"><Link href="/reports">View Reports</Link></Button>',
    },
    {
      id: "A002",
      issueTitle: "Insufficient color contrast in light mode",
      issueDescription:
        "The color contrast between the background and foreground in light mode may not meet WCAG 2.1 AA standards for some color combinations.",
      issueFile: "/app/globals.css",
      issueLines: "4-35",
      sourceCode:
        ":root { --background: 0 0% 100%; --foreground: 222.2 84% 4.9%; ... }",
      solutionDescription:
        "Adjust the color values to ensure a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text.",
      codeSolution:
        ":root { --background: 0 0% 100%; --foreground: 222.2 84% 10%; ... }",
    },
    {
      id: "A003",
      issueTitle: "Lack of focus styles",
      issueDescription:
        "The global CSS does not define clear focus styles, which can make it difficult for keyboard users to navigate the interface.",
      issueFile: "/app/globals.css",
      issueLines: "1-3",
      sourceCode: "@tailwind base; @tailwind components; @tailwind utilities;",
      solutionDescription:
        "Add custom focus styles or ensure Tailwind's focus styles are properly applied.",
      codeSolution:
        "@tailwind base; @tailwind components; @tailwind utilities; @layer base { *:focus { outline: 2px solid #4299e1; outline-offset: 2px; } }",
    },
    {
      id: "A004",
      issueTitle: "Missing form labels",
      issueDescription:
        "The codebase may contain form inputs without associated labels, which can make forms difficult to use for screen reader users.",
      issueFile: "/app",
      issueLines: "N/A",
      sourceCode: "N/A",
      solutionDescription:
        "Ensure all form inputs have associated labels using the 'for' attribute or wrapping the input with a label element.",
      codeSolution:
        '<label for="username">Username:</label><input id="username" type="text" />',
    },
    {
      id: "A005",
      issueTitle: "Lack of ARIA landmarks",
      issueDescription:
        "The application structure may not use proper ARIA landmarks, making it difficult for screen reader users to navigate the content.",
      issueFile: "/app/layout.tsx",
      issueLines: "N/A",
      sourceCode: "N/A",
      solutionDescription:
        "Add appropriate ARIA landmarks such as <header>, <nav>, <main>, and <footer> to structure the content.",
      codeSolution:
        '<body><header role="banner">...</header><nav role="navigation">...</nav><main role="main">...</main><footer role="contentinfo">...</footer></body>',
    },
  ];

  return issues;
}

export default async function AccessibilityConcerns({
  params,
}: {
  params: { repo: string };
}) {
  const repo = params.repo;
  console.log(repo);

  const concerns = await getAccessibilityConcerns(repo);
  console.log("ISSUES FROM API:", concerns);

  async function deleteConcern(id: string) {
    "use server";
    console.log("Deleting issue with ID:", id);
  }
  return (
    <div>
      <h1>Accessibility Concerns for {repo}</h1>
      <p>Issues for {repo}</p>
      <AccessibilityConcernCardList initialConcerns={concerns}/>
    </div>
  );
}
