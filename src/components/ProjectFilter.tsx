"use client";

import { useState } from "react";
import Link from "next/link";

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProjectFilter({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      <button
        className={`px-6 py-2 rounded-full transition-colors ${
          activeCategory === "todos" 
            ? "bg-primary text-black" 
            : "bg-dark-gray text-white hover:bg-primary/20"
        }`}
        onClick={() => onCategoryChange("todos")}
      >
        Todos
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          className={`px-6 py-2 rounded-full transition-colors ${
            activeCategory === category 
              ? "bg-primary text-black" 
              : "bg-dark-gray text-white hover:bg-primary/20"
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
