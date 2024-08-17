
### What is this?


### Who is this for?

This is built for developers working on their own, on a small team, or running an open source project. Web accessibility is hugely important, but something that a lot of independent devs and teams treat as an afterthought. My goal in creating this is to help people make their applications and websites more accessible and teaching them something about web accessibility in the process.

### What's next?

###### Short Term

- [ ] While currently this application only addresses accessibility issues, with a few small tweaks to the prompts it could be used to generate any kind of issue: bugs, typing issues, security concerns, optimization, and even suggesting new features.
- [ ] Currently this only works for repositories that have already been indexed by Greptile, but I would like to add functionality to index new repos in the app.
- [ ] Look into adding login with github, and how that would work with PAT/permissions
- [ ] Add in labels -- pull labels already used in this repository and suggest labels to the issue.
- [ ] Design custom high contrast theme with DaisyUI (helpful guide here: https://chrisvaillancourt.io/posts/customizing-daisyui-themes-for-accessible-color-contrast/)
- [ ] Add more error handling.
	- [ ] Have the API respond in a specific way if unable to generate an issue, so we can use that on the front end to display a helpful error message.
	- [ ] Have the API respond in a specific way if unable to find any accessibility concerns so we can communicate that to the user

###### Long Term

I would love to build this out into a milestone (sprint) creation tool; you could input some user stories and have it break them up into smaller issues, find un-documented high-priority bugs, and combine these new issues with some existing issue in the code base to build a well balanced sprint. Combined with the GitHub API you would even be able to analyze the success of previous sprints with your team, to ensure that the new sprint you're building is realistic.

### Tools used

- This was built with [[Greptile]], [[Next.js]], [[Typescript]], and [[Tailwind]].
- I used DaisyUI for theming and light styling.
- I used GitHub Copilot in VScode to help find some sneaky syntax errors and add some tailwind classes.
- I used ChatGPT for some broader questions about streaming data from an API and GitHub Personal Access Token permissions.
- I used the Greptile chat bot for suggestions on how I could improve my code and organization.
- And I used the tool I just created to find accessibility issues in my accessibility issue finder.

## Getting Started

First, install dependencies:

```bash
npm i
```

Then, set up your ``.env`` file:
```
...
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
