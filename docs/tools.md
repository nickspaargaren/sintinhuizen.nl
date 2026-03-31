# Tools & Technologies

This page provides an overview of the technologies used in this project. You don't need to understand all of this to contribute - this is primarily for developers who want to understand the technical stack.

## What You See (Frontend)

The website that visitors see is built with:

- **[Gatsby](https://www.gatsbyjs.com/)** - Framework that generates fast, static websites
- **[React](https://react.dev/)** - Library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with type checking to catch errors
- **[TailwindCSS](https://tailwindcss.com/)** - CSS framework for styling
- **[Cypress](https://www.cypress.io/)** - Automated testing tool

## Where Content Lives (Backend)

Content is managed through:

- **[Sanity](https://www.sanity.io/)** - Content management system (CMS) where editors can update text, images, and other content
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with type checking

## Development Tools

Tools used to build and maintain the project:

- **[Yarn](https://yarnpkg.com/)** - Manages project dependencies (required files and tools)
- **[Turbo](https://turbo.build/)** - Coordinates builds across multiple project parts
- **[Git](https://git-scm.com/)** - Tracks changes to the code
- **[Node.js](https://nodejs.org/)** - Runs JavaScript code on your computer
- **[ESLint](https://eslint.org/)** - Checks code style and catches common errors
- **[Prettier](https://prettier.io/)** - Automatically formats code consistently

## Project Structure

This project uses a monorepo structure (project with multiple parts):

- **`frontend/`** - The Gatsby-based website that visitors see
- **`backend/`** - The Sanity CMS studio where content is managed

Content is managed in Sanity CMS and automatically appears on the Gatsby website.
