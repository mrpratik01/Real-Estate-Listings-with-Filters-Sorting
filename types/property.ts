// I defined property interface in different file for better code readility and maintainability.

export interface Property {
  id: number;
  image: string[];
  
  address: string;
  size: string;
  bedrooms: number;
  bathrooms: number;
  price: number;
  propertyType: string;
  furnishing: string;
  parking: string;
  view: string;
  balcony: string;
  amenities: string[];
  yearBuilt: number;
  agentName: string;
  agentContact: string;
  description: string;
  added: string;
}
