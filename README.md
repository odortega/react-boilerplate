# React Boilerplate

This project is a custom React boilerplate based on Create React App (CRA) designed to kickstart development with a pre-configured setup. It integrates a robust set of tools and libraries to provide a comprehensive starting point for React applications.

## Features 🌟

- **Create React App (CRA)**: Leverages CRA for a smooth development experience and optimized build process.
- **State Management**: Utilizes MobX for efficient and scalable state management.
- **Routing**: Implements React Router for navigation.
- **UI Components**: Includes Ant Design for a comprehensive set of high-quality components.
- **Styling**: Styled-components for component-scoped styles.
- **Internationalization**: i18next for easy localization and internationalization.
- **Testing**: Setup with Jest, React Testing Library, and Cypress for unit, integration, and end-to-end testing.
- **Storybook**: Integrated for component development and documentation.
- **Code Quality**: Pre-configured ESLint, Husky hooks for pre-commit and pre-push testing ensuring code quality and consistency.

## Dependencies 📦

- `react` & `react-dom` for building the user interface.
- `mobx` & `mobx-react` for state management.
- `react-router-dom` for navigation and routing.
- `antd` for UI components.
- `styled-components` for CSS in JS styling.
- `i18next`, `i18next-browser-languagedetector`, `i18next-http-backend`, `react-i18next` for internationalization.
- `@testing-library/user-event`, `jest-fetch-mock` for testing utilities.
- Plus, development tools like Storybook, Cypress, and more for an enhanced development experience.


## Simple Projects list example 📁

The react-boilerplate project's structure looks similar to this:

react-boilerplate/
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── components
    │   └── Project
    │       ├── Project.jsx
    │       ├── Project.props.js
    │       └── Project.styled.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── model
    │   └── projects
    │       ├── ProjectStoreContext.js
    │       └── projects-store.js
    ├── reportWebVitals.js
    ├── screens
    │   └── projects
    │       ├── projects-screen.jsx
    │       ├── projects-screen.props.js
    │       └── projects-screen.styled.js
    ├── services
    │   └── api
    │       ├── api.js
    │       └── projects-api.js
    ├── setupTests.js
    ├── stories
    │   ├── Button.jsx
    │   ├── Button.stories.jsx
    │   ├── Header.jsx
    │   ├── Header.stories.jsx
    │   ├── Introduction.stories.mdx
    │   ├── Page.jsx
    │   ├── Page.stories.jsx
    │   ├── assets
    │   │   ├── code-brackets.svg
    │   │   ├── colors.svg
    │   │   ├── comments.svg
    │   │   ├── direction.svg
    │   │   ├── flow.svg
    │   │   ├── plugin.svg
    │   │   ├── repo.svg
    │   │   └── stackalt.svg
    │   ├── button.css
    │   ├── header.css
    │   └── page.css
    ├── test
    │   └── services
    │       └── api
    │           ├── api.test.js
    │           └── projects-api.test.js
    └── utils
        └── i18n
            ├── en.json
            ├── es.json
            └── index.js
            

## Scripts 🛠️

- `npm start`: Runs the app in development mode.
- `npm build`: Builds the app for production.
- `npm test`: Runs the test suite.
- `npm run storybook`: Starts the Storybook UI.
- `npm run build-storybook`: Builds the Storybook for deployment.

## Code Quality ✨

- ESLint for static code analysis.
- Husky hooks integrated for automated linting and testing before commits and pushes.

## Getting Started 🚀

Clone the repository and install dependencies:

```bash
git clone https://github.com/odortega/react-boilerplate.git
cd react-boilerplate
npm install
```
