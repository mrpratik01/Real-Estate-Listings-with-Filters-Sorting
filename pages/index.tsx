import { GetServerSideProps } from "next";
import PropertyCard from "../components/PropertyCard";
import { Property } from "../types/property";
import { getProperties } from "../services/propertyServices";
import Layout from "../pages/layout";

type HomePageProps = {
  properties: Property[];
};

const HomePage = ({ properties }: HomePageProps) => {
  return (
    <Layout>
      <div>
        <h1>Real Estate Listings</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-4 mx-auto max-w-full ">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const propertiesData = await getProperties();
    return {
      props: {
        properties: propertiesData,
      },
    };
  } catch (error) {
    console.error("Failed to fetch properties:", error);
    return {
      props: {
        properties: [],
      },
    };
  }
};

export default HomePage;
