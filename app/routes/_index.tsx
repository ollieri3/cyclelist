import type { MetaFunction } from "@remix-run/node";
import { db } from "../lib/db.server";

export const meta: MetaFunction = () => {
  return [{ title: "Cyclelist" }];
};

export async function loader() {
  const cities = await db.query.cities.findMany();
  console.log("cities: ", cities);
  return null;
}

export default function Index() {
  return <h1>Cyclelist</h1>;
}
