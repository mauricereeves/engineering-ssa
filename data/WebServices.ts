import { ApiService } from "../types/PortalTypes";

// This is a mock data source for the Web Services page.
export const WebServices: ApiService[] = [
  {
    id: 1,
    name: "API 1",
    description: "This is the first API",
    active: true,
    documentationUrl: "https://api1.com",
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
      },
    ],
  },
  {
    id: 2,
    name: "API 2",
    description: "This is the second API",
    active: true,
    documentationUrl: "https://api2.com",
    contacts: [
      {
        id: 2,
        name: "Jane Doe",
        email: "",
      },
    ],
  },
];
