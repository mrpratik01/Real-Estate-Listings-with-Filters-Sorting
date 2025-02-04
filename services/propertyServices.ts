// services/propertyService.ts

import { Property } from '../types/property';

// This is a mock function that simulates fetching data from an API
export const getProperties = async (): Promise<Property[]> => {
  // Replace with your actual API request, e.g. fetch('/api/properties')
  const response = await fetch('/api/properties');
  if (!response.ok) {
    throw new Error('Failed to fetch properties');
  }
  const data = await response.json();
  return data;
};

// This function fetches a single property by its ID
export const getPropertyById = async (id: string): Promise<Property> => {
  // Replace with your actual API request, e.g. fetch(`/api/properties/${id}`)
  const response = await fetch(`/api/properties/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch property');
  }
  const data = await response.json();
  return data;
};
