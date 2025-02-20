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
  {
    id: 3,
    name: "API 3",
    description:
      "This is the third API with a really really really really long description that is going to be truncated for display purposes",
    active: true,
    documentationUrl: "https://api3.com",
    contacts: [
      {
        id: 1,
        name: "Jane Doe",
        email: "",
      },
    ],
  },
  {
    id: 4,
    name: "API 4",
    description: "This is the fourth API",
    active: true,
    documentationUrl: "https://api4.com",
    contacts: [
      {
        id: 7,
        name: "Jane Doe",
        email: "",
      },
    ],
  },
];
