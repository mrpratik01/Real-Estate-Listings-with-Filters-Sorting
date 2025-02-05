import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Property } from "../../types/property";
import { getSinglePropertie } from "@/services/propertyServices";
import Layout from "../layout";
import Image from "next/image";
import {
  FaBed,
  FaBath,
  FaDollarSign,
  FaRegBuilding,
  FaParking,
  FaEye,
  FaBuilding,
  FaUser,
  FaPhoneAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const PropertyDetails = ({
  property,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (!property) {
    return (
      <Layout>
        <p className="text-center text-red-500 font-semibold">
          Property not found!
        </p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mx-auto mt-10 px-4">
        {/* Image Gallery */}
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 group overflow-hidden">
            <Image
              src={property.image[0]}
              alt={`${property.address} - 1`}
              width={800}
              height={500}
              className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col gap-2">
            {property.image.slice(1, 3).map((image, index) => (
              <div key={index} className="group overflow-hidden">
                <Image
                  src={image}
                  alt={`${property.address} - ${index + 2}`}
                  width={400}
                  height={200}
                  className="w-full h-32 object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 max-w-full">
          <div className="lg:col-span-4 w-full bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">
              {property.address}
            </h1>

            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Property Details
            </h2>

            <p>{property.description}</p>

            {/* Property Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-center text-lg text-gray-700 space-x-3">
                <FaBed className="w-6 h-6 text-blue-600" />
                <span>{property.bedrooms} Bedrooms</span>
              </div>
              <div className="flex items-center text-lg text-gray-700 space-x-3">
                <FaBath className="w-6 h-6 text-blue-600" />
                <span>{property.bathrooms} Bathrooms</span>
              </div>
              <div className="flex items-center text-lg text-gray-700 space-x-3">
                <FaDollarSign className="w-6 h-6 text-blue-600" />
                <span>AED {property.price}</span>
              </div>
              <div className="flex items-center text-lg text-gray-700 space-x-3">
                <FaRegBuilding className="w-6 h-6 text-blue-600" />
                <span>{property.propertyType}</span>
              </div>
              <div className="flex items-center text-lg text-gray-700 space-x-3">
                <FaParking className="w-6 h-6 text-blue-600" />
                <span>{property.parking}</span>
              </div>
              <div className="flex items-center text-lg text-gray-700 space-x-3">
                <FaEye className="w-6 h-6 text-blue-600" />
                <span>{property.view}</span>
              </div>
              <div className="flex items-center text-lg text-gray-700 space-x-3">
                <FaBuilding className="w-6 h-6 text-blue-600" />
                <span>{property.balcony}</span>
              </div>
              <div className="flex items-center text-lg text-gray-700 space-x-3">
                <FaCalendarAlt className="w-6 h-6 text-blue-600" />
                <span>Year Built: {property.yearBuilt}</span>
              </div>
            </div>

            {/* Agent Details */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg mt-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Agent Details
              </h2>
              <div className="flex items-center text-lg text-gray-700 space-x-3 mb-4">
                <FaUser className="w-6 h-6 text-blue-600" />
                <span>{property.agentName}</span>
              </div>
              <div className="flex items-center text-lg text-gray-700 space-x-3">
                <FaPhoneAlt className="w-6 h-6 text-blue-600" />
                <span>{property.agentContact}</span>
              </div>
            </div>

            {/* Added Date */}
            <div className="mt-6">
              <span className="text-gray-500 text-sm">
                Added on: {property.added}
              </span>
            </div>
          </div>

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
      </div>

      {/* Property Details */}
    </Layout>
  );
};

export default PropertyDetails;

export const getServerSideProps: GetServerSideProps<{
  property: Property | null;
}> = async (context) => {
  const { id } = context.params!;

  if (!id || isNaN(Number(id))) {
    return {
      props: {
        property: null,
      },
    };
  }

  try {
    const property = await getSinglePropertie(Number(id));

    return {
      props: {
        property: property || null,
      },
    };
  } catch (error) {
    console.error("Error fetching property:", error);
    return {
      props: {
        property: null,
      },
    };
  }
};
