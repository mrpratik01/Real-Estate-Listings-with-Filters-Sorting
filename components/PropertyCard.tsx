// components/PropertyCard.tsx

import { FC } from 'react';
import { Property } from '../types/property';
import Link from 'next/link';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link href={`/properties/${property.id}`} passHref>
    <div className="property-card">
      <img src={property.image} alt={property.address} />
      <h2>{property.address}</h2>
      <p>{property.size}</p>
      <p>{property.bedrooms} Bedrooms</p>
      <p>${property.price}</p>
    </div>
  </Link>
  );
};

export default PropertyCard;
