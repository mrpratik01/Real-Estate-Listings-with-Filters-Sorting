
//Fetching data from the API router and filtering and sorting the data based on the user's input.

import { Property } from "../types/property";

export const getProperties = async (): Promise<Property[]> => {
  const response = await fetch(`http://localhost:3000/api/properties`);
  if (!response.ok) {
    throw new Error('Failed to fetch properties');
  }
  const data = await response.json();

  // returned data is an array of properties

  return data;
};


// Fetching a single property based on the ID

export const getSinglePropertie = async (id: number): Promise<Property | null> => {
  const response = await fetch(`http://localhost:3000/api/properties?id=${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch property');
  }
  const data = await response.json();
  return data ? data : null;
};

// Filtering the properties based on the user's input

export const filterProperties = (
  properties: Property[], 
  filters: {
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
  }
): Property[] => {

  // use filter method to filter the properties based on the user's input

  return properties.filter(property => {
    if (filters.minPrice && property.price < filters.minPrice) return false;
    if (filters.maxPrice && property.price > filters.maxPrice) return false;
    if (filters.bedrooms && property.bedrooms !== filters.bedrooms) return false;
    return true;
  });
};

// Sorting the properties based on the user's input

export const sortProperties = (
  properties: Property[], 
  sortBy: 'price-asc' | 'price-desc' | 'recent' | 'size'
): Property[] => {
  return [...properties].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'recent':
        return new Date(b.added).getTime() - new Date(a.added).getTime();
      case 'size':
        return parseFloat(b.size) - parseFloat(a.size);
      default:
        return 0;
    }
  });
};