import { json, type MetaFunction } from "@remix-run/node";
import { db } from "../lib/db.server";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Cyclelist" }];
};

export async function loader() {
  const cities = await db.query.cities.findMany({
    columns: {
      id: true,
      name: true,
    },
  });
  return json(cities);
}

export default function Index() {
  const cities = useLoaderData<typeof loader>();

  return (
    <>
      <h1>Cycle list</h1>
      <ol>
        {cities.map((city) => (
          <li key={city.id}>{city.name}</li>
        ))}
      </ol>
    </>
  );
}
