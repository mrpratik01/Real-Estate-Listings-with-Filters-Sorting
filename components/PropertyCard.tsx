// components/PropertyCard.tsx

import { FC } from "react";
import { Property } from "../types/property";
import Link from "next/link";
import Image from "next/image";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="hover:shadow-xl shadow-md">
      <Link href={`/properties/${property.id}`} passHref>
        <div className="relative h-56  m-2.5 overflow-hidden text-white rounded-md">
          <Image
            src={property.image[0]}
            alt={property.address}
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </Link>
      <div className="p-4">
        <h2 className="text-red-500 text-xl font-semibold mb-2">
          {property.address}
        </h2>
        <p className="text-gray-700 mb-1">{property.size}</p>
        <p className="text-gray-700 mb-1">{property.bedrooms} Bedrooms</p>
        <p className="text-gray-900 font-bold">${property.price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
