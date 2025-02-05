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
    <div className="mb-4 p-4 bg-gray-100 rounded">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="p-2 border rounded"
        />
        <select
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Bedrooms</option>
          <option value="1">1 Bedroom</option>
          <option value="2">2 Bedrooms</option>
          <option value="3">3 Bedrooms</option>
          <option value="4">4+ Bedrooms</option>
        </select>
      </div>
      <button
        onClick={handleApplyFilters}
        className="mt-4 w-full p-2 bg-blue-500 text-white rounded"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;