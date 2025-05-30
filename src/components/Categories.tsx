import React from "react";
import { CATEGORIES } from "../constants/category";

interface CategorySelectProps {
  selectedCategory: string;
  onCategorySelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Categories: React.FC<CategorySelectProps> = ({
  selectedCategory,
  onCategorySelect,
  
}) => {
  return (
    <select
      defaultValue="Pick a language"
      className="select select-secondary rounded-xl"
      value={selectedCategory}
      onChange={onCategorySelect}
    >
      <option disabled={true} className=" hover:bg-pink-300">
        Category
      </option>
      {CATEGORIES.map((category) => (
        <option className=" hover:bg-pink-300">{category}</option>
      ))}
    </select>
  );
};

export default Categories;
