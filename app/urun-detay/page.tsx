"use client";
import Ustpanel from '@/components/ustpanel';
import { Navbar } from '@/components/navbar';
import Hizmetler from '@/components/hizmetler';
import Dowload from '@/components/dowloand';
import Footer from '@/components/footer';
import Enalt from '@/components/enalt';
import React, { useState } from 'react';
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import {Tooltip, Button} from "@nextui-org/react";


function Page() {
  const images = [
    "./images/de959470Başlıksız-1_0000_Katman 14.jpg",
    "./images/primacy-4-1.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1); // Sayaç durumu

  const stockQuantity = 14; 

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const incrementQuantity = () => {
    // Stok miktarını aşmamak için kontrol 
    if (quantity < stockQuantity) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrementQuantity = () => {
    // Sayaç değeri 1'den küçük olmasın
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <section>
      <Ustpanel />
      <Navbar />
      <div className="container mx-auto relative">
        <div className="my-6">
          <Breadcrumbs>
            <BreadcrumbItem>Lastik</BreadcrumbItem>
            <BreadcrumbItem>Otomobil Lastikleri</BreadcrumbItem>
            <BreadcrumbItem href="/suv">SUV 4x4 Lastikleri</BreadcrumbItem>
            <BreadcrumbItem href="/urun-detay">
              235/65R16C 12PR 121/119N Lassa Wintus 2 M+S
            </BreadcrumbItem>
          </Breadcrumbs>
        </div>

        <div className="flex justify-between items-start relative gap-4">
          {/* Sol Div */}
          <div className="w-1/2">
            <div>
              {/* Büyük Resim */}
              <div className="border rounded-xl relative">
                <img
                  src={images[currentImageIndex]}
                  alt="Lastik Görseli"
                  className="w-full h-72 object-contain rounded-xl"
                />
                <button
                  onClick={handlePrevious}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
                >
                  ◀
                </button>
                
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
                >
                  ▶
                </button>
              </div>

              {/* Küçük Resimler */}
              <div className="flex justify-start items-center gap-2 mt-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`border rounded-xl ${
                      index === currentImageIndex ? "border-[#FA8728]" : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-20 h-24 object-cover rounded-xl cursor-pointer"
                      onClick={() => handleThumbnailClick(index)}
                    />
                  </div>
                ))}
              </div>
              <div className='border rounded-xl mt-6 p-6'> 
              <div className="overflow-x-auto">
                <table className="table-auto w-2/3 border-separate border-spacing-0">
                  <tbody>
                    <tr>
                      <td className=" py-2 ">Mevsim</td>
                      <td className=" py-2 font-semibold">Yaz</td>
                    </tr>
                    <tr>
                      <td className=" py-2 ">Jant Çapı</td>
                      <td className="py-2 font-semibold">16</td>
                    </tr>
                    <tr>
                      <td className="py-2 ">Kesit Oranı</td>
                      <td className="py-2 font-semibold">55</td>
                    </tr>
                    <tr>
                      <td className="py-2 ">Taban Genişliği</td>
                      <td className="py-2 font-semibold">205mm</td>
                    </tr>
                    <tr>
                      <td className="py-2 ">Yüz Endeksi</td>
                      <td className="py-2 font-semibold">91</td>
                    </tr>
                    <tr>
                      <td className="py-2 ">Üretim Yılı</td>
                      <td className="py-2 font-semibold">2023</td>
                    </tr>
                    <tr>
                      <td className='py-2'><a href="#" className='text-[#FA8728]'>Tüm Özellikler <i className="fa-solid fa-chevron-down ms-1 font-mono"></i></a></td>
                    </tr>
                  </tbody>
                </table>
              </div>







                  
              </div>
            </div>
          </div>

          {/* Sağ Div */}
          <div className="w-1/2 relative">
            <div className=""> {/* fixed -z-10 w-2/5 */}
              <div className="flex justify-start items-center gap-2 flex-nowrap">
                <div className="flex items-center justify-center bg-[#006969] text-white text-sm p-2 rounded-lg flex-1 text-center whitespace-nowrap">
                  %20 İndirim
                </div>

                <div className="flex items-center justify-center bg-[#FFB45F] text-white text-sm p-2 rounded-lg flex-1 text-center whitespace-nowrap">
                  <i className="fa-solid fa-truck-fast text-white mr-1"></i>Kargo Bedava
                </div>

                <div className="flex items-center justify-center bg-[#FA8728] text-white text-sm p-2 rounded-lg flex-1 text-center whitespace-nowrap">
                  <i className="fa-solid fa-screwdriver-wrench text-white mr-1"></i>Montaj Hizmeti
                </div>
              </div>
              <div className="mt-4 w-full">
                <h6 className="text-[#FA8728] ">Lassa</h6>
                <p className="font-semibold mt-1">205/55R16 91V Goodyear EAGLE SPORT 2 583930</p>
                <div className="mt-1">
                  <h5 className="text-xl">1.796,00 TL</h5>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                {/* Sayaç */}
                <div className="flex items-center">
                  <button
                    className="py-2 px-4 border rounded-l-xl"
                    onClick={decrementQuantity}
                  >
                    -
                  </button>
                  <span className="border-y py-2 px-4">{quantity}</span>
                  <button
                    className="py-2 px-4 border rounded-r-xl"
                    onClick={incrementQuantity}
                  >
                    +
                  </button>
                </div>
                <div>
                  <button className="p-2 bg-[#FA8728] text-white rounded-xl px-5 flex-1 text-center whitespace-nowrap">
                    SEPETE EKLE <i className="fa-solid fa-cart-shopping text-tiny ps-2"></i>
                  </button>
                </div>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <p className="text-slate-500">Stok: <span className="font-semibold text-black">{stockQuantity} adet</span></p>
                <p className="text-[#FA8728]">
                  Taksit Seçenekleri<i className="fa-solid fa-chevron-down ms-1 font-mono"></i>
                </p>
              </div>
              
              <div className="border-t my-4"></div>
              <div className="my-4 flex justify-between items-center">
                <div className='flex justify-start items-center'>
                  <p className="text-slate-500">Satıcı: <span className="font-semibold text-[#FA8728]">Lastik Borsası</span></p>
                  <p className='bg-[#006969] text-sm text-white font-bold px-3 py-1 ms-2 rounded-xl'>9.4</p>
                 <div className="flex flex-wrap md:inline-grid md:grid-cols-3 gap-4">
                 <Tooltip
                    showArrow
                    classNames={{
                      content: ["py-2 px-4 w-48", "text-black "],
                    }}
                    content="Lastik Borsası dfsd dsfsdfds dsfsdfd dsfdssf dfsdsfds dsfdsds sdfdsfdds sdfsdsdfd"
                    placement="right"
                  >
                    <i className="fa-solid fa-circle-info text-[#FA8728] ms-2"></i>
                  </Tooltip>
                 </div>
                </div>
                
                <p className="text-[#FA8728]">
                  Tüm Satıcılar<i className="fa-solid fa-chevron-down ms-1 font-mono"></i>
                </p>
              </div>
              <div className="border-t my-4"></div>
              <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center gap-2'>
                <Tooltip
                    showArrow
                    classNames={{
                      content: ["py-2 px-4", "text-black "],
                    }}
                    content="Beğendiklerime Ekle"
                    placement="left"
                  >
                  <button className='border rounded-xl w-10 h-10'><i className="fa-regular fa-heart"></i></button>
                  </Tooltip>
                <Tooltip
                    showArrow
                    classNames={{
                      content: ["py-2 px-4 ", "text-black "],
                    }}
                    content="Değerlendirme Yap"
                    placement="top"
                  >
                  <button className='border rounded-xl w-10 h-10'><i className="fa-regular fa-comment"></i></button>
                  </Tooltip>
                <Tooltip
                    showArrow
                    classNames={{
                      content: ["py-2 px-4", "text-black "],
                    }}
                    content="Paylaş"
                    placement="right"
                  >
                  <button className='border rounded-xl w-10 h-10'><i className="fa-solid fa-share"></i></button>
                  </Tooltip>
                  
                </div>
                <div>
                  <div className='flex justify-end items-center'>
                    <p className='me-2'>4,5</p>
                    <i className="fa-solid fa-star text-[#FA8728]"></i>
                    <i className="fa-solid fa-star text-[#FA8728]"></i>
                    <i className="fa-solid fa-star text-[#FA8728]"></i>
                    <i className="fa-solid fa-star text-[#FA8728]"></i>
                    <i className="fa-regular fa-star text-[#FA8728]"></i>
                  </div>
                  <div>
                    <p className='text-gray-500'>256 değerlendirme</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-6">
          <div className=" w-full bg-white">
            <h2 className="text-2xl font-bold text-center relative group">
                Benzer Ürünler
                <div className="border-t-3 rounded-lg border-[#FA8728] absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 transition-all group-hover:scale-x-100 group-hover:w-full w-20 origin-center"></div>
              </h2>
          </div>
          <div>
            {/* card yapısı*/}
          </div>
        </div>
      </div>

      <Hizmetler />
      <Dowload />
      <Footer />
      <Enalt />
    </section>
  );
}

export default Page;
