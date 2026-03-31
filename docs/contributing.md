# Contributing to Sintinhuizen.nl

## Making a Change

For simple text or content changes, you can edit files directly on [GitHub](https://github.com/nickspaargaren/sintinhuizen.nl):

1. Navigate to the file you want to edit on GitHub
2. Click the pencil icon (Edit this file)
3. Click on "Fork this repository"
4. Make your changes
5. Click on "Commit changes..."
6. Add a description of your change as a "Commit message"
7. Click on "Propose changes"
8. Click on "Create pull request"
9. Add a title and description of your change
10. Click on "Create pull request"

## Making Code Changes

If you're making code changes:

1. Fork (make a copy of) the repository
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/sintinhuizen.nl.git
   ```
3. Install dependencies:
   ```bash
   yarn install
   ```
4. Create a new branch for your changes:
   ```bash
   git checkout -b your-change-name
   ```
5. Make your changes and test them locally with `yarn dev`
6. Commit your changes with a clear message
7. Push to your fork and submit a pull request

## Automated Checks

When you submit a pull request, GitHub will automatically run several quality checks on your code. These are called [GitHub Actions](https://docs.github.com/en/actions) - automated tests that help ensure the code works correctly and follows the project's standards.

You'll see these checks running at the bottom of your pull request. They need to show green checkmarks before your changes can be merged. If any checks fail (red X), don't worry! You can click on the failed check to see what went wrong and fix it.

All pull requests must pass the following [automated workflows](https://github.com/nickspaargaren/sintinhuizen.nl/tree/master/.github/workflows):

### CI Workflow

This checks code quality and ensures the project builds correctly:

- **ESLint** - Checks code style and catches common errors (`yarn lint`)
- **TypeScript** - Verifies type safety (`yarn check-types`)
- **Build** - Makes sure the project builds without errors (`yarn build`)

### Tests Workflow

This runs automated tests to verify everything works:

- **Cypress** - Tests the website functionality automatically (`yarn test`)

**Tip:** You can run these checks locally before submitting your pull request to catch issues early and ensure they will pass.

## Questions?

If you have questions, feel free to open an issue for discussion.
