import { FC } from "react";
import { FaCity } from "react-icons/fa";
import Link from "next/link";

const Footer: FC = () => {
  const quickLinks = ["Demo Link 1", "Demo Link 2", "Demo Link 3"];
  const contactInfo = [
    { label: "Email", value: "contactpratik2002@gmail.com" },
    { label: "Phone", value: "+971 52 813 9069" },
  ];

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link href="/">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <FaCity className="mr-3 text-blue-300" />
            Real Estate Listing
          </h3>
          </Link>
         
          <p className="text-blue-100 text-sm">
            Your trusted partner in finding the perfect property.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2 text-blue-200">
            {quickLinks.map((link, index) => (
              <div key={index}>{link}</div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <div className="space-y-2 text-blue-200">
            {contactInfo.map(({ label, value }) => (
              <div key={label}>
                {label}: {value}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 pt-4 border-t border-blue-700 text-center">
        <p className="text-sm text-blue-300">
          Code assessment submitted by Pratik Bhattarai
        </p>
      </div>
    </footer>
  );
};

export default Footer;
