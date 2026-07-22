export type EventType = 'boda' | 'quinceanero' | 'despedida' | 'cumpleanos' | 'aniversario' | 'corporativo';

export interface EventCategory {
  id: EventType;
  title: string;
  tag: string;
  badgeColor: string;
  description: string;
  includedItems: string[];
  recommendedGuests: string;
  popularAddon: string;
  basePricePerGuest: number;
}

export interface VenueSpace {
  id: string;
  name: string;
  subtitle: string;
  capacity: string;
  areaSize: string;
  description: string;
  image: string;
  features: string[];
  idealFor: string[];
}

export interface PackageOption {
  id: string;
  name: string;
  subtitle: string;
  priceEstimate: string;
  pricePerGuest: number;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
}

export interface AddOnOption {
  id: string;
  name: string;
  category: 'catering' | 'bar' | 'show' | 'decor' | 'photo';
  price: number;
  description: string;
  iconName: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  eventType: string;
  date: string;
  rating: number;
  location: string;
  image?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'reserva' | 'catering' | 'instalaciones' | 'pagos';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'salon' | 'jardin' | 'catering' | 'decoracion' | 'luces';
  image: string;
  caption: string;
}
