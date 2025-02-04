import { Property } from "../types/property";

// Fetch all properties
export const getProperties = async (): Promise<Property[]> => {
  const response = await fetch(`http://localhost:3000/api/properties`);
  if (!response.ok) {
    throw new Error('Failed to fetch properties');
  }
  const data = await response.json();
  return data;
};

// Fetch a single property by ID
export const getSinglePropertie = async (id: number): Promise<Property | null> => {
  const response = await fetch(`http://localhost:3000/api/properties?id=${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch property');
  }
  const data = await response.json();

  return data ? data : null;
};
