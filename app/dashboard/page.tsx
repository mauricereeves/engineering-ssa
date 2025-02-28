import { WebServices } from "@/data/WebServices";
import webServiceCard from "@/components/WebServiceCard";

export default function Dashboard() {
  return (
    <main className="grid-row-2 mt-4 p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <h2 className="text-xl font-bold">Our available web services</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {WebServices.map((service) => webServiceCard(service))}
      </div>
    </main>
  );
}
