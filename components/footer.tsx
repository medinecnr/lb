'use client';
import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import { categories, tireSizes, brands } from "@/components/items/footeritems";

const hoverText = 'hover:text-[#FFB45F] flex ';
const btnPhone = 'bg-transparent border text-white hover:border-[#FFB45F] text-start';

const Footer = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);

  return (
    <div className="bg-[#053C50] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="flex-1 mb-6 md:mb-0 md:w-1/3 pe-4">
          <h3 className="font-bold mb-4">Lastik Borsası</h3>
          <ul className="space-y-1">
            <li><a href="#" className={hoverText}>Hakkımızda</a></li>
            <li><a href="#" className={hoverText}>İletişim</a></li>
            <li><a href="#" className={hoverText}>Yardım Merkezi</a></li>
            <li><a href="#" className={hoverText}>Banka Hesap Bilgileri</a></li>
            <li><a href="#" className={hoverText}>İptal ve İade Koşulları</a></li>
            <li><a href="#" className={hoverText}>Gizlilik ve Güvenlik</a></li>
            <li><a href="#" className={hoverText}>Üyelik Sözleşmesi</a></li>
            <li><a href="#" className={hoverText}>Blog</a></li>
          </ul>
          <div className="mt-10">
            <h3 className="font-bold">Bize Ulaşın</h3>
            <div className="flex flex-col items-start gap-2 mt-4">
              <Button radius="sm" className={btnPhone}><i className="fa-solid fa-phone mr-0"></i> 444 06 52</Button>
              <Button radius="sm" className={btnPhone}><i className="fa-solid fa-phone mr-0"></i> 0850 441 46 52</Button>
              <Button radius="sm" className={btnPhone}><i className="fa-solid fa-envelope mr-0"></i> info@lastikborsasi.com</Button>
            </div>
          </div>
          
          <div className="flex gap-2 mt-4">
            {['instagram', 'facebook', 'twitter', 'youtube', 'linkedin'].map((platform) => (
              <button key={platform} className="bg-[#042F3F] rounded-md hover:bg-[#FFB45F] w-8 h-8 p-2 flex justify-center items-center">
                <a href="#" className="text-white hover:text-[#053C50]">
                  <i className={`fa-brands fa-${platform}`}></i>
                </a>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-col md:items-start">
          <h3 className="font-bold mb-4 flex items-center cursor-pointer" onClick={() => setIsSizeOpen(!isSizeOpen)}>
            Popüler Lastik Ebatları
            <i className={`ml-2 fa-solid ${isSizeOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </h3>
          <ul className={`space-y-1 ${isSizeOpen ? '' : 'hidden'} md:block`}>
            {tireSizes.map((size) => (
              <li key={size.size}><a href={size.url} className={hoverText}>{size.size}</a></li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-1/3 flex flex-col  md:items-start">
          <h3 className="font-bold mb-4 flex items-center cursor-pointer" onClick={() => setIsBrandOpen(!isBrandOpen)}>
            Popüler Markalar
            <i className={`ml-2 fa-solid ${isBrandOpen ? 'fa-chevron-up' : 'fa-chevron-down'} block md:hidden lg:hidden`}></i>
            </h3>
          <ul className={`space-y-1 ${isBrandOpen ? '' : 'hidden'} md:block`}>
            {brands.map((brand) => (
              <li key={brand.brand}><a href={brand.url} className={hoverText}>{brand.brand}</a></li>
            ))}
          </ul>
        </div>

        <div className="w-full sm:w-1/3 flex flex-col  sm:items-start">
          <h3 className="font-bold mb-4 flex items-center cursor-pointer" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
            Kategoriler
            <i className={`ml-2 fa-solid ${isCategoryOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </h3>
          <ul className={`space-y-1 ${isCategoryOpen ? '' : 'hidden'} md:block`}>
            {categories.map((category) => (
              <li key={category.name}><a href={category.url} className={hoverText}>{category.name}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

