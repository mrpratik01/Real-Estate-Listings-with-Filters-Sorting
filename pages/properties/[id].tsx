import React, { useState, useMemo } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Property } from "../../types/property";
import { getSinglePropertie } from "@/services/propertyServices";
import Layout from "../layout";
import Image from "next/image";
import {
  FaBed, FaBath, FaRegBuilding, FaParking, FaEye,
  FaBuilding, FaUser, FaPhoneAlt, FaCalendarAlt,
  FaChevronDown, FaChevronUp,
} from "react-icons/fa";

const PropertyDetails = ({
  property,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Move useMemo before any conditional returns
  const truncatedDescription = useMemo(() => {
    if (!property) return "";
    return showFullDescription ? property.description : property.description.slice(0, 300) + "...";
  }, [showFullDescription, property?.description]);

  if (!property) {
    return (
      <Layout>
        <p className="text-center text-red-500 font-semibold">
          Property not found!
        </p>
      </Layout>
    );
  }

  const toggleDescription = () => setShowFullDescription((prev) => !prev);

  const propertyFeatures = [
    { icon: FaBed, text: `${property.bedrooms} Bedrooms` },
    { icon: FaBath, text: `${property.bathrooms} Bathrooms` },
    { icon: FaRegBuilding, text: property.propertyType },
    { icon: FaParking, text: property.parking },
    { icon: FaEye, text: property.view },
    { icon: FaBuilding, text: property.balcony },
    { icon: FaCalendarAlt, text: `Built ${property.yearBuilt}` },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="col-span-1 md:col-span-2 group overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={property.image[0]}
              alt={`${property.address} - Main Image`}
              width={1000}
              height={600}
              className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="col-span-1 grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-4">
            {property.image.slice(1, 3).map((img, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={img}
                  alt={`${property.address} - Image ${index + 1}`}
                  width={500}
                  height={250}
                  className="w-full h-[150px] md:h-[240px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10">
          <div className="lg:col-span-4 bg-white p-8 rounded-3xl shadow-2xl space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
                  {property.address}
                </h1>
                <p className="text-gray-500 text-lg">
                  {property.propertyType} for Sale
                </p>
              </div>

              <div className="mt-4 md:mt-0 w-full md:w-auto">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl p-5 shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center justify-between">
                    <span className="text-sm uppercase tracking-wide opacity-75">Listing Price</span>
                    <span className="text-2xl font-black bg-white/20 rounded-full px-3 py-1">AED</span>
                  </div>
                  <div className="text-4xl font-extrabold mt-2 flex items-center">
                    {property.price.toLocaleString()}
                    {property.propertyType === "Apartment" && (
                      <span className="text-sm ml-2 opacity-75">/unit</span>
                    )}
                  </div>
                  <div className="mt-3 text-sm opacity-70 flex justify-between items-center">
                    <span>Market Value</span>
                    <span className="bg-green-500 text-white rounded-full px-2 py-1 text-xs">
                      Competitive
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Property Description</h2>
              <p className="text-gray-600 leading-relaxed">{truncatedDescription}</p>
              {property.description.length > 300 && (
                <button
                  onClick={toggleDescription}
                  className="mt-2 text-blue-600 hover:text-blue-800 flex items-center font-semibold"
                >
                  {showFullDescription ? "Show Less" : "Read More"}
                  {showFullDescription ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {propertyFeatures.map(({ icon: Icon, text }, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-xl flex items-center space-x-3 hover:bg-blue-100 transition-colors">
                  <Icon className="text-blue-600 w-6 h-6" />
                  <span className="text-gray-700 font-medium">{text}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-4 md:p-6 rounded-2xl mt-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-800">Contact Agent</h3>
                  <div className="flex items-center space-x-3">
                    <FaUser className="text-blue-600 w-5 h-5" />
                    <span className="text-gray-700 font-medium">{property.agentName}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaPhoneAlt className="text-blue-600 w-5 h-5" />
                    <span className="text-gray-700 break-all">{property.agentContact}</span>
                  </div>
                </div>
                <button className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
                  Contact Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyDetails;

export const getServerSideProps: GetServerSideProps<{ property: Property | null }> = async (context) => {
  const id = Number(context.params?.id);
  if (isNaN(id)) return { props: { property: null } };

  try {
    return { props: { property: await getSinglePropertie(id) ?? null } };
  } catch (error) {
    console.error("Error fetching property:", error);
    return { props: { property: null } };
  }
};