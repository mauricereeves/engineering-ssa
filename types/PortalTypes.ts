export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface ApiService {
  id: number;
  name: string;
  description: string;
  active: boolean;
  documentationUrl: string;
  contacts: Contact[];
}
