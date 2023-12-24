import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Cyclelist" }];
};

export default function Index() {
  return <h1>Cyclelist</h1>;
}
