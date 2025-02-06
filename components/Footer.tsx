
import { FC } from "react";
import {  FaCity } from "react-icons/fa";

const Footer: FC <any> = ( ) => {
    return (
        <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FaCity className="mr-3 text-blue-300" />
              Real Estate Listing
            </h3>
            <p className="text-blue-100 text-sm">
              Your trusted partner in finding the perfect property.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-blue-200">
              <div>Demo Link 1</div>
              <div>Demo Link 2</div>
              <div>Demo Link 3</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-blue-200">
              <div>Email: contactpratik2002@gmail.com</div>
              <div>Phone: +971 52 813 9069</div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-4 border-t border-blue-700 text-center">
          <p className="text-sm text-blue-300">
            Code assesment submitted by Pratik Bhattarai
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;