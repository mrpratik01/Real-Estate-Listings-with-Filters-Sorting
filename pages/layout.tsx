// app/layout.tsx

import { ReactNode } from "react";
import Head from "next/head";
import { FaHome, FaBuilding, FaCity } from 'react-icons/fa';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <FaCity className="text-blue-600 w-8 h-8" />
          <h1 className="text-2xl font-bold text-blue-700">
            Real Estate Listing
          </h1>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
            <FaHome className="w-5 h-5" />
            <span className="font-medium">Home</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
            <FaBuilding className="w-5 h-5" />
            <span className="font-medium">Properties</span>
          </div>
        </div>
      </div>
    </nav>
      <main>{children}</main>
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
            <div>Home</div>
            <div>Properties</div>
            <div>About Us</div>
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
          Coding assesment by Pratik Bhattarai
        </p>
      </div>
    </footer>
    </>
  );
}
