import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

const pool = new pg.Pool({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "secret", // TODO: This is local only, switch to env var
  database: "cyclelist",
});

export const db = drizzle(pool);
