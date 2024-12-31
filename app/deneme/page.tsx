'use client';
import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import { categories, tireSizes, brands } from "@/components/items/footeritems";
import { Navbar } from '@/components/navbar';

const hoverText = 'hover:text-[#FFB45F] flex';
const btnPhone = 'bg-transparent border text-white hover:border-[#FFB45F] text-start';

const Footer = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="border py-20 md:py-72"></div>
      <div className="bg-[#053C50] text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          
          {/* Lastik Borsası Bilgileri */}
          <div className="flex-1 mb-6 md:mb-0 md:w-1/3">
            <h3 className="font-bold mb-4">Lastik Borsası</h3>
            <ul className="space-y-2">
              {[
                'Hakkımızda',
                'İletişim',
                'Yardım Merkezi',
                'Banka Hesap Bilgileri',
                'İptal ve İade Koşulları',
                'Gizlilik ve Güvenlik',
                'Üyelik Sözleşmesi',
                'Blog',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className={hoverText}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* İletişim Bölümü */}
            <div className="mt-8">
              <h3 className="font-bold">Bize Ulaşın</h3>
              <div className="flex flex-col items-start gap-3 mt-4">
                {[
                  { icon: 'phone', text: '444 06 52' },
                  { icon: 'phone', text: '0850 441 46 52' },
                  { icon: 'envelope', text: 'info@lastikborsasi.com' },
                ].map((contact) => (
                  <Button
                    key={contact.text}
                    radius="sm"
                    className={btnPhone}
                  >
                    <i className={`fa-solid fa-${contact.icon} mr-2`}></i>
                    {contact.text}
                  </Button>
                ))}
              </div>
            </div>

            {/* Sosyal Medya İkonları */}
            <div className="flex gap-2 mt-6">
              {['instagram', 'facebook', 'twitter', 'youtube', 'linkedin'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="bg-[#042F3F] rounded-md hover:bg-[#FFB45F] w-8 h-8 flex justify-center items-center"
                >
                  <i className={`fa-brands fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Popüler Lastik Ebatları */}
          <div className="w-full md:w-1/3 flex flex-col md:items-start">
            <h3
              className="font-bold mb-4 flex items-center cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis max-w-xs"
              onClick={() => setIsSizeOpen(!isSizeOpen)}
            >
              Popüler Lastik Ebatları
              <i className={`ml-2 fa-solid ${isSizeOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </h3>
            <ul className={`space-y-2 ${isSizeOpen ? '' : 'hidden'}`}>
              {tireSizes.map((size) => (
                <li key={size.size}>
                  <a href={size.url} className={hoverText}>
                    {size.size}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popüler Markalar */}
          <div className="w-full md:w-1/3 flex flex-col md:items-start">
            <h3
              className="font-bold mb-4 flex items-center cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis max-w-xs"
              onClick={() => setIsBrandOpen(!isBrandOpen)}
            >
              Popüler Markalar
              <i className={`ml-2 fa-solid ${isBrandOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </h3>
            <ul className={`space-y-2 ${isBrandOpen ? '' : 'hidden'}`}>
              {brands.map((brand) => (
                <li key={brand.brand}>
                  <a href={brand.url} className={hoverText}>
                    {brand.brand}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kategoriler */}
          <div className="w-full sm:w-1/3 flex flex-col sm:items-start">
            <h3
              className="font-bold mb-4 flex items-center cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis max-w-xs"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              Kategoriler
              <i className={`ml-2 fa-solid ${isCategoryOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </h3>
            <ul className={`space-y-2 ${isCategoryOpen ? '' : 'hidden'}`}>
              {categories.map((category) => (
                <li key={category.name}>
                  <a href={category.url} className={hoverText}>
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
