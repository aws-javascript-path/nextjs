# NEXT SETUP

This version uses pnpm instead of npm or yarn.  

See https://nextjs.org/learn/dashboard-app/getting-started

## Type Script Note
f you're a TypeScript developer:

We're manually declaring the data types, but for better type-safety, we recommend Prisma or Drizzle, which automatically generates types based on your database schema.
Next.js detects if your project uses TypeScript and automatically installs the necessary packages and configuration. Next.js also comes with a TypeScript plugin for your code editor, to help with auto-completion and type-safety.

```
# uinstall packages
pnpm i

# start dev
pnpm dev

```