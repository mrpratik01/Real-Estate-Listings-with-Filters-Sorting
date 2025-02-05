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
    address: "Building 123, Sheikh Zayed Road, Dubai, UAE",
    size: "1200 sqft",
    bedrooms: 2,
    bathrooms: 2,
    price: 3000,
    propertyType: "Apartment",
    furnishing: "Furnished",
    parking: "Available",
    view: "Burj Khalifa View",
    balcony: "Yes",
    amenities: ["Gym", "Swimming Pool", "Playground"],
    yearBuilt: 2020,
    agentName: "John Doe",
    agentContact: "+971 50 123 4567",
    added: "2024-10-01",
    description: "Located in the heart of Dubai, this modern 2-bedroom apartment offers a sleek and comfortable living space with a stunning view of the Burj Khalifa. It is ideally situated on Sheikh Zayed Road, one of the city’s most prominent roads, providing easy access to major business hubs, shopping malls, and entertainment destinations. This apartment is perfect for young professionals or small families seeking convenience and luxury. The apartment features a spacious layout with an open-plan living area, stylish kitchen with high-end appliances, and two comfortable bedrooms. The furnishings are contemporary and well-maintained, ensuring a cozy living environment. The apartment also has a large balcony where you can enjoy the breathtaking views of the iconic Burj Khalifa. Residents can enjoy a range of world-class amenities, including a fully equipped gym, a refreshing swimming pool, and a secure playground for children. The building has excellent security and parking facilities, with dedicated spaces available for residents. Situated in a prime location, this property is close to renowned shopping destinations, restaurants, and public transport. Whether you're looking for a place to unwind after a long day or a vibrant neighborhood to explore, this apartment ticks all the boxes. Schedule a viewing today!"

  },
  {
    id: 2,
    image: [property2, property202, property203],
    address: "Building 456, Jumeirah Beach Road, Dubai, UAE",
    size: "1500 sqft",
    bedrooms: 3,
    bathrooms: 3,
    price: 4500,
    propertyType: "Villa",
    furnishing: "Semi-Furnished",
    parking: "Not Available",
    view: "Sea View",
    balcony: "No",
    amenities: ["Beach Access", "Gym", "Spa"],
    yearBuilt: 2018,
    agentName: "Jane Smith",
    agentContact: "+971 55 234 5678",
    added: "2024-09-25",
    description: "This stunning 3-bedroom villa is located along the beautiful Jumeirah Beach Road, offering breathtaking views of the sea and a tranquil living environment. The villa is designed to provide a luxurious coastal lifestyle with a semi-furnished interior, perfect for those who appreciate elegance and comfort. With a spacious living room, modern kitchen, and three well-sized bedrooms, the villa provides ample space for family living. The property is equipped with high-quality fixtures and fittings, ensuring a contemporary feel. The semi-furnished option offers flexibility for customization with your personal style. Enjoy exclusive beach access, a state-of-the-art gym, and a rejuvenating spa for the ultimate in relaxation. The villa is located in a sought-after area, with the beach just a short walk away, offering stunning sea views. It is also conveniently located near shopping malls, schools, and transportation links. For those seeking the perfect balance of luxury and convenience, this villa is the ideal choice. Schedule a viewing and experience the breathtaking lifestyle this villa has to offer."
  },
  {
    id: 3,
    image: [property3, property302, property303],
    address: "Building 789, Downtown Dubai, Dubai, UAE",
    size: "1800 sqft",
    bedrooms: 4,
    bathrooms: 4,
    price: 5000,
    propertyType: "Apartment",
    furnishing: "Unfurnished",
    parking: "Available",
    view: "Downtown View",
    balcony: "Yes",
    amenities: ["Pool", "Gym", "Concierge"],
    yearBuilt: 2022,
    agentName: "Ali Khan",
    agentContact: "+971 50 345 6789",
    added: "2024-09-20",
    description: "Welcome to this spacious and luxurious 4-bedroom apartment in the heart of Downtown Dubai. With over 1800 sqft of living space, this modern apartment offers unparalleled views of the downtown skyline and is perfect for those seeking a vibrant urban lifestyle. The apartment features a contemporary design with an open-concept living area that flows into a fully equipped kitchen, ideal for entertaining. The four large bedrooms come with built-in wardrobes, and the bathrooms are designed with a modern touch, featuring high-end fittings and finishes. Enjoy the spectacular views from the apartment's balcony, which offers a perfect vantage point of the bustling city below. The building is equipped with a range of top-notch amenities, including a swimming pool, a fully equipped gym, and concierge services for your convenience. Being located in Downtown Dubai, this property is in close proximity to the Dubai Mall, the Burj Khalifa, and a wealth of fine dining and shopping options. Experience the best of city living with a touch of luxury. This apartment is ideal for those who wish to experience Dubai's exciting urban lifestyle in the most prestigious neighborhood. Schedule a viewing today and see for yourself!"
  },
  {
    id: 4,
    image: [property4, property402, property403],
    address: "Building 101, Business Bay, Dubai, UAE",
    size: "1100 sqft",
    bedrooms: 2,
    bathrooms: 2,
    price: 6000,
    propertyType: "Townhouse",
    furnishing: "Furnished",
    parking: "Available",
    view: "Pool View",
    balcony: "No",
    amenities: ["Gym", "Swimming Pool", "Security"],
    yearBuilt: 2021,
    agentName: "Sara Ali",
    agentContact: "+971 52 456 7890",
    added: "2024-09-15",
    description: "This exquisite 2-bedroom townhouse is located in the prestigious Business Bay area, offering a perfect blend of modern living and convenience. The property boasts an elegant and functional design with a spacious layout that provides both comfort and style. The townhouse features an open-plan living area with contemporary furniture and finishes, creating a warm and welcoming atmosphere. Both bedrooms are well-sized, with ample storage space, while the bathrooms offer a luxurious experience with premium fittings and fixtures. Residents of this townhouse can enjoy a range of amenities, including a gym, swimming pool, and 24/7 security, ensuring peace of mind. The townhouse is situated in a vibrant community with easy access to Dubai’s business districts, shopping centers, and dining venues. Business Bay is one of Dubai’s most dynamic areas, offering an array of entertainment and commercial activities, making it an ideal location for professionals and families alike. If you seek a stylish home with top-notch amenities and a central location, this townhouse is the perfect choice."
  },
  {
    id: 5,
    image: [property5, property502, property503],
    address: "Building 202, Palm Jumeirah, Dubai, UAE",
    size: "2000 sqft",
    bedrooms: 5,
    bathrooms: 5,
    price: 7000,
    propertyType: "Villa",
    furnishing: "Unfurnished",
    parking: "Available",
    view: "Sea View",
    balcony: "Yes",
    amenities: ["Private Pool", "Gym", "Beach Access"],
    yearBuilt: 2019,
    agentName: "Mohammad Tariq",
    agentContact: "+971 56 567 8901",
    added: "2024-09-10",
    description: "This luxurious 5-bedroom villa is situated on the iconic Palm Jumeirah, offering unrivaled views of the sea and direct access to the beach. Spanning 2000 sqft, this villa provides ample living space with a sleek design and modern features that are perfect for those who value privacy and exclusivity. The villa includes spacious living areas, a gourmet kitchen with top-tier appliances, and five generously sized bedrooms, each with its own en-suite bathroom. The open-plan design allows natural light to fill the home, creating an inviting atmosphere. The villa is unfurnished, allowing you to personalize the space to your taste. It also features a private pool, a fully equipped gym, and beach access, providing a resort-like living experience. Palm Jumeirah is one of the most prestigious and sought-after locations in Dubai, known for its stunning villas and unparalleled views. With luxurious amenities and a prime location, this villa is perfect for those seeking a lavish lifestyle on the Palm Jumeirah. It is also close to high-end shopping malls, restaurants, and other entertainment options. If you're looking for an exclusive, high-end living experience in one of Dubai's most iconic locations, this villa is the perfect place to call home."
  },
  {
    id: 6,
    image: [property1, property102, property103],
    address: "Building 303, Dubai Marina, Dubai, UAE",
    size: "1600 sqft",
    bedrooms: 3,
    bathrooms: 3,
    price: 3500,
    propertyType: "Apartment",
    furnishing: "Semi-Furnished",
    parking: "Not Available",
    view: "Marina View",
    balcony: "Yes",
    amenities: ["Gym", "Security", "Restaurants"],
    yearBuilt: 2020,
    agentName: "Farah Khan",
    agentContact: "+971 58 234 5678",
    added: "2024-09-05",
    description: "Located in the heart of Dubai, this modern 2-bedroom apartment offers a sleek and comfortable living space with a stunning view of the Burj Khalifa. It is ideally situated on Sheikh Zayed Road, one of the city’s most prominent roads, providing easy access to major business hubs, shopping malls, and entertainment destinations. This apartment is perfect for young professionals or small families seeking convenience and luxury. The apartment features a spacious layout with an open-plan living area, stylish kitchen with high-end appliances, and two comfortable bedrooms. The furnishings are contemporary and well-maintained, ensuring a cozy living environment. The apartment also has a large balcony where you can enjoy the breathtaking views of the iconic Burj Khalifa. Residents can enjoy a range of world-class amenities, including a fully equipped gym, a refreshing swimming pool, and a secure playground for children. The building has excellent security and parking facilities, with dedicated spaces available for residents. Situated in a prime location, this property is close to renowned shopping destinations, restaurants, and public transport. Whether you're looking for a place to unwind after a long day or a vibrant neighborhood to explore, this apartment ticks all the boxes. Schedule a viewing today!"
  },
  {
    id: 7,
    image: [property2, property202, property203],
    address: "Building 404, Jumeirah Lake Towers, Dubai, UAE",
    size: "1400 sqft",
    bedrooms: 3,
    bathrooms: 2,
    price: 5500,
    propertyType: "Apartment",
    furnishing: "Furnished",
    parking: "Available",
    view: "Lake View",
    balcony: "No",
    amenities: ["Gym", "Swimming Pool", "Retail Shops"],
    yearBuilt: 2021,
    agentName: "Noura Al Farsi",
    agentContact: "+971 50 678 9012",
    added: "2024-09-01",
    description: "This stunning 3-bedroom villa is located along the beautiful Jumeirah Beach Road, offering breathtaking views of the sea and a tranquil living environment. The villa is designed to provide a luxurious coastal lifestyle with a semi-furnished interior, perfect for those who appreciate elegance and comfort. With a spacious living room, modern kitchen, and three well-sized bedrooms, the villa provides ample space for family living. The property is equipped with high-quality fixtures and fittings, ensuring a contemporary feel. The semi-furnished option offers flexibility for customization with your personal style. Enjoy exclusive beach access, a state-of-the-art gym, and a rejuvenating spa for the ultimate in relaxation. The villa is located in a sought-after area, with the beach just a short walk away, offering stunning sea views. It is also conveniently located near shopping malls, schools, and transportation links. For those seeking the perfect balance of luxury and convenience, this villa is the ideal choice. Schedule a viewing and experience the breathtaking lifestyle this villa has to offer."
  },
  {
    id: 8,
    image: [property3, property302, property303],
    address: "Building 505, Dubai Creek, Dubai, UAE",
    size: "1700 sqft",
    bedrooms: 4,
    bathrooms: 4,
    price: 4800,
    propertyType: "Apartment",
    furnishing: "Unfurnished",
    parking: "Available",
    view: "Creek View",
    balcony: "Yes",
    amenities: ["Gym", "Parking", "Security"],
    yearBuilt: 2018,
    agentName: "Omar Yousuf",
    agentContact: "+971 52 123 4567",
    added: "2024-08-25",
    description: "Welcome to this spacious and luxurious 4-bedroom apartment in the heart of Downtown Dubai. With over 1800 sqft of living space, this modern apartment offers unparalleled views of the downtown skyline and is perfect for those seeking a vibrant urban lifestyle. The apartment features a contemporary design with an open-concept living area that flows into a fully equipped kitchen, ideal for entertaining. The four large bedrooms come with built-in wardrobes, and the bathrooms are designed with a modern touch, featuring high-end fittings and finishes. Enjoy the spectacular views from the apartment's balcony, which offers a perfect vantage point of the bustling city below. The building is equipped with a range of top-notch amenities, including a swimming pool, a fully equipped gym, and concierge services for your convenience. Being located in Downtown Dubai, this property is in close proximity to the Dubai Mall, the Burj Khalifa, and a wealth of fine dining and shopping options. Experience the best of city living with a touch of luxury. This apartment is ideal for those who wish to experience Dubai's exciting urban lifestyle in the most prestigious neighborhood. Schedule a viewing today and see for yourself!"
  },
  {
    id: 9,
    image: [property4, property402, property403],
    address: "Building 606, Al Barsha, Dubai, UAE",
    size: "1300 sqft",
    bedrooms: 2,
    bathrooms: 2,
    price: 4300,
    propertyType: "Townhouse",
    furnishing: "Semi-Furnished",
    parking: "Available",
    view: "Street View",
    balcony: "No",
    amenities: ["Gym", "Security"],
    yearBuilt: 2020,
    agentName: "Zainab Khalid",
    agentContact: "+971 50 234 5678",
    added: "2024-08-20",
    description: "This exquisite 2-bedroom townhouse is located in the prestigious Business Bay area, offering a perfect blend of modern living and convenience. The property boasts an elegant and functional design with a spacious layout that provides both comfort and style. The townhouse features an open-plan living area with contemporary furniture and finishes, creating a warm and welcoming atmosphere. Both bedrooms are well-sized, with ample storage space, while the bathrooms offer a luxurious experience with premium fittings and fixtures. Residents of this townhouse can enjoy a range of amenities, including a gym, swimming pool, and 24/7 security, ensuring peace of mind. The townhouse is situated in a vibrant community with easy access to Dubai’s business districts, shopping centers, and dining venues. Business Bay is one of Dubai’s most dynamic areas, offering an array of entertainment and commercial activities, making it an ideal location for professionals and families alike. If you seek a stylish home with top-notch amenities and a central location, this townhouse is the perfect choice."
  },
  {
    id: 10,
    image: [property5, property502, property503],
    address: "Building 707, Dubai Silicon Oasis, Dubai, UAE",
    size: "2100 sqft",
    bedrooms: 5,
    bathrooms: 5,
    price: 5200,
    propertyType: "Villa",
    furnishing: "Unfurnished",
    parking: "Available",
    view: "City View",
    balcony: "Yes",
    amenities: ["Gym", "Private Garden", "Security"],
    yearBuilt: 2017,
    agentName: "Hassan Ali",
    agentContact: "+971 58 345 6789",
    added: "2024-08-15",
    description: "This luxurious 5-bedroom villa is situated on the iconic Palm Jumeirah, offering unrivaled views of the sea and direct access to the beach. Spanning 2000 sqft, this villa provides ample living space with a sleek design and modern features that are perfect for those who value privacy and exclusivity. The villa includes spacious living areas, a gourmet kitchen with top-tier appliances, and five generously sized bedrooms, each with its own en-suite bathroom. The open-plan design allows natural light to fill the home, creating an inviting atmosphere. The villa is unfurnished, allowing you to personalize the space to your taste. It also features a private pool, a fully equipped gym, and beach access, providing a resort-like living experience. Palm Jumeirah is one of the most prestigious and sought-after locations in Dubai, known for its stunning villas and unparalleled views. With luxurious amenities and a prime location, this villa is perfect for those seeking a lavish lifestyle on the Palm Jumeirah. It is also close to high-end shopping malls, restaurants, and other entertainment options. If you're looking for an exclusive, high-end living experience in one of Dubai's most iconic locations, this villa is the perfect place to call home."
  },
];






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