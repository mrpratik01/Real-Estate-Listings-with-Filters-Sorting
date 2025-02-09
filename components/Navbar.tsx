import { useState } from "react";
import { FaHome, FaBuilding, FaCity, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
 
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center space-x-3">
            <FaCity className="text-blue-600 w-8 h-8" />
            <h1 className="text-2xl font-bold text-blue-700">
              Real Estate Listing
            </h1>
          </div>
        </Link>

        <button
          className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/">
            <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              <FaHome className="w-5 h-5" />
              <span className="font-medium">Home</span>
            </div>
          </Link>

          <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
            <FaBuilding className="w-5 h-5" />
            <span className="font-medium">Demo Link</span>
          </div>
        </div>
      </div>

      <div
        className={`absolute top-[64px] left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 max-h-screen py-4"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          <Link href="/">
            <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              <FaHome className="w-5 h-5" />
              <span className="font-medium">Home</span>
            </div>
          </Link>
          <Link href="/properties">
            <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              <FaBuilding className="w-5 h-5" />
              <span className="font-medium">Properties</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;