import Link from "next/link";
import { WebServices } from "@/data/WebServices";
import { ApiService } from "@/types/PortalTypes";

function webServiceCard(service: ApiService) {
  return (
    <div key={service.id} className="border border-gray-400 p-2">
      <h3>{service.name}</h3>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="grid grid-rows-[25 fr 25]">
      <header className="grid-row-1 bg-gray-200 p-4 border-gray-600 border-solid">
        <Link className="hover:text-blue-500" href={"/"}>
          Go back to the Home Page
        </Link>
      </header>
      <main className="grid-row-2 mt-4 p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>This is the dashboard page.</p>
        <div>
          <h2 className="text-xl font-bold">Our available web services</h2>
          <ul>{WebServices.map((service) => webServiceCard(service))}</ul>
        </div>
      </main>
      <footer className="grid-row-3 fixed inset-x-0 bottom-0 justify-items-center items-center bg-gray-200 p-4 border-gray-600 border-solid">
        <div>This is a website of the United States Government.</div>
      </footer>
    </div>
  );
}
