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
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-start overflow-hidden">

        <div className="flex-1 mb-6 md:mb-0 md:w-1/3 pe-2">
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
                <li key={item} className="truncate">
                  <a href="#" className={`${hoverText} whitespace-nowrap overflow-hidden text-ellipsis`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
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
                  <i className={`fa-solid fa-${contact.icon} mr-2 hover:text-[#FFB45F]`}></i>
                  {contact.text}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="flex gap-2 mt-4">
            {[
              { platform: 'instagram', url: 'https://www.instagram.com/lastikborsasi/' },
              { platform: 'facebook', url: 'https://www.facebook.com/lastikborsasi' },
              { platform: 'twitter', url: 'https://x.com/lastikborsasi?mx=2' },
              { platform: 'youtube', url: 'https://www.youtube.com/channel/UCWAOmsqUr9dOG841Z83Xskg' },
              { platform: 'linkedin', url: 'https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F19046059' },
            ].map((social) => (
              <button
                key={social.platform}
                className="bg-[#042F3F] rounded-md hover:bg-[#FFB45F] w-8 h-8 p-2 flex justify-center items-center"
              >
                <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#053C50]">
                  <i className={`fa-brands fa-${social.platform}`}></i>
                </a>
              </button>
            ))}
          </div>

        </div>

        <div className="w-full md:w-1/3 flex flex-col md:items-start">
          <h3 className="font-bold mb-4 flex items-center cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis max-w-full" onClick={() => setIsSizeOpen(!isSizeOpen)}>
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
          <h3 className="font-bold mb-4 flex items-center cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis max-w-full" onClick={() => setIsBrandOpen(!isBrandOpen)}>
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
          <h3 className="font-bold mb-4 flex items-center cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis max-w-full " onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
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

