# How to contribute

[sintinhuizen.nl](https://www.sintinhuizen.nl) is open source, meaning anyone can propose changes, contribute improvements, and help identify potential security issues in the code. You need a [GitHub account](https://github.com/signup) to get started.

## For everyone

No technical setup needed - for updating information on the website.

**[Content Editing Guide](/docs/content-editing.md)**

## For developers

1. Follow the [Setup Guide](/docs/setup.md)
2. Make your changes and test them with `yarn dev`
3. Push your changes to your fork
4. Submit your changes (create a "pull request")

## Automated Quality Checks

When you submit changes, GitHub Actions automatically tests your code to make sure:

- The code follows the project style
- Everything builds without errors
- The website works correctly

You'll see green checkmarks if everything passes. If something fails, click on it to see what needs fixing.

**Tip:** Run `yarn lint`, `yarn check-types`, and `yarn test` before submitting to catch issues early.

## Questions?

Open an issue on [GitHub](https://github.com/nickspaargaren/sintinhuizen.nl/issues) for help.
