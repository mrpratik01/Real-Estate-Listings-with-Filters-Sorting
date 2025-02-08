//importing all the necessary modules

import { GetServerSideProps } from "next";
import { useState, useMemo, useCallback } from "react";
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

  //using useState to set the filters and sortby

  const [filters, setFilters] = useState<{ minPrice?: number; maxPrice?: number; bedrooms?: number }>({});
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "recent" | "size">("recent");

  // memoizing the filtered and sorted properties

  const filteredAndSortedProperties = useMemo(() => {
    let result = filterProperties(initialProperties, filters);
    return sortProperties(result, sortBy);
  }, [initialProperties, filters, sortBy]);


  //using useCallback to handle the apply filters and sort change


  const handleApplyFilters = useCallback((newFilters: typeof filters) => {
    setFilters(newFilters);
  }, []);

  const handleSortChange = useCallback((newSortBy: typeof sortBy) => {
    setSortBy(newSortBy);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 mb-10">
        <div className="grid md:grid-cols-1 gap-4">
          <Filters onApplyFilters={handleApplyFilters} />
        </div>

        <div className="grid lg:grid-cols-5 gap-4">
          <div className="lg:col-span-4">
            <Sorting onSortChange={handleSortChange} />
            <div className="grid sm:grid-cols-1 gap-4">
              {filteredAndSortedProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>

     
          <aside className="lg:col-span-1 hidden lg:block bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-3">Sponsored Ad</h2>
            <p className="text-gray-600 mt-2 text-sm">
              Get amazing deals on real estate! Contact us for more info.
            </p>
            <button className="mt-3 bg-blue-600 text-white py-2 px-4 rounded-md w-full">
              Learn More
            </button>
          </aside>
        </div>

        {filteredAndSortedProperties.length === 0 && (
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
    return { props: { initialProperties: propertiesData } };
  } catch (error) {
    console.error("Failed to fetch properties:", error);
    return { props: { initialProperties: [] } };
  }
};

export default HomePage;
