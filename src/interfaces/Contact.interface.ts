export interface Contact {
    name: string;
    phone: string;
    email: string;
    photo?: string | null;
    location: {
        latitude: number;
        longitude: number;
      } | null;
      address?: string;
}