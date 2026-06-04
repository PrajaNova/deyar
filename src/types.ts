export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'coffee' | 'tea' | 'pastries' | 'seasonal';
  image: string;
  tags: string[];
  isSeasonal?: boolean;
  customizationOptions?: {
    name: string;
    options: string[];
  }[];
}

export interface CartItem {
  id: string; // unique cart line ID (item_id + options combination)
  menuItem: MenuItem;
  quantity: number;
  selectedOptions: { [key: string]: string };
  notes?: string;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  tableNumber?: number;
  specialRequests?: string;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}
