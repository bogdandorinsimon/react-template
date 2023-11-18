# Code Guideline

## Table of Contents

1.  [Introduction](#introduction)
2.  [Coding Style](#coding-style)
3.  [React Best Practices](#react-best-practices)
4.  [Performance Optimization](#performance-optimization)
5.  [Styling](#styling)
6.  [Testing](#testing)
7.  [Error Handling](#error-handling)
8.  [Internationalization (i18n)](#internationalization-i18n)
9.  [Development Process](#development-process)

## Introduction

This document serves as a comprehensive reference for our development team to ensure consistency, maintainability, and best practices during the development phase. The purpose of this guideline is to make things consistent throughout the project and to serve as a helpful resource for both new developers and as a reference for our established practices.

The content below should serve as a rule for our code writing and a template for code reviews. When adding comments during code reviews, you can always link to the corresponding section in this document to provide context to the author. Any additions, removals, or edits to this document should be made with the consent of the rest of the developers, following general agreements within the team.

## Coding Style

- Use `PascalCase` (capitalizing the first letter of each word) for react component names;
- Name your folders using `PascalCase`, matching the component name;
- Use the full word in compound names and not the abbreviation;

         Ex: `buttonText` and not `btnTxt`

- Use `PascalCase` instancing a component;
- Do not export default (not even React components);
- Prefix state variables with `is`, `has`, or `should` to denote boolean values;
- Prefix callback functions with `on`;

       Ex: `onSuccess`, `onError` etc.

- Use `handle` as a prefix for event handler functions;

  Ex: `handleClick`, `handleInputChange`

- Use uppercase letters with underscores to represent constants in JavaScript;

        Ex:

        ```javascript
        const API_URL = "https://my_api_implementation.com";
        ```

- Helper functions should be imperative and define the action they are performing;

        Ex: `formatDate`, `generateUniqueId` etc.

- Prefix hook names with `use`;
- Always use `camelCase` for prop names, or `PascalCase` if the prop value is a component;
- Any folder containing a react component (ie. contains an `index.tsx` file);
- For root components, use `index.tsx` as the filename which contain the component definition and use the directory name as the component name;
- The styling related to a component is defined in a separate file at the same level with `index.tsx`.

  Ex:

  -> InventoryTable
  -> index.tsx;
  -> styles.ts

- We have the following directories:

  - api: containing anything related to axios and generically related to api calls;
  - App: the app component, basically the entry point of our application;
  - assets: the place where we keep our resources like images, icons, fonts etc. They should be grouped by extensions here: `png`, `svg` etc.
  - components:

    - this directory contains reusable components that are used throughout the application. Each component defined here should have a corresponding story component, named after this pattern `NameOfTheComponent.stories.tsx`

    Ex.

    - BackButton:
      -> index.tsx
      -> styles.ts
      -> stories.tsx

    - The name of the component should be descriptive and meaningful and avoid generic words like `Component` or `Item`.
      Component's name should end with `Custom` wording;

      - context: Containing the Context definitions. Each context should contain at least two files: index.tsx to define the context and a hook file to export it;
      - features: containing a directory for each feature;
        - page directory: c
          - can contain 'components' which contain UI extracted from the main page;
          - should contain the `Page` wording at the end;
        - queries: react query queries;
        - mutations: react query mutations;
        - mock: hardcoded data needed for tests;
        - helpers.ts file: helper files used throughout the feature;
        - models.ts: models used throughout the feature;
        - reactQueryKeys: keys for react query cache related to the specific feature;
        - services: definition of services used in the feature, in combination with react query;
      - helpers: helper functions used thoroughout the project (in multiple features or a not feature related file);
      - hooks: hooks used thoroughout the project (in multiple features or a not feature related file);
      - layout: UI components used to defined the main layout of the pages (independent of features);
      - models: models used thoroughout the project (in multiple features or a not feature related file);
      - routes: UI components and entities to handle the react router navigation;
      - tests: configurations and entities related to the unit tests;
      - theme: files related to the main material ui theme of the app;
      - translations: anything related to internationalisation including the translation files;

- Use prettier for formatting with the up to date rules - format on save;
- Imports should be ordered according to pretteir config file;
- Use ESLint, Prettier (with format on save enabled) and running linters automatically on commit using Husky.

## React Best Practices

- A single component per file;

- Arrow functions to define components
  `javascript
const Foo = (props) => {
  return <div>{props.content}</div>;
};
`

- If you have a boolean prop and you want to set it to true, do not write out the value;

          Ex.

          ```javascript
          const Foo = <Bar isPersonal />;
          ```

          and not

          ```javascript
          const Foo = <Bar isPersonal={true} />;
          ```

- Use React Query for server state management handles fetching, caching, synchronizing and updating server state in the app;
- Use Context API for application state;
- Use react-hook-form and yup for managing form state and validations;
- Use type instead of interface when defining a type for component Props or a model:

  ```js
  type HeaderProps = {
    title: string
  };
  ```

  - Extract local render functions from returned JSX to simplify it;
  - Always use the `components/Form` component when creating forms;

## Performance Optimization

- Try to wrap constants that should not change too often between renders in `useMemo` calls;
- Complex functions (how complex?) should be wrapped by a useCallback call; ??
- Any new page added to the app should be splitted from the rest of the bundle and lazy loaded;

## Styling

- Use sx props from Material UI to style components;
- Always separate styling in a separate file (styles.ts);

## Testing

- Any test should be written in a file named after the following pattern: `theNameOfTheFileItIsTesting.test.ts(x)`;

       Ex.

       -> helpers.ts
       -> helpers.test.ts

       or

       InventoryTable
       -> index.tsx
       -> index.test.tsx
       -> styles.ts

## Error Handling

- For every resource coming from backend we should think about:
  - Showing the loading state - skeleton, loading indicator - as per the desig;
  - Show snackbar error message no matter the method;
  - Show snackbar sucessful message in case of DELETE, PUT, POST methods;

## Internationalization (react-intl)

- Adding a default translation message is mandatory;
- New translation files go into `translations` directory;
- Group translation strings by feature / we might want to break down into multiple files here;
- Try to use react-intl [Message Syntax](https://formatjs.io/docs/core-concepts/icu-syntax) instructions whenever is possible: arguments, plurals, ordinals etc.

## Development process

-
