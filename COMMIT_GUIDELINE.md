## Commit Message Format

Each commit message consists of a `header`, a `body` and a `footer`. The `header` has a special format that includes a `type`, a `scope` and a `subject`:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The `header` is mandatory along with all of its components: `type`, `scope` and `subject`.

### Type (mandatory)

Must be one of the following:

- `feat`: A new feature;
- `fix`: A bug fix;
- `docs`: Documentation only changes;
- `refactor`: A code change that neither fixes a bug nor adds a feature;
- `test`: Adding missing or correcting existing tests;
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation, storybook etc.

### Scope (mandatory)

The `scope` should be the ticket that is associated with the current contribution.

### Subject (mandatory)

The `subject` contains a succinct description of the change:

- Use the imperative, present tense: "change" not "changed" nor "changes";
- Don't capitalize first letter;
- Do not add a dot (.) at the end;

### Body (optional)

Just as in the `subject`, use the past tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

### Footer (optional)

The `footer` should contain any information about Breaking Changes.
Breaking Changes should start with the word BREAKING CHANGE: with a space or two newlines. The rest of the commit message is then used for this.

## Hooks

Note there is a pre-commit [`husky`](https://typicode.github.io/husky/) hook which runs `npm run lint:fix`, `npm run format:fix` on the staged files, along with a [`commitlint`](https://github.com/conventional-changelog/commitlint) validation. If the auto-fixing is not possible, the commit will fail.
