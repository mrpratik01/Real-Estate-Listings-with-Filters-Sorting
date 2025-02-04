// pages/index.tsx
import { useEffect, useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { Property } from '../types/property';
import { getProperties } from '../services/propertyServices';

const HomePage = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const propertiesData = await getProperties();
      setProperties(propertiesData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Real Estate Listings</h1>
      <div className="property-list">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
