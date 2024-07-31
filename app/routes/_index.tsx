import type { MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import HeroBanner from "~/components/hero-banner";

export const meta: MetaFunction = () => {
  return [
    { title: "Park in Peace" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <HeroBanner />
    </>
  );
}
