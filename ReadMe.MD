# GraphQL Test

A test project to play around with GraphQL.

## API

Implemented using Express.js and Prisma, written in TypeScript.

### Commands

`pnpm dev` - Starts the dev server in watch mode.

`pnpm build` - Compile TypeScript to JavaScript in `/dist` folder.

`pnpm start` - Starts the server in production mode (in the `/dist` folder).

`pnpm db:push` - Pushes the Prisma schema to the database (also generates the DBML).

`pnpm db:migrate` - Creates new database migrations and pushes them to the database.

## Client

Implemented using Next.js and Tailwind CSS, with TypeScript.

### Commands

`pnpm dev` - Starts the dev server in watch mode.

`pnpm build` - Compile TypeScript to JavaScript.

`pnpm start` - Starts the server in production mode.
