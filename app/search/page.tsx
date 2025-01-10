'use client';
import React, { useEffect } from 'react';
import { SearchIcon } from "@/components/icons";
import { Input } from "@nextui-org/input";
import Altpanel from '@/components/altpanel';
import { metaData } from "@/config/metaConfig";
import Head from 'next/head';


export default function SearchPage() {
  const meta = metaData.search;

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
          <h1 className="text-[20px] p-4">Ürün Arama</h1>
          <div className="border-b-1 border-gray-200"></div>
        </div>

        <main className="flex justify-center p-4">
          <Input
            aria-label="Ürün arama kutusu"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            labelPlacement="outside"
            placeholder="Ürün Arayın..."
            endContent={
              <SearchIcon
                className="text-base text-default-400 pointer-events-none flex-shrink-0"
                aria-hidden="true"
              />
            }
            type="search"
            fullWidth
          />
        </main>
        <Altpanel />
      </div>
    </>
  );
}