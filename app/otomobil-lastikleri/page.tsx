'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { lastikCategories, ebatCategories } from '@/components/items/otomobil-lastikleri';
import Altpanel from '@/components/altpanel';
import { metaData } from "@/config/metaConfig";
import { useEffect } from 'react';
import Head from 'next/head';

export default function OtomobilLastikPage() {
  const router = useRouter();

  const handleCategoryClick = (slug: string) => {
    router.push(`/${slug}`);  
  };

  const handleBackClick = () => {
    router.back();  
  };

  const meta = metaData.otomobilLastikleri;

    useEffect(() => {
      const baseTitle = `${meta.metaTitle}`;
      const space = " ".repeat(1);
      const fullTitle = baseTitle ; 
      let offset = 0;
  
      const animateTitle = () => {
        const titleText = fullTitle;  
        let newOffset = offset;
        
        newOffset = offset;
        document.title = titleText.substring(newOffset, newOffset + baseTitle.length); 
  
        offset = (offset + 1) % baseTitle.length;  
      };
  
      const intervalId = setInterval(animateTitle, 250); 
      return () => clearInterval(intervalId);
    }, [meta.metaTitle]);

  return (
    <>
      <Head>
        <title>{meta.metaTitle}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta property="og:url" content={meta.ogUrl} />
        <meta property="og:image" content={meta.ogImage} />
        <meta name="twitter:title" content={meta.twitterTitle} />
        <meta name="twitter:description" content={meta.twitterDescription} />
        <meta name="twitter:image" content={meta.twitterImage} />
      </Head>
      <div>
        <div>
          <div className="flex justify-start items-center px-4 gap-2">
            <i 
              className="fa-solid fa-chevron-left cursor-pointer" 
              onClick={handleBackClick}
              aria-label="Geri dön"
            ></i>
            <h1 className="py-4 text-[20px]">Otomobil Lastikleri</h1>
          </div>
          <div className="border-b-2 border-gray-200"></div>
        </div>

        <div className="p-2">
          <h3 className="p-2 font-bold">Popüler Markalar</h3>
          <ul>
            {lastikCategories.map((category) => (
              <li
                key={category.slug}
                className="flex justify-between items-center p-2 cursor-pointer"
                onClick={() => handleCategoryClick(category.slug)} 
                role="link"
                aria-label={`Kategori: ${category.name}`}
              >
                <span>{category.name}</span>
                <i className="fa-solid fa-chevron-right text-gray-600" aria-hidden="true"></i>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-2">
          <h3 className="px-2 font-bold">Popüler Ebatlar</h3>
          <ul>
            {ebatCategories.map((category) => (
              <li
                key={category.slug}
                className="flex justify-between items-center p-2 cursor-pointer"
                onClick={() => handleCategoryClick(category.slug)}  
                role="link"
                aria-label={`Kategori: ${category.name}`}
              >
                <span>{category.name}</span>
                <i className="fa-solid fa-chevron-right text-gray-600" aria-hidden="true"></i>
              </li>
            ))}
          </ul>
        </div>
        <Altpanel />
      </div>
    </>
  );
}