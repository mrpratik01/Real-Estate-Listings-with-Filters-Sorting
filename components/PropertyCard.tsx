// components/PropertyCard.tsx

import { FC } from 'react';
import { Property } from '../types/property';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.address} />
      <h2>{property.address}</h2>
      <p>{property.size}</p>
      <p>{property.bedrooms} Bedrooms</p>
      <p>${property.price}</p>
    </div>
  );
};

export default PropertyCard;
