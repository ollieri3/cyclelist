import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

import * as schema from "./schema";

const client = new pg.Client({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "secret", // TODO: This is local only, switch to env var
  database: "cyclelist",
});

client.connect();

const db = drizzle(client, { schema });

// Cities in england
// Source: https://www.gov.uk/government/publications/list-of-cities/list-of-cities-html
const cities = [
  "Bath",
  "Birmingham",
  "Bradford",
  "Brighton & Hove",
  "Bristol",
  "Cambridge",
  "Canterbury",
  "Carlisle",
  "Chelmsford",
  "Chester",
  "Chichester",
  "Colchester",
  "Coventry",
  "Derby",
  "Doncaster",
  "Durham",
  "Ely",
  "Exeter",
  "Gloucester",
  "Hereford",
  "Kingston-upon-Hull",
  "Lancaster",
  "Leeds",
  "Leicester",
  "Lichfield",
  "Lincoln",
  "Liverpool",
  "London",
  "Manchester",
  "Milton Keynes",
  "Newcastle-upon-Tyne",
  "Norwich",
  "Nottingham",
  "Oxford",
  "Peterborough",
  "Plymouth",
  "Portsmouth",
  "Preston",
  "Ripon",
  "Salford",
  "Salisbury",
  "Sheffield",
  "Southampton",
  "Southend-on-Sea",
  "St Albans",
  "Stoke on Trent",
  "Sunderland",
  "Truro",
  "Wakefield",
  "Wells",
  "Westminster",
  "Winchester",
  "Wolverhampton",
  "Worcester",
  "York",
];

console.log("Inserting Cities");

for (const city of cities) {
  await db
    .insert(schema.cities)
    .values({
      name: city,
      countryId: 1, // 1 is UK,
      constituentCountryId: 1, // 1 is England
    })
    .catch((err) => {
      console.error(err);
    });
}

console.log("Done");

client.end();
