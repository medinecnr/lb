"use client";
import React from 'react';
import { useRouter } from 'next/navigation';  

const categories = [
  { name: "Otomobil Lastikleri", slug: "otomobil-lastikleri" },
  { name: "SUV 4x4 Lastikleri", slug: "suv-lastikleri" },
  { name: "Hafif Ticari Araç Lastikleri", slug: "#" },
  { name: "Otobüs, Kamyon Lastikleri", slug: "#" },
  { name: "İş Makinası Lastikleri", slug: "#" },
  { name: "Yaz Lastiği", slug: "#" },
  { name: "Kış Lastiği", slug: "#" },
  { name: "4 Mevsim Lastik", slug: "#" },
  { name: "Diğer Lastikler", slug: "#" }
];

function lastikPage() {
  const router = useRouter();

  const handleCategoryClick = (slug: string) => {
    router.push(`./${slug}`);  
  };

  return (
    <div>
      <div>
        <div className='flex justify-start items-center p-4 gap-2 '>
            <i className="fa-solid fa-chevron-left "></i>
            <h1 className="text-lg font-bold">Lastik</h1>
        </div>
        <div className="border-b-2 border-gray-200"></div>
      </div>

      <div className="p-4">
        <ul>
          {categories.map((category) => (
            <li
              key={category.slug}
              className="flex justify-between items-center p-3 cursor-pointer "
              onClick={() => handleCategoryClick(category.slug)}
            >
              <span className="text-lg">{category.name}</span>
              <i className="fa-solid fa-chevron-right text-gray-600"></i> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default lastikPage;
