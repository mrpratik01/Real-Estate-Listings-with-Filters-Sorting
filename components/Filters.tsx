import React, { useState, useCallback, useMemo } from "react";

interface FiltersProps {
  onApplyFilters: (filters: {
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
  }) => void;
}

const Filters: React.FC<FiltersProps> = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApplyFilters = useCallback(() => {
    const appliedFilters = {
      minPrice: filters.minPrice ? Number(filters.minPrice) : undefined,
      maxPrice: filters.maxPrice ? Number(filters.maxPrice) : undefined,
      bedrooms: filters.bedrooms ? Number(filters.bedrooms) : undefined,
    };
    onApplyFilters(appliedFilters);
  }, [filters, onApplyFilters]);

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 backdrop-blur-lg border border-gray-100 mb-10 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Min Price", name: "minPrice", type: "number", placeholder: "Enter minimum price" },
          { label: "Max Price", name: "maxPrice", type: "number", placeholder: "Enter maximum price" },
        ].map(({ label, name, type, placeholder }) => (
          <div key={name} className="relative">
            <label className="absolute -top-2.5 left-4 px-1 bg-white text-sm text-gray-600">{label}</label>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              value={filters[name as keyof typeof filters]}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-200 bg-gray-50/50"
            />
          </div>
        ))}

        <div className="relative">
          <label className="absolute -top-2.5 left-4 px-1 bg-white text-sm text-gray-600">Bedrooms</label>
          <select
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-200 bg-gray-50/50 appearance-none cursor-pointer"
          >
            <option value="">All Bedrooms</option>
            {[1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>{num} {num === 4 ? "+" : ""} Bedrooms</option>
            ))}
          </select>
        </div>

        <button
          onClick={handleApplyFilters}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl 
          transform hover:-translate-y-0.5 transition duration-200 font-semibold"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
