/** Drizzle ORM Schema
 *
 * The schema files SHOULD NOT contain any runtime logic besides defining your DB schema. In particular, your DB connection should be defined separately. Otherwise, that logic will be executed whenever you run any drizzle-kit commands.
 * Schema-related type definitions, on the other hand, are allowed and even encouraged, as they are not executed at runtime.
 *
 */

import {
  integer,
  pgTable,
  serial,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

export const countries = pgTable(
  "countries",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
  },
  (countries) => {
    return {
      nameIndex: uniqueIndex("name_idx").on(countries.name),
    };
  }
);

export const cities = pgTable("cities", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  countryId: integer("country_id").references(() => countries.id),
});
