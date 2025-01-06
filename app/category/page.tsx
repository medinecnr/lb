"use client";
import { useRouter } from "next/navigation";
import Altpanel from "@/components/altpanel";
import { metaData } from "@/config/metaConfig";
import { useEffect } from "react";

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

  const meta = metaData.category;

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
        <Altpanel />
      </div>
    </>
  );
}