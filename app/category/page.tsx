"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Altpanel from "@/components/altpanel";
import { Spinner } from "@nextui-org/react";
import Head from "next/head";

const categories = [
  { name: "Lastik", slug: "lastik" },
  { name: "Jant", slug: "jant" },
  { name: "Akü", slug: "aku" },
  { name: "Yağ", slug: "yag" },
  { name: "İnovasyon Ürünleri", slug: "inovasyon" },
  { name: "Montaj", slug: "montaj" },
  { name: "Markalar", slug: "markalar" },
  { name: "Kampanyalar", slug: "kampanyalar" },
];

export default function CategoryPage() {
  const router = useRouter();

  const handleCategoryClick = (slug: string) => {
    router.push(`/${slug}`);
  };

  return (
    <>
      <Head>
        <title>Kategoriler - Lastik Borsası</title>
        <meta
          name="description"
          content="Sitemizde yer alan tüm kategorileri burada bulabilirsiniz. Lastik, Jant, Akü ve daha fazlası!"
        />
        <meta
          name="keywords"
          content="Lastik, Jant, Akü, Yağ, İnovasyon Ürünleri, Montaj, Markalar, Kampanyalar"
        />
        <meta name="author" content="Lastik Borsası" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div>
        <h1 className="p-4 text-[20px]">Kategoriler</h1>
        <div className="border-b-2 border-gray-200"></div>

        <div className="p-4">
          <ul>
            {categories.map((category) => (
              <li key={category.slug} className="flex justify-between items-center p-2">
                <a
                  href={`/${category.slug}`}
                  className="flex justify-between items-center w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategoryClick(category.slug);
                  }}
                >
                  <span>{category.name}</span>
                  <i className="fa-solid fa-chevron-right text-gray-600"></i>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Alt panel */}
        <Altpanel />
      </div>
    </>
  );
}