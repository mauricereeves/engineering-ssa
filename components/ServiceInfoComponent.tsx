"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { WebServices } from "@/data/WebServices";
import { ApiService } from "@/types/PortalTypes";
import Link from "next/link";
import path from "path";

export default function ServiceInfoComponent() {
  const id = 1;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Find the service by ID
  const service: ApiService | undefined = WebServices.find(
    (service) => service.id === Number(id),
  );

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <main className="mt-4 p-4">
      <h1 className="text-2xl font-bold">{service.name}</h1>
      <p>{service.description}</p>
      <p>
        <strong>Documentation URL:</strong>{" "}
        <a href={service.documentationUrl} className="text-blue-500">
          {service.documentationUrl}
        </a>
      </p>
      <h2 className="text-xl font-bold mt-4">Contacts</h2>
      <ul>
        {service.contacts?.map((contact) => (
          <li key={contact.id}>
            <p>
              <strong>Name:</strong> {contact.name}
            </p>
            <p>
              <strong>Email:</strong> {contact.email}
            </p>
            {contact.phone && (
              <p>
                <strong>Phone:</strong> {contact.phone}
              </p>
            )}
          </li>
        ))}
      </ul>
      Path Name: {pathname}
      <br />
      Search Params: {searchParams.toString()}
    </main>
  );
}
