"use client";
import Ustpanel from '@/components/ustpanel';
import { Navbar } from '@/components/navbar';
import Dowloand from '@/components/dowloand';
import Footer from '@/components/footer';
import Enalt from '@/components/enalt';
import Altpanel from '@/components/altpanel';
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import FiltrePanel from '@/components/FiltrePanel'; 
import { Select, SelectItem } from "@nextui-org/react"; 
import { products } from '@/components/items/SUVurunler'; 
import React, { useState, useEffect } from 'react';
import { Pagination } from '@nextui-org/react';
import Link from 'next/link'; 
import { useRouter } from 'next/navigation';
import {Spinner} from "@nextui-org/react";

function Page() {
  const [selectedCar, setSelectedCar] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedSubModel, setSelectedSubModel] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedRimSize, setSelectedRimSize] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  // Sayfalama işlemleri
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 24; // Her sayfada gösterilecek ürün sayısı

  // "Ara" butonuna tıklandığında yapılacak işlem
  const handleSearch = () => {
    console.log("Ara butonuna tıklandı!");
    console.log("Seçilen Araba: ", selectedCar);
    console.log("Seçilen Model: ", selectedModel);
    console.log("Seçilen Yıl: ", selectedYear);
    console.log("Seçilen Alt Model: ", selectedSubModel);
    console.log("Seçilen Ebat: ", selectedSize);
    console.log("Seçilen Jant Ölçüsü: ", selectedRimSize);
    console.log("Seçilen Ülke: ", selectedCountry);
    console.log("Seçilen İlçe: ", selectedDistrict);
  };

  const handleCarChange = (value: string) => {
    setSelectedCar(value);
  };

  // İndirimli fiyat hesaplama 
  const calculateDiscountedPrice = (price: string, discount: number) => {
    const priceNumber = parseFloat(price.replace('₺', '').trim()); 
    if (isNaN(priceNumber)) {
      return 0; 
    }
    return priceNumber - (priceNumber * (discount / 100)); 
  };

  // Ürünleri sayfalara ayırma
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  // Pagination 
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  
  useEffect(() => {
    window.scrollTo(0, 0); // Sayfa üstüne kaydır
  }, [currentPage]); // currentPage değiştiğinde çalışır

  const router = useRouter();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(false);
    }, []);
  
    const handleCategoryClick = (slug: string) => {
      router.push(`/${slug}`);
    };
  
    if (loading) {
      return 
      <div className="flex justify-center items-center min-h-screen">
        <Spinner color="warning" label="" />
      </div>
    } 
    
  return (
    <section>
      <Ustpanel />
      <Navbar />
      <div className="container mx-auto pb-10">
        <div className='mt-6'>
          <Breadcrumbs>
            <BreadcrumbItem href="#">Lastik</BreadcrumbItem>
            <BreadcrumbItem href="#">Otomobil Lastikleri</BreadcrumbItem>
            <BreadcrumbItem href="/suv">SUV 4x4 Lastikleri</BreadcrumbItem>
          </Breadcrumbs>
        </div>
        <div className="py-6 flex gap-4">
          {/* Filtre Paneli */}
          <FiltrePanel
            selectedCar={selectedCar}
            setSelectedCar={setSelectedCar}
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            selectedSubModel={selectedSubModel}
            setSelectedSubModel={setSelectedSubModel}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedRimSize={selectedRimSize}
            setSelectedRimSize={setSelectedRimSize}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            selectedDistrict={selectedDistrict}
            setSelectedDistrict={setSelectedDistrict}
            handleSearch={handleSearch}
          />

          {/* Sağ Kısım Ürün Listesi */}
          <div className="rounded-xl w-full sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 p-2">
            <div className="flex justify-between items-center w-full">
              <h1 className="text-xl font-semibold">SUV 4x4 Lastikleri</h1>
              <div className="flex justify-end min-w-[120px]">
                <Select
                  variant="bordered"
                  label="Sırala"
                  value={selectedCar || ''}
                  onChange={e => handleCarChange(e.target.value)}
                  className="w-full max-w-[200px]"
                >
                  <SelectItem key="1" value="1">Artan</SelectItem>
                  <SelectItem key="2" value="2">Azalan</SelectItem>
                </Select>
              </div>
            </div>

            {/* Marka Kaydırılabilir Kısım */}
            <div className="border-1 rounded-xl mt-5 p-4">
              <div className="flex items-center gap-12">
                <h6 className="text-gray-600 whitespace-nowrap">Marka</h6>
                <div className="relative flex-1 overflow-hidden">
                  <button
                    onClick={() => {
                      const container = document.getElementById("scrollable-container");
                      if (container) container.scrollBy({ left: -150, behavior: "smooth" });
                    }}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-2 z-10 shadow"
                  >
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>
                  <div
                    id="scrollable-container"
                    className="flex gap-2 overflow-x-scroll no-scrollbar pl-8 pr-8"
                    style={{ scrollBehavior: "smooth" }}
                  >
                    {["Michelin", "Goodyear", "Pirelli", "Continental", "Bridgestone", "Hankook", "Dunlop", "Lassa"].map((brand, index) => (
                      <button key={index} className="flex items-center gap-1 px-4 py-2 border rounded-2xl whitespace-nowrap">
                        {brand} <i className="fa-solid fa-plus"></i>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      const container = document.getElementById("scrollable-container");
                      if (container) container.scrollBy({ left: 150, behavior: "smooth" });
                    }}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-2 z-10 shadow"
                  >
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Ürün Kartları */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
              {currentProducts.map((product) => {
                const discountedPrice = typeof product.discount === 'number'
                  ? calculateDiscountedPrice(product.price, product.discount)
                  : null;

                return (
                  // <Link key={product.id} href={`/product/${product.id}`} passHref>
                  <Link key={product.id} href="/urun-detay" passHref>

                    <div
                      className="group relative w-full h-auto shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 border-small"
                    >
                      <div>
                        <img
                          src={product.imageUrl}
                          alt={product.title}
                          className="object-contain w-full h-40"
                        />
                      </div>
                      <div className="flex flex-col justify-between items-center text-center gap-3 p-6">
                        <h3 className="text-[#FA8728] font-semibold">
                          {product.title}
                        </h3>
                        <p className=" text-gray-600 line-clamp-2">
                          {product.description}
                        </p>

                        {discountedPrice ? (
                          <div className="flex justify-center items-center gap-2 w-full">
                            <div className="font-bold text-gray-800">
                              {discountedPrice.toFixed(2)} ₺
                            </div>
                            <div className="text-tiny text-gray-400 line-through">
                              {product.price}₺
                            </div>
                          </div>
                        ) : (
                          <h4 className="font-bold text-gray-800">{product.price}₺</h4>
                        )}
                      </div>

                      {/* Özel ikonlar ve etiketler */}
                      {(product.hasSpecialIcon || product.discount || product.tamir) && (
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

                      <div className="absolute bottom-0 left-0 w-full p-4">
                        <button className="bg-[#FFB45F] text-white w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg py-2 hover:bg-[#FF9E42]">
                          SEPETE EKLE
                        </button>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <Pagination
                color="warning"
                className='z-0 mt-2'
                initialPage={currentPage}
                total={totalPages}
                onChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>

      <Dowloand />
      <Footer />
      <Enalt />
      <Altpanel />

      <style jsx>{`
        .no-scrollbar {
          overflow: hidden; 
        }
        .scrollable-container {
          overflow-x: hidden; 
          overflow-y: hidden; 
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; 
        }
        .no-scrollbar {
          -ms-overflow-style: none; 
          scrollbar-width: none; 
        }
      `}</style>
    </section>
  );
}

export default Page;
