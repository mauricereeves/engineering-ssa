// wraps the contact person for an API
export interface Contact {
  id: number;
  // name of the contact person
  name: string;
  // email of the contact person
  email: string;
  // they may not have a usable contact phone number or we may not want to add it
  phone?: string | undefined;
}

// the API that users can look for
export interface ApiService {
  id: number;
  // name of the service
  name: string;
  // a long description
  description: string;
  // is the service currently active
  active: boolean;
  // the URL to the documentation for the API
  documentationUrl: string;
  // a collection of contacts who are responsible for the API
  // and can answer additional questions about it or help provide
  // support
  contacts?: Contact[];
  // a collection of tags that can be used to categorize the API along
  // with an optional value for the tag just in case we want to add those
  // as well. In my opinion tags are better as atomic values but sometimes
  // people want to add a tag with a value so we can support that as well
  tags?: { [key: string]: string | undefined };
}
