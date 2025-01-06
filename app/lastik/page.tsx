'use client';
import { useRouter } from "next/navigation";
import Altpanel from "@/components/altpanel";
import { metaData } from "@/config/metaConfig";
import { useEffect } from "react";

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

  const meta = metaData.lastik;
  
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