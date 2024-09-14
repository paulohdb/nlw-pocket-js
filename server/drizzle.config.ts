import { defineConfig } from 'drizzle-kit'
import { env } from './src/env'

export default defineConfig({
  schema: './src/db/schema.ts',
  dialect: 'postgresql', // "mysql" | "sqlite" | "postgresql"
  out: './.migrations',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
