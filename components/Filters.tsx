import React, { useState } from 'react';

interface FiltersProps {
  onApplyFilters: (filters: {
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
  }) => void;
}

const Filters: React.FC<FiltersProps> = ({ onApplyFilters }) => {
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [bedrooms, setBedrooms] = useState<string>('');

  const handleApplyFilters = () => {
    const filters: {
      minPrice?: number;
      maxPrice?: number;
      bedrooms?: number;
    } = {};

    if (minPrice) filters.minPrice = Number(minPrice);
    if (maxPrice) filters.maxPrice = Number(maxPrice);
    if (bedrooms) filters.bedrooms = Number(bedrooms);

    onApplyFilters(filters);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 backdrop-blur-lg border border-gray-100 mb-10 mt-24 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="relative">
          <label className="absolute -top-2.5 left-4 px-1 bg-white text-sm text-gray-600">
            Min Price
          </label>
          <input
            type="number"
            placeholder="Enter minimum price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-200 bg-gray-50/50"
          />
        </div>

        <div className="relative">
          <label className="absolute -top-2.5 left-4 px-1 bg-white text-sm text-gray-600">
            Max Price
          </label>
          <input
            type="number"
            placeholder="Enter maximum price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-200 bg-gray-50/50"
          />
        </div>

        <div className="relative">
          <label className="absolute -top-2.5 left-4 px-1 bg-white text-sm text-gray-600">
            Bedrooms
          </label>
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-200 bg-gray-50/50 appearance-none cursor-pointer"
          >
            <option value="">All Bedrooms</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <button
          onClick={handleApplyFilters}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl 
          shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 
          transform hover:-translate-y-0.5 transition duration-200 
          font-semibold hover:from-blue-700 hover:to-blue-800"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;