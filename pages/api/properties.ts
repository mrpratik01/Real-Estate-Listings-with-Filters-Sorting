// pages/api/properties.ts

import { NextApiRequest, NextApiResponse } from "next";

// Sample data for properties
const properties = [
  {
    id: 1,
    image: "/images/property1.jpg",
    address: "123 Main St, New York, NY",
    size: "1200 sqft",
    bedrooms: 2,
    price: 300000,
    added: "2023-10-01",
  },
  {
    id: 2,
    image: "/images/property2.jpg",
    address: "456 Elm St, Los Angeles, CA",
    size: "1500 sqft",
    bedrooms: 3,
    price: 450000,
    added: "2023-09-25",
  },
  {
    id: 3,
    image: "/images/property3.jpg",
    address: "789 Oak St, Chicago, IL",
    size: "1800 sqft",
    bedrooms: 4,
    price: 500000,
    added: "2023-09-20",
  },
  {
    id: 4,
    image: "/images/property4.jpg",
    address: "101 Pine St, San Francisco, CA",
    size: "1100 sqft",
    bedrooms: 2,
    price: 600000,
    added: "2023-09-15",
  },
  {
    id: 5,
    image: "/images/property5.jpg",
    address: "202 Maple St, Miami, FL",
    size: "2000 sqft",
    bedrooms: 5,
    price: 700000,
    added: "2023-09-10",
  },
  {
    id: 6,
    image: "/images/property6.jpg",
    address: "303 Birch St, Dallas, TX",
    size: "1600 sqft",
    bedrooms: 3,
    price: 350000,
    added: "2023-09-05",
  },
  {
    id: 7,
    image: "/images/property7.jpg",
    address: "404 Cedar St, Seattle, WA",
    size: "1400 sqft",
    bedrooms: 3,
    price: 550000,
    added: "2023-09-01",
  },
  {
    id: 8,
    image: "/images/property8.jpg",
    address: "505 Walnut St, Denver, CO",
    size: "1700 sqft",
    bedrooms: 4,
    price: 480000,
    added: "2023-08-25",
  },
  {
    id: 9,
    image: "/images/property9.jpg",
    address: "606 Cherry St, Boston, MA",
    size: "1300 sqft",
    bedrooms: 2,
    price: 430000,
    added: "2023-08-20",
  },
  {
    id: 10,
    image: "/images/property10.jpg",
    address: "707 Palm St, Phoenix, AZ",
    size: "2100 sqft",
    bedrooms: 5,
    price: 520000,
    added: "2023-08-15",
  },
  {
    id: 11,
    image: "/images/property11.jpg",
    address: "808 Magnolia St, Houston, TX",
    size: "1800 sqft",
    bedrooms: 4,
    price: 390000,
    added: "2023-08-10",
  },
  {
    id: 12,
    image: "/images/property12.jpg",
    address: "909 Willow St, Philadelphia, PA",
    size: "1200 sqft",
    bedrooms: 2,
    price: 310000,
    added: "2023-08-05",
  },
  {
    id: 13,
    image: "/images/property13.jpg",
    address: "1010 Aspen St, Las Vegas, NV",
    size: "1600 sqft",
    bedrooms: 3,
    price: 470000,
    added: "2023-08-01",
  },
  {
    id: 14,
    image: "/images/property14.jpg",
    address: "1111 Redwood St, Atlanta, GA",
    size: "1400 sqft",
    bedrooms: 3,
    price: 340000,
    added: "2023-07-25",
  },
  {
    id: 15,
    image: "/images/property15.jpg",
    address: "1212 Dogwood St, Austin, TX",
    size: "1900 sqft",
    bedrooms: 4,
    price: 560000,
    added: "2023-07-20",
  },
  {
    id: 16,
    image: "/images/property16.jpg",
    address: "1313 Sycamore St, San Diego, CA",
    size: "1750 sqft",
    bedrooms: 4,
    price: 600000,
    added: "2023-07-15",
  },
  {
    id: 17,
    image: "/images/property17.jpg",
    address: "1414 Poplar St, Charlotte, NC",
    size: "1550 sqft",
    bedrooms: 3,
    price: 380000,
    added: "2023-07-10",
  },
  {
    id: 18,
    image: "/images/property18.jpg",
    address: "1515 Hickory St, Tampa, FL",
    size: "1250 sqft",
    bedrooms: 2,
    price: 290000,
    added: "2023-07-05",
  },
  {
    id: 19,
    image: "/images/property19.jpg",
    address: "1616 Cedar St, Portland, OR",
    size: "2000 sqft",
    bedrooms: 5,
    price: 680000,
    added: "2023-07-01",
  },
  {
    id: 20,
    image: "/images/property20.jpg",
    address: "1717 Mahogany St, Nashville, TN",
    size: "1800 sqft",
    bedrooms: 4,
    price: 450000,
    added: "2023-06-25",
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