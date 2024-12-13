"use client";
import Ustpanel from '@/components/ustpanel';
import { Navbar } from '@/components/navbar';
import Hizmetler from '@/components/hizmetler';
import Dowload from '@/components/dowloand';
import Footer from '@/components/footer';
import Enalt from '@/components/enalt';
import React, { useState } from 'react';
import { Breadcrumbs, BreadcrumbItem, Tabs, Tab, Card, CardBody, Tooltip, Button } from "@nextui-org/react";
import Link from 'next/link';
import { products } from '@/components/items/SUVurunler';

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
            <BreadcrumbItem href="/urun-detay">235/65R16C 12PR 121/119N Lassa Wintus 2 M+S</BreadcrumbItem>
          </Breadcrumbs>
        </div>

        <div className="flex justify-between items-start relative gap-6">
          {/* Sol Div */}
          <div className="w-1/2">
            <div>
              {/* Büyük Resim */}
              <div className="border rounded-xl relative">
                <img src={images[currentImageIndex]} alt="Lastik Görseli" className="w-full h-96 object-contain rounded-xl"/>
                
                <button onClick={handlePrevious} className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                 <i className="fa-solid fa-circle-chevron-left text-[#FA8728]"></i>
                </button>
                
                <button onClick={handleNext} className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                  <i className="fa-solid fa-circle-chevron-right text-[#FA8728]"></i>
                </button>
              </div>

              {/* Küçük Resimler */}
              <div className="flex justify-start items-center gap-2 mt-4">
                {images.map((image, index) => (
                  <div key={index} className={`border rounded-xl ${
                      index === currentImageIndex ? "border-[#FA8728]" : ""
                    }`}>
                    <img src={image} alt={`Thumbnail ${index + 1}`} className="w-20 h-24 object-cover rounded-xl cursor-pointer" onClick={() => handleThumbnailClick(index)}/>
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
            <div className=" "> {/* fixed -z-10 w-2/5 */}
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
                  <button className="py-2 px-4 border rounded-l-xl" onClick={decrementQuantity}>
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <span className="border-y py-2 px-4">{quantity}</span>
                  <button className="py-2 px-4 border rounded-r-xl" onClick={incrementQuantity}>
                    <i className="fa-solid fa-plus"></i>
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
                 <Tooltip showArrow classNames={{
                      content: ["py-2 px-4 w-48", "text-black "],
                    }}
                    content="Lastik Borsası dfsd dsfsdfds dsfsdfd dsfdssf dfsdsfds dsfdsds sdfdsfdds sdfsdsdfd"
                    placement="right">
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
                  <Tooltip showArrow classNames={{
                        content: ["py-2 px-4", "text-black "],
                      }}
                      content="Beğendiklerime Ekle"
                      placement="left">
                    <button className='border rounded-xl w-10 h-10'><i className="fa-regular fa-heart"></i></button>
                  </Tooltip>
                  <Tooltip showArrow classNames={{
                        content: ["py-2 px-4", "text-black "],
                      }}
                      content="Değerlendirme Yap"
                      placement="top">
                    <button className='border rounded-xl w-10 h-10'><i className="fa-regular fa-comment"></i></button>
                  </Tooltip>
                  <Tooltip showArrow classNames={{
                      content: ["py-2 px-4", "text-black "],
                    }}
                    content="Paylaş"
                    placement="right">
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

        <div className='py-6 bg-white'>
          <div className="flex flex-col justify-center items-center pt-8 ">
            <h2 className="text-2xl font-bold text-center relative group">
              Benzer Ürünler
              <div className="border-t-3 rounded-lg border-[#FA8728] absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 transition-all group-hover:scale-x-100 group-hover:w-full w-20 origin-center"></div>
            </h2>
          </div>
          <div className="flex overflow-x-auto mt-4 space-x-6 py-6 bg-white">
            {products.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} passHref>
                <div className="group relative w-56 h-auto shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 border-small">
                  {/* Ürün Görseli */}
                  <div>
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="object-contain w-full h-40"/>
                  </div>
                  
                  {/* Ürün Bilgileri */}
                  <div className="flex flex-col justify-between items-center text-center gap-3 p-6">
                    <h3 className="text-[#FA8728] font-semibold">{product.title}</h3>
                    <p className="text-gray-600 line-clamp-2">{product.description}</p>

                    {/* Fiyat Bilgisi */}
                    <h4 className="font-bold text-gray-800">{product.price}₺</h4>
                  </div>

                  {/* Özel İkonlar ve Etiketler */}
                  {(product.discount || product.hasSpecialIcon || product.tamir) && (
                    <div className="absolute top-2 right-2 flex flex-col gap-2">
                      {product.discount && (
                        <div className="flex items-center justify-center bg-[#006969] w-9 h-9 rounded-lg">
                          <span className="text-white font-bold text-sm">%{product.discount}</span>
                        </div>
                      )}
                      {product.hasSpecialIcon && (
                        <div className="flex items-center justify-center bg-[#FFB45F] w-9 h-9 rounded-lg">
                          <i className="fa-solid fa-truck-fast text-white text-xl"></i>
                        </div>
                      )}
                      {product.tamir && (
                        <div className="flex items-center justify-center bg-[#FA8728] w-9 h-9 rounded-lg">
                          <i className="fa-solid fa-screwdriver-wrench text-white"></i>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Sepete Ekle Butonu */}
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <button className="bg-[#FFB45F] text-white w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg py-2 hover:bg-[#FF9E42]">
                      SEPETE EKLE
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Ürün Özellikleri, Değerlendirmeler, Taksit Seçenekleri, İptal ve İade Koşulları, Tüm Satıcılar */}
        <div className="py-6 bg-white">
          <div className="flex w-full flex-col py-6 bg-white">
            <Tabs aria-label="Options" variant='underlined'>
              <Tab key="urunozellikleri" title="Ürün Özellikleri">
                <Card>
                  <CardBody className='p-6'>
                    <div>
                      <p className='pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat natus animi alias nisi odit debitis, obcaecati esse, praesentium ipsum iusto voluptates rem expedita commodi mollitia reprehenderit sapiente aperiam, exercitationem nam dolorum quis provident magnam! Eius, dolore, nisi fugiat, perferendis doloribus assumenda labore voluptate ipsam illum nostrum dolorum laboriosam incidunt numquam.</p>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="table-auto w-1/3 border-separate border-spacing-0">
                        <tbody>
                          <tr>
                            <td className=" py-2">Mevsim</td>
                            <td className=" py-2 font-semibold ">Yaz</td>
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
                        </tbody>
                      </table>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="degerlendirmeler" title="Değerlendirmeler">
                <Card>
                  <CardBody>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="taksit" title="Taksik Seçenekleri">
                <Card>
                  <CardBody>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="iptal" title="İptal ve İade Koşulları">
                <Card>
                  <CardBody>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="satici" title="Tüm Satıcılar">
                <Card>
                  <CardBody>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
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
