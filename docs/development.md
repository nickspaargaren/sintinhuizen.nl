# Development

## Available Commands

```bash
yarn install         # Install the dependencies
yarn dev             # Start the project including dev output
yarn build           # Build the project for production
yarn clean           # Delete the .cache and public directories
yarn test            # Run the project end-to-end tests
yarn lint            # Run the project codestyle check
yarn lint:fix        # Run the project codestyle fix
yarn check-types     # Run the project typescript check
```

## Local Development

After running `yarn install` and `yarn dev`, the project will be available at:

- **Frontend**: `http://localhost:8000`
- **Backend**: `http://localhost:3333`

## Development Workflow

1. Make your changes to the codebase
2. Test locally with `yarn dev`
3. Run linting with `yarn lint`
4. Run type checking with `yarn check-types`
5. Run tests with `yarn test`
6. Build for production with `yarn build` to verify everything works
