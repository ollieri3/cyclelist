import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    host: "127.0.0.1",
    user: "postgres",
    password: "secret", // TODO: This is local only, switch to env var
    database: "cyclelist",
  },
} satisfies Config;
