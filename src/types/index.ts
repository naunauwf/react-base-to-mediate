export interface CardProps {
  title: string;
  description: string;
  image?: string;
  href?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  href: string;
  imgUrl: string;
  role: string;
  username?: string;
  description: string,
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: string;
      lng?: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
}
