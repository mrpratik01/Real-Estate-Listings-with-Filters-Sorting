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


