# Setup Guide

Get the project running on your computer to make code changes.

## What You Need

Install these first:

- **[Git](https://git-scm.com/downloads)** - To download and track changes
- **[Node.js](https://nodejs.org/)** (version 24) - To run the website
- **[Yarn](https://yarnpkg.com/getting-started/install)** - To install dependencies

**Recommended:** Use [Homebrew](https://brew.sh/) to install Git and Node.js on macOS/Linux, then enable Yarn via [Corepack](https://nodejs.org/api/corepack.html) (included with Node.js 24+):

```bash
brew install node
corepack enable
```

## Getting Started

1. Make a copy of the project on GitHub (click "Fork")
2. Download the code:

   ```bash
   git clone https://github.com/YOUR-USERNAME/sintinhuizen.nl.git
   cd sintinhuizen.nl
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

4. Start the website:
   ```bash
   yarn dev
   ```

The website will open at `http://localhost:8000`

## Useful Commands

```bash
yarn dev             # Start the website locally
yarn lint            # Check code style
yarn check-types     # Check for errors
yarn test            # Run tests
yarn build           # Build for production
yarn lint:fix        # Auto-fix code style
```

## Before Submitting Changes

Run these to make sure everything works:

```bash
yarn lint
yarn check-types
yarn test
yarn build
```
