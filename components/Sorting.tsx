import React from "react";
import { SortOption } from "../services/propertyServices";

interface SortingProps {
  onSortChange: (sortBy: SortOption) => void;
}

const Sorting: React.FC<SortingProps> = ({ onSortChange }) => {
  return (
    <div className="flex mb-5 justify-end rounded">
      <select
        onChange={(e) => onSortChange(e.target.value as SortOption)}
        className="p-2 border rounded"
        defaultValue="recent"
      >
        <option value="recent">Most Recent</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="size">Size</option>
        <option value="alpha-asc">Name: A to Z</option>
        <option value="alpha-desc">Name: Z to A</option>
      </select>
    </div>
  );
};

export default Sorting;