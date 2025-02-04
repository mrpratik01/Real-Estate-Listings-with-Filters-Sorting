// pages/properties/[id].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Property } from '../../types/property';

const PropertyDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProperty = async () => {
      try {
        const res = await fetch(`/api/properties?id=${id}`);
        const data = await res.json();
        setProperty(data);
      } catch (error) {
        console.error('Error fetching property:', error);
      }
    };

    fetchProperty();
  }, [id]);

  console.log("HI",property);

  if (!property) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Property Details</h1>
      <img src={property.image} alt={property.address} />
      <h2>{property.address}</h2>
      <p>{property.size}</p>
      <p>{property.bedrooms} Bedrooms</p>
      <p>Price: ${property.price}</p>
      <p>Added on: {property.added}</p>
    </div>
  );
};

export default PropertyDetails;
