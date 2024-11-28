"use client";
import React from 'react';
import { useRouter } from 'next/navigation';  

const lastikCategories = [
  { name: "Michelin", slug: "michelin" },
  { name: "Goodyear", slug: "#" },
  { name: "Hankook", slug: "#" },
  { name: "Pirelli", slug: "#" },
  { name: "Bridgestone", slug: "#" },
  { name: "Dunlop", slug: "#" },
  { name: "Continental", slug: "#" },
  { name: "Lassa", slug: "#" },
  { name: "Dayton", slug: "#" },
  { name: "Nokian", slug: "#" },
  { name: "Falken", slug: "#" },
  { name: "Petlas", slug: "#" },
];
const ebatCategories = [
  { name: "205/55 R16", slug: "205-55-r16" },
  { name: "195/65 R15", slug: "195-65-r15" },
  { name: "225/45 R17", slug: "225-45-r17" },
  { name: "215/55 R16", slug: "215-55-r16" },
  { name: "185/65 R15", slug: "185-65-r15" },
  { name: "225/40 R18", slug: "225-40-r18" },
  { name: "195/60 R15", slug: "195-60-r15" },
  { name: "225/50 R17", slug: "225-50-r17" },
  { name: "205/60 R16", slug: "205-60-r16" },
  { name: "195/55 R15", slug: "195-55-r15" },
  { name: "225/55 R17", slug: "225-55-r17" },
  { name: "215/60 R16", slug: "215-60-r16" },
  { name: "195/50 R15", slug: "195-50-r15" },
  { name: "225/45 R18", slug: "225-45-r18" },
  { name: "205/65 R15", slug: "205-65-r15" },
  { name: "215/50 R17", slug: "215-50-r17" },
];

function otomobilLastikPage() {
  const router = useRouter();

  const handleCategoryClick = (slug: string) => {
    router.push(`./${slug}`);  
  };

  return (
    <div>
      <div>
        <div className='flex justify-start items-center p-4 gap-2 '>
            <i className="fa-solid fa-chevron-left "></i>
            <h1 className="text-lg font-bold">Otomobil Lastikleri</h1>
        </div>
        <div className="border-b-2 border-gray-200"></div>
      </div>

      <div className="p-2">
        <h3 className='p-2 font-bold text-lg'>Popüler Markalar</h3>
        <ul>
          {lastikCategories.map((category) => (
            <li
              key={category.slug}
              className="flex justify-between items-center p-2 cursor-pointer "
              onClick={() => handleCategoryClick(category.slug)}
            >
              <span className="text-lg">{category.name}</span>
              <i className="fa-solid fa-chevron-right text-gray-600"></i> 
            </li>
          ))}
        </ul>
      </div>

      <div className="px-2">
        <h3 className='px-2 font-bold text-lg'>Popüler Ebatlar</h3>
        <ul>
          {ebatCategories.map((category) => (
            <li
              key={category.slug}
              className="flex justify-between items-center p-2 cursor-pointer "
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

export default otomobilLastikPage;
