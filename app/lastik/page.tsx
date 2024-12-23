'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from 'next/head';
import Altpanel from "@/components/altpanel";
import { Spinner } from "@nextui-org/react";

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

  const handleCategoryClick = (slug: string) => {
    router.push(`/${slug}`);
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Lastik Çeşitleri | Lastik Borsası</title>
        <meta
          name="description"
          content="Otomobil, SUV, hafif ticari, otobüs ve iş makinası lastikleri dahil birçok lastik türünü keşfedin. Lastik Borsası ile doğru lastik seçimini yapın."
        />
        <meta
          name="keywords"
          content="lastik çeşitleri, otomobil lastikleri, SUV lastikleri, ticari araç lastikleri, iş makinası lastikleri, yaz lastiği, kış lastiği"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div>
        <div>
          <div className="flex justify-start items-center px-4 gap-2">
            <i
              className="fa-solid fa-chevron-left cursor-pointer"
              onClick={handleBackClick}
              aria-label="Geri Dön"
            ></i>
            <h1 className="p-4 text-[20px]">Lastik</h1>
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
                <i className="fa-solid fa-chevron-right text-gray-600"
                  aria-hidden="true"
                ></i>
              </li>
            ))}
          </ul>
        </div>
        <Altpanel />
      </div>
    </>
  );
}