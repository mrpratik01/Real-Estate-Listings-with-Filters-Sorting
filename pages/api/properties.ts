// pages/api/properties.ts
import property1 from "../../public/images/property1/property1.1.webp";
import property102 from "../../public/images/property1/property1.2.webp";
import property103 from "../../public/images/property1/property1.3.webp";
import property2 from "../../public/images/property2/property2.1.webp";
import property202 from "../../public/images/property2/property2.2.webp";
import property203 from "../../public/images/property2/property2.3.webp";
import property3 from "../../public/images/property3/property3.1.webp";
import property302 from "../../public/images/property3/property3.2.webp";
import property303 from "../../public/images/property3/property3.3.webp";
import property4 from "../../public/images/property4/property4.1.webp";
import property402 from "../../public/images/property4/property4.2.webp";
import property403 from "../../public/images/property4/property4.3.webp";
import property5 from "../../public/images/property5/property5.1.webp";
import property502 from "../../public/images/property5/property5.2.webp";
import property503 from "../../public/images/property5/property5.3.webp";


import { NextApiRequest, NextApiResponse } from "next";

// Sample data for properties
const properties = [
  {
    id: 1,
    image: [property1, property102, property103],
    address: "123 Main St, New York, NY",
    size: "1200 sqft",
    bedrooms: 2,
    price: 300000,
    added: "2023-10-01",
  },
  {
    id: 2,
    image: [property2, property202, property203],
    address: "456 Elm St, Los Angeles, CA",
    size: "1500 sqft",
    bedrooms: 3,
    price: 450000,
    added: "2023-09-25",
  },
  {
    id: 3,
    image: [property3, property302, property303],
    address: "789 Oak St, Chicago, IL",
    size: "1800 sqft",
    bedrooms: 4,
    price: 500000,
    added: "2023-09-20",
  },
  {
    id: 4,
    image: [property4, property402, property403],
    address: "101 Pine St, San Francisco, CA",
    size: "1100 sqft",
    bedrooms: 2,
    price: 600000,
    added: "2023-09-15",
  },
  {
    id: 5,
    image: [property5, property502, property503],
    address: "202 Maple St, Miami, FL",
    size: "2000 sqft",
    bedrooms: 5,
    price: 700000,
    added: "2023-09-10",
  },
  {
    id: 6,
    image: [property1, property102, property103],
    address: "303 Birch St, Dallas, TX",
    size: "1600 sqft",
    bedrooms: 3,
    price: 350000,
    added: "2023-09-05",
  },
  {
    id: 7,
    image: [property2, property202, property203],
    address: "404 Cedar St, Seattle, WA",
    size: "1400 sqft",
    bedrooms: 3,
    price: 550000,
    added: "2023-09-01",
  },
  {
    id: 8,
    image: [property3, property302, property303],
    address: "505 Walnut St, Denver, CO",
    size: "1700 sqft",
    bedrooms: 4,
    price: 480000,
    added: "2023-08-25",
  },
  {
    id: 9,
    image: [property4, property402, property403],
    address: "606 Cherry St, Boston, MA",
    size: "1300 sqft",
    bedrooms: 2,
    price: 430000,
    added: "2023-08-20",
  },
  {
    id: 10,
    image: [property5, property502, property503],
    address: "707 Palm St, Phoenix, AZ",
    size: "2100 sqft",
    bedrooms: 5,
    price: 520000,
    added: "2023-08-15",
  },
  
];


// I handle both the /api/properties and /api/properties/[id] routes in the same file.


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
  
    if (id) {
      const property = properties.find((p) => p.id.toString() === id.toString());
  
      if (!property) {
        return res.status(404).json({ message: 'Property not found' });
      }
  
      return res.status(200).json(property);
    }
  
    res.status(200).json(properties);
  
}