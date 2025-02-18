import { ApiService } from "@/types/PortalTypes";

// our web service card component so we can use this in a few different places
export default function webServiceCard(service: ApiService) {
  return (
    <div
      key={service.id}
      className="border border-gray-40 rounded-lg shadow-md p-2 m-2 white"
    >
      <h3>{service.name}</h3>
    </div>
  );
}
