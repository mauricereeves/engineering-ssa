import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-4 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-1 items-center sm:items-start">
        <Link className="hover:text-blue-600" href={"/dashboard"}>
          Go to the Dashboard
        </Link>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        This is the Engineering at SSA Page. You will learn a lot here!
      </footer>
    </div>
  );
}
