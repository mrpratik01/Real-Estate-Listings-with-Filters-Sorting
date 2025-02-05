import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Property } from "../../types/property";
import { getSinglePropertie } from "@/services/propertyServices";
import Layout from "../layout";
import Image from "next/image";

const PropertyDetails = ({
  property,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (!property) {
    return <p>Property not found!</p>;
  }

  return (
    <Layout>
      <div>
        <h1>Property Details</h1>
        {property.image.map((image, index) => (
            <Image key={index} src={image} alt={`${property.address} - ${index + 1}`}  />
          ))}
        <h2>{property.address}</h2>
        <p>{property.size}</p>
        <p>{property.bedrooms} Bedrooms</p>
        <p>Price: ${property.price}</p>
        <p>Added on: {property.added}</p>
      </div>
    </Layout>
  );
};

export default PropertyDetails;

export const getServerSideProps: GetServerSideProps<{
  property: Property | null;
}> = async (context) => {
  const { id } = context.params!;

  try {
    const property = await getSinglePropertie(Number(id));

    if (!property) {
      return {
        props: {
          property: null,
        },
      };
    }

    return {
      props: {
        property,
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
