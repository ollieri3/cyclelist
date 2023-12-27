import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

import { ENV } from "./environment.server";
import * as schema from "../../db/schema";

const pool = new pg.Pool({
  host: ENV.DB_HOST,
  port: ENV.DB_PORT,
  user: ENV.DB_USER,
  password: ENV.DB_PASSWORD,
  database: "cyclelist",
});

export const db = drizzle(pool, { schema });
