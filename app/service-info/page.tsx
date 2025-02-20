import Link from "next/link";
import { ApiService } from "@/types/PortalTypes";
import { WebServices } from "@/data/WebServices";

export default function serviceInfo() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {WebServices.map((service: ApiService) => (
            <tr key={service.id}>
              <td>
                <Link href={`/service-info/${service.id}`}>{service.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
