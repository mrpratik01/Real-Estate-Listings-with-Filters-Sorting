import { GetServerSideProps } from "next";
import { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import { Property } from "../types/property";
import {
  getProperties,
  filterProperties,
  sortProperties,
} from "../services/propertyServices";
import Layout from "../pages/layout";
import Filters from "../components/Filters";
import Sorting from "../components/Sorting";

type HomePageProps = {
  initialProperties: Property[];
};

const HomePage = ({ initialProperties }: HomePageProps) => {
  const [properties, setProperties] = useState<Property[]>(initialProperties);

  const handleApplyFilters = (filters: {
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
  }) => {
    const filteredProperties = filterProperties(initialProperties, filters);
    setProperties(filteredProperties);
  };

  const handleSortChange = (
    sortBy: "price-asc" | "price-desc" | "recent" | "size"
  ) => {
    const sortedProperties = sortProperties(properties, sortBy);
    setProperties(sortedProperties);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4">
       

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <Filters onApplyFilters={handleApplyFilters} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 max-w-full">
          {/* Properties Section (80% width on large screens) */}
          <div className="lg:col-span-4 w-full">
            <Sorting onSortChange={handleSortChange} />
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>

          {/* Advertisement Section (20% width on large screens) */}
          <div className="lg:col-span-1 hidden lg:block bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-3">Sponsored Ad</h2>

            <p className="text-gray-600 mt-2 text-sm">
              Get amazing deals on real estate! Contact us for more info.
            </p>
            <button className="mt-3 bg-blue-600 text-white py-2 px-4 rounded-md w-full">
              Learn More
            </button>
          </div>
        </div>

        {properties.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No properties found matching your criteria.
          </p>
        )}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const propertiesData = await getProperties();
    return {
      props: {
        initialProperties: propertiesData,
      },
    };
  } catch (error) {
    console.error("Failed to fetch properties:", error);
    return {
      props: {
        initialProperties: [],
      },
    };
  }
};

export default HomePage;
