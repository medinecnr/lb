"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { categories } from "@/components/items/lastik";
import Altpanel from "@/components/altpanel";

export default function LastikPage() {
  const router = useRouter();

  const handleCategoryClick = (slug: string) => {
    router.push(`/${slug}`);
  };

  const handleBackClick = () => {
    router.back();  
  };

  return (
    <div>
      <div>
        <div className="flex justify-start items-center px-4 gap-2">
          <i 
            className="fa-solid fa-chevron-left cursor-pointer" 
            onClick={handleBackClick}
          ></i>
          <h2 className="p-4 font-bold">Lastik</h2>
        </div>
        <div className="border-b-2 border-gray-200"></div>
      </div>

      <div className="p-4">
        <ul>
          {categories.map((category) => (
            <li
              key={category.slug}
              className="flex justify-between items-center p-3 cursor-pointer"
              onClick={() => handleCategoryClick(category.slug)}  
            >
              <span>{category.name}</span>
              <i className="fa-solid fa-chevron-right text-gray-600"></i>
            </li>
          ))}
        </ul>
      </div>
      <Altpanel />
    </div>
  );
}
