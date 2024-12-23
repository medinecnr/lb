'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Altpanel from '@/components/altpanel';
import { Spinner } from "@nextui-org/react";

const categories = [
  { name: "Lastik", slug: "lastik" },
  { name: "Jant", slug: "jant" },
  { name: "Akü", slug: "aku" },
  { name: "Yağ", slug: "yag" },
  { name: "İnovasyon Ürünleri", slug: "inovasyon" },
  { name: "Montaj", slug: "montaj" },
  { name: "Markalar", slug: "markalar" },
  { name: "Kampanyalar", slug: "kampanyalar" }
];

export default function CategoryPage() {
  const router = useRouter();

  const handleCategoryClick = (slug: string) => {
    router.push(`/${slug}`);
  };

  return (
    <div>
      <h2 className="p-4 font-bold">Kategoriler</h2>
      <div className="border-b-2 border-gray-200"></div>

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