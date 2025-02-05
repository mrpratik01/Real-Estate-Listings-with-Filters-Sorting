import React from 'react';

interface SortingProps {
  onSortChange: (sortBy: 'price-asc' | 'price-desc' | 'recent' | 'size') => void;
}

const Sorting: React.FC<SortingProps> = ({ onSortChange }) => {
  return (
    <div className="mb-4 p-4 bg-gray-100 rounded">
      <select
        onChange={(e) => onSortChange(e.target.value as 'price-asc' | 'price-desc' | 'recent' | 'size')}
        className="p-2 border rounded w-full"
      >
        <option value="recent">Most Recent</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="size">Size</option>
      </select>
    </div>
  );
};

export default Sorting;