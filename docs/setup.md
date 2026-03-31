# Setup Guide

Get the project running on your computer to make code changes.

## What You Need

Install these first:

- **Git** - To download and track changes
- **Node.js** - To run the website
- **Yarn** - To install dependencies

## Getting Started

1. Download the code:

   ```bash
   git clone https://github.com/YOUR-USERNAME/sintinhuizen.nl.git
   cd sintinhuizen.nl
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the website:
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
