# Tools & Technologies

## Frontend

### Core Framework

- **[Gatsby](https://www.gatsbyjs.com/)** - React-based static site generator
- **[React](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework

### Testing

- **[Cypress](https://www.cypress.io/)** - End-to-end testing

## Backend

### CMS

- **[Sanity](https://www.sanity.io/)** - Headless CMS
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

## Development Tools

### Package Management

- **[Yarn](https://yarnpkg.com/)** - Package manager
- **[Turbo](https://turbo.build/)** - Monorepo build system

### Version Control

- **[Git](https://git-scm.com/)** - Source control

### Runtime

- **[Node.js](https://nodejs.org/)** - JavaScript runtime

### Code Quality

- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting

## Architecture

This project uses a **monorepo structure** with two main packages:

- **`frontend/`** - Gatsby-based website
- **`backend/`** - Sanity CMS studio

Content is managed in Sanity CMS and consumed by the Gatsby frontend via the GraphQL API.
