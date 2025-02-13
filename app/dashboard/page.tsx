import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="grid grid-rows-3 items-center justify-items-center">
      <header className="grid-row-1 mt-4">
        <Link className="hover:text-blue-500" href={"/"}>
          Go back to the Home Page
        </Link>
      </header>
      <main className="grid-row-2">
        <p>Here is the dashboard content</p>
      </main>
    </div>
  );
}
