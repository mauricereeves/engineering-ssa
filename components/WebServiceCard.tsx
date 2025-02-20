import { ApiService } from "@/types/PortalTypes";
import Link from "next/link";
import TextEllipsis from "@/components/TextEllipsisComponent";

// our web service card component so we can use this in a few different places
export default function webServiceCard(service: ApiService) {
  return (
    <div
      key={service.id}
      className="border border-gray-40 rounded-lg shadow-md p-2 m-2 white"
    >
      <h3>
        <Link
          className="hover:text-blue-300"
          href={`/service-info/${service.id}`}
        >
          {service.name}
        </Link>
      </h3>
      <div>{TextEllipsis(service.description)}</div>
    </div>
  );
}
