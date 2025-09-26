export interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  rating: number;
  totalRatings: number;
  image: string;
  price: number;
  originalPrice?: number;
  category: string;
}

export interface Department {
  id: string;
  name: string;
  icon: string;
  courses: Course[];
}

export type Language = {
  code: string;
  name: string;
  nativeName: string;
};

export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}