"use client";
import Altpanel from "@/components/altpanel";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { metaData } from "@/config/metaConfig";
import { useEffect } from "react";

type Props = {};

function Page({}: Props) {

  const meta = metaData.user;

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
      <head>
        <title>{meta.metaTitle}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta property="og:url" content={meta.ogUrl} />
        <meta property="og:image" content={meta.ogImage} />
        <meta name="twitter:title" content={meta.twitterTitle} />
        <meta name="twitter:description" content={meta.twitterDescription} />
        <meta name="twitter:image" content={meta.twitterImage} />
      </head>

      <div className="relative min-h-screen flex flex-col">
        <Navbar />

        <div className="flex flex-col justify-center items-center mt-12">
          <h1 className="text-3xl font-semibold">Hesap Açma Seçenekleri</h1>
          <p className="text-sm text-gray-600 my-6">Giriş Yapın.</p>

          <div className="space-y-4 w-full max-w-xs">
            <Link href="/login">
              <button className="w-full border p-2 rounded-md" aria-label="Giriş yap">
                <i className="fa-solid fa-arrow-right-from-bracket pe-2"></i> Giriş Yap
              </button>
            </Link>
          </div>

          <p className="text-sm text-gray-600 my-6">veya Hesap Oluştur</p>

          <div className="space-y-4 w-full max-w-xs">
            <Link href="/create-acount">
              <button className="border px-6 py-3 rounded-md w-full" aria-label="Bireysel hesap oluştur">
                <i className="fa-regular fa-user pe-2"></i> Bireysel
              </button>
            </Link>

            <Link href="/create-acount">
              <button className="border px-6 py-3 rounded-md w-full my-4" aria-label="Bayi/B2B hesap oluştur">
                <i className="fa-solid fa-city pe-2"></i> Bayi / B2B
              </button>
            </Link>

            <Link href="/create-acount">
              <button className="border px-6 py-3 rounded-md w-full" aria-label="Filo hesap oluştur">
                <i className="fa-solid fa-car-side pe-2"></i> Filo
              </button>
            </Link>
          </div>
        </div>

        <div className="fixed bottom-[4rem] w-full text-center py-2">
          <p className="text-[14px] text-gray-600">
            2024 © Lastik Borsası. Tüm haklar saklıdır.
          </p>
        </div>

        <Altpanel />
      </div>
    </>
  );
}

export default Page;
