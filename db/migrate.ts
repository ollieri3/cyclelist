import { resolve } from "path";
import { fileURLToPath } from "url";

import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";

import * as schema from "./schema";

import pg from "pg";

const client = new pg.Client({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "secret", // TODO: This is local only, switch to env var
  database: "cyclelist",
});

client.connect();

const db = drizzle(client, { schema });

const migrationsPath = resolve(fileURLToPath(import.meta.url), "../../drizzle");

// This will run migrations on the database, skipping the ones already applied
await migrate(db, { migrationsFolder: migrationsPath });

// Don't forget to close the connection, otherwise the script will hang
await client.end();
