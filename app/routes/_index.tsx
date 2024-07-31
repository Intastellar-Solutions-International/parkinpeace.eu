import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Park in Peace" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix!</h1>
      <p>
        This is a new Remix app. You can start editing it by opening{" "}
        <code>app/routes/_index.tsx</code>.
      </p>
    </div>
  );
}
