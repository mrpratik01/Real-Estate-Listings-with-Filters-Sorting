import { FC } from "react";
import { Property } from "../types/property";
import Link from "next/link";
import ImageSlider from "./ImageSlider";
import { BiBed, BiBath, BiArea, BiBuilding, BiPhone } from "react-icons/bi";
import { HiClock } from "react-icons/hi";
import { FaUserTie } from "react-icons/fa";
import { formatDistance } from "date-fns";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: FC<PropertyCardProps> = ({ property }) => {
  const formattedDate = formatDistance(new Date(property.added), new Date(), {
    addSuffix: true,
  });

  const formattedPrice = new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
    <div className="flex flex-col sm:flex-row">
      <div className="relative w-full sm:w-[45%]">
        <div className="relative h-full">
          <ImageSlider
            images={property.image}
            linkHref={`/properties/${property.id}`}
          />

          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
            <span className="text-blue-600 font-bold text-lg">
              {formattedPrice}
            </span>
            <span className="text-gray-500 text-xs ml-1">/month</span>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 sm:p-6 -mt-14 md:-mt-0">
        <div className="flex flex-col h-full space-y-4">
          {/* Property Type Badge */}
          <div className="space-y-2">
            <div className="inline-flex items-center">
              <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-100">
                {property.propertyType}
              </span>
            </div>

            <Link href={`/properties/${property.id}`}>
              <h2 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                {property.address}
              </h2>
            </Link>
          </div>

          {/* Property Features */}
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-1.5">
              <BiBed className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700 font-medium">
                {property.bedrooms}
              </span>
            </div>
            <div className="w-px h-6 bg-gray-200" />
            <div className="flex items-center gap-1.5">
              <BiBath className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700 font-medium">
                {property.bathrooms}
              </span>
            </div>
            <div className="w-px h-6 bg-gray-200" />
            <div className="flex items-center gap-1.5">
              <BiArea className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700 font-medium">
                {property.size}
              </span>
            </div>
          </div>

          {/* Agent Info and CTA */}
          <div className="mt-auto space-y-3">
            <div className="flex items-center justify-between py-3 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <FaUserTie className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-400 rounded-full border-2 border-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">
                    {property.agentName}
                  </p>
                  <p className="text-blue-600 font-medium text-sm">
                    {property.agentContact}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full">
                <HiClock className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500">{formattedDate}</span>
              </div>
            </div>

            <Link
              href={`/properties/${property.id}`}
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl transition-all duration-300 font-medium hover:shadow-lg hover:shadow-blue-100"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PropertyCard;
