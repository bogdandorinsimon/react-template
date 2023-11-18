# react-template

React template designed to serve as a quickstarter for future projects, provinding a solid foundation with essential configurations and features.

## Features

- **[React 18](https://react.dev/):** Utilizing the latest version of React;
- **[Typescript](https://www.typescriptlang.org/):** Ensuring type safety throughout the project;
- **[tanstack/react-query](https://tanstack.com/query/latest):** Managing server state efficiently;
- **[Axios](https://axios-http.com/):** Handling API calls with a promise-based HTTP client;
- **[Vite](https://vitejs.dev/):** A fast build tool that provides an optimized development experience;
- **[Vitest](https://vitest.dev/):** Integrated with React Testing Library for unit tests;
- **[MUI (Material-UI)](https://mui.com/):** Leveraging out-of-the-box components for rapid development;
- **[ESLint](https://eslint.org/):** Enforcing coding standards using the Airbnb rules;
- **[Prettier](https://prettier.io/):** Formatting code with additional support for auto-ordering imports using @trivago/prettier-plugin-sort-imports;
- **[Husky](https://typicode.github.io/husky/):** Setting up pre-commit hooks to run commitlint, lint, and prettier on staged files;
- **[Storybook](https://storybook.js.org/):** Building a UI catalog to showcase and test UI components;
- **[JSON-server](https://github.com/typicode/json-server):** For mocking REST APIs if necessary;
- **[react-intl](https://formatjs.io/docs/react-intl/):** For internationalization;
- **Confirmation dialog and snackbar implementation with Context API:** 

## Getting Started

### Prerequisites

[Node.js]((https://nodejs.org/en)) version 12.2.0 or higher and npm installed.

### Install dependencies

```bash
npm i
```

### Build for production:

```bash
npm run build
```

### Run the development server

```bash
npm run dev
```

### Run the tests

```bash
npm run test
```

### Linter and Prettier

```bash
npm run lint
npm run format
```

#### Auto-fixing:

```bash
npm run lint:fix
npm run format:fix
```

The capability of auto-fixing depends on the severity of rule(s) violation.

### JSON-server

```bash
npm run serve-json
```

By default, it will run on port 4000.

### Storybook

```bash
npm run storybook
```

The Storybook interface is available at http://localhost:6006/.

## Guidelines

- [Commit message guideline](./COMMIT_GUIDELINE.md): committing a piece of work will fail if the commit message does not respect the [conventional commits standards](https://www.conventionalcommits.org/en/v1.0.0/);
- [Coding guideline](./CODE_GUIDELINE.md);
