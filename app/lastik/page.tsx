'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Altpanel from "@/components/altpanel";


 const categories = [
  { name: "Otomobil Lastikleri", slug: "otomobil-lastikleri" },
  { name: "SUV 4x4 Lastikleri", slug: "suv" },
  { name: "Hafif Ticari Araç Lastikleri", slug: "hafif-ticari-arac-lastikleri" },
  { name: "Otobüs, Kamyon Lastikleri", slug: "otobus-kamyon-lastikleri" },
  { name: "İş Makinası Lastikleri", slug: "is-makinası-lastikleri" },
  { name: "Yaz Lastiği", slug: "yaz-lastigi" },
  { name: "Kış Lastiği", slug: "kıs-lastigi" },
  { name: "4 Mevsim Lastik", slug: "dort-mevsim-lastik" },
  { name: "Diğer Lastikler", slug: "diger-lastikler" }
];

export default function LastikPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(false); 
  }, []);

  const handleCategoryClick = (slug: string) => {
    router.push(`/${slug}`);
  };

  const handleBackClick = () => {
    router.back();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="spinner-border animate-spin border-4 border-t-4 border-blue-600 w-16 h-16 rounded-full"></div>
      </div>
    );
  }

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
