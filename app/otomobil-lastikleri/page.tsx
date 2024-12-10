'use client';

import React from 'react';
import { useRouter } from 'next/navigation';  
import { lastikCategories, ebatCategories } from '@/components/items/otomobil-lastikleri';
import Altpanel from '@/components/altpanel';

export default function OtomobilLastikPage() {
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
        <div className='flex justify-start items-center px-4 gap-2'>
         
          <i 
            className="fa-solid fa-chevron-left cursor-pointer" 
            onClick={handleBackClick}
          ></i>
          <h2 className="p-4 font-bold">Otomobil Lastikleri</h2>
        </div>
        <div className="border-b-2 border-gray-200"></div>
      </div>

      <div className="p-2">
        <h3 className='p-2 font-bold '>Popüler Markalar</h3>
        <ul>
          {lastikCategories.map((category) => (
            <li
              key={category.slug}
              className="flex justify-between items-center p-2 cursor-pointer"
              onClick={() => handleCategoryClick(category.slug)} 
            >
              <span>{category.name}</span>
              <i className="fa-solid fa-chevron-right text-gray-600"></i>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-2">
        <h3 className='px-2 font-bold'>Popüler Ebatlar</h3>
        <ul>
          {ebatCategories.map((category) => (
            <li
              key={category.slug}
              className="flex justify-between items-center p-2 cursor-pointer"
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
