
## What is this?

A11y Ally is an application that harnesses the Greptile API to audit your code base for accessibility concerns. After finding accessibility concerns, it gives you the option to generate issues, edit them (in MarkDown) in app, and then publish the issues to GitHub.

## Who is this for?

This is built for developers working on their own, on a small team, or running an open source project. Web accessibility is hugely important, but something that a lot of independent devs and teams treat as an afterthought. My goal in creating this is to help people make their applications and websites more accessible and teaching them something about web accessibility in the process.

## How do I use it?

### Getting Started

First, install dependencies:

```bash
npm i
```

Then, set up your ``.env`` file:

```bash
GREPTILE_API_KEY=
GREPTILE_API_BASE_URL=
GITHUB_PERSONAL_ACCESS_TOKEN=
GITHUB_API_BASE_URL=
NEXT_PUBLIC_GITHUB_USERNAME=
```

- To get your Greptile API Key, visit this link: https://app.greptile.com/api
- To set up your GitHub Personal Acces Token, [follow these instructions](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic)
    - When selecting your permissions for this PAT, make sure you select ``repo``

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your brower to use the app.

### Using the App

#### NOTE: A11y Ally currently only works on repos that have already been index via Greptile. [Click this link](https://docs.greptile.com/api-reference/index) for instructions on how to do this.

- First, enter the name of the repository you would like to audit:


https://github.com/user-attachments/assets/7b6da3f4-069d-440d-98cc-c429165512a9


- Several security concerns will be generated, organized by file. One by one, you can decide whether you want to create an issue or ignore the concern for now:


https://github.com/user-attachments/assets/feb0a8e1-0e64-452a-a51f-48eccec2efbe


- After generating the Issue text, you can edit the markdown and publish it to github:


https://github.com/user-attachments/assets/61345872-81cb-4e48-bf14-2c53a8e268b2


- Go look at your new issue in Github:


https://github.com/user-attachments/assets/e8d7f44a-9164-497c-8212-3c603c3a877c


- And that's it!

## What's next?

### Short Term

- [ ] While currently this application only addresses accessibility issues, with a few small tweaks to the prompts it could be used to generate any kind of issue: bugs, typing issues, security concerns, optimization, and even suggesting new features.
- [ ] Currently this only works for repositories that have already been indexed by Greptile, but I would like to add functionality to index new repos in the app.
- [ ] Look into adding login with github, and how that would work with PAT/permissions
- [ ] Add in labels -- pull labels already used in this repository and suggest labels to the issue.
- [ ] Design custom high contrast theme with DaisyUI (helpful guide here: https://chrisvaillancourt.io/posts/customizing-daisyui-themes-for-accessible-color-contrast/)
- [ ] Add more error handling.
	- [ ] Have the API respond in a specific way if unable to generate an issue, so we can use that on the front end to display a helpful error message.
	- [ ] Have the API respond in a specific way if unable to find any accessibility concerns so we can communicate that to the user

### Long Term

I would love to build this out into a milestone (sprint) creation tool; you could input some user stories and have it break them up into smaller issues, find un-documented high-priority bugs, and combine these new issues with some existing issue in the code base to build a well balanced sprint. Combined with the GitHub API you would even be able to analyze the success of previous sprints with your team, to ensure that the new sprint you're building is realistic.

## Tools used

- This was built with Greptile, Next.js, Typescript, and Tailwind.
- I used DaisyUI for theming and styling.
- I used GitHub Copilot in VScode to help find some sneaky syntax errors and add some tailwind classes.
- I used ChatGPT for some broader questions about streaming data from an API and GitHub Personal Access Token permissions.
- I used the Greptile chat bot for suggestions on how I could improve my code and organization.
- And I used A11y Ally, the tool I just created, to find accessibility issues in my accessibility issue finder 🤯
