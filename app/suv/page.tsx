"use client";
import Ustpanel from '@/components/ustpanel';
import { Navbar } from '@/components/navbar';
import Dowloand from '@/components/dowloand';
import Footer from '@/components/footer';
import Enalt from '@/components/enalt';
import Altpanel from '@/components/altpanel';
import FiltrePanel from '@/components/FiltrePanel';  
import { products } from '@/components/items/SUVurunler'; 
import React, { useState, useEffect } from 'react';
import { Breadcrumbs, BreadcrumbItem, Select, SelectItem, Pagination, Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, Button, useDisclosure, Checkbox, Accordion, AccordionItem, ScrollShadow, } from '@nextui-org/react';
import Link from 'next/link'; 
import { countries } from "@/components/items/countries";
import { Mevsim, KesitOrani, UretimYili } from "@/components/items/filtre-panel-items";
import { metaData } from "@/config/metaConfig";
import Head from 'next/head';


const RenderSelect = ({ label, value, onChange, options }: { label: string, value: string | null, onChange: (value: string) => void, options: string[] }) => (
  <Select
    variant="flat"
    label={label}
    value={value || ''}
    onChange={e => onChange(e.target.value)}
    className="max-w-xs mt-4"
  >
    {options.map((option) => (
      <SelectItem key={option} value={option}>
        {option}
      </SelectItem>
    ))}
  </Select>
);

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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState<"full">("full");
  const sizes: Array<"full"> = [
    "full",
  ];
  const handleOpen = (selectedSize: typeof size) => {
    setSize(selectedSize);
    onOpen();
  };

  // Pagination 
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Sayfa üstüne kaydır
  }, [currentPage]); // currentPage değiştiğinde çalışır

  const selectedCountryData = countries.find(country => country.label === selectedCountry);

  const meta = metaData.suv;

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
          <div className="flex flex-col sm:flex-row justify-between w-full">
            <h1 className="text-xl font-semibold flex items-center">SUV 4x4 Lastikleri</h1>
            <div className="flex justify-between items-center gap-2">
              {/* Drawer ve Ürün Listesi */}
              <div className="py-4 block sm:hidden w-full">
                <div className="rounded-xl w-full p-2">
                  <div className="flex flex-wrap gap-3 w-full">
                    {sizes.map((drawerSize) => (
                      <Button
                        key={drawerSize}
                        onPress={() => handleOpen(drawerSize)}
                        className="w-full max-w-[200px] bg-[#F4F4F5] py-7 justify-between text-gray-500" 
                      >
                        Filtrele
                        <i className="fa-solid fa-list"></i>
                      </Button>
                    ))}
                  </div>

                  <Drawer isOpen={isOpen} size={size} onClose={onClose}>
                    <DrawerContent>
                      {(onClose) => (
                        <>
                          <DrawerHeader className="flex items-center gap-1 px-4 py-2">
                            <p>Filtrele</p>
                            <Button color="warning" variant="light" onPress={onClose}>
                              Temizle<i className="fa-solid fa-times"></i>
                            </Button>
                          </DrawerHeader>
                          <div className="border-b-1 border-gray-200 w-full"></div>
                          <DrawerBody className='p-4'>
                            <div className='flex justify-start items-center gap-4'>
                              <div className="flex justify-between items-center border p-2 rounded-lg">
                                <Checkbox color="warning" checked={false} />
                                <p className="text-sm">24 Saatte Kargoda</p>
                              </div>
                              <div className="flex justify-between items-center border p-2 rounded-lg">
                                <Checkbox color="warning" checked={false} />
                                <p className="text-sm">4 Adet ve Üzeri</p>
                              </div>
                            </div>
                            <div className="border-1 rounded-xl">
                              <div className="p-2">
                                <div className="flex justify-between items-center">
                                  <h6 className="text-[#FA8728]">120 Dakikada Teslimat</h6>
                                  <Checkbox color="warning" checked={false} />
                                </div>
                                <span className="text-xs leading-[0.7]">Seçtiğiniz konuma 120 dakikada teslim edilebilecek ürünleri gösterir.</span>
                              </div>
                                    
                              {/* Konum Seçin */}
                              <div className="p-2">
                                <h6 className="text-gray-500"> <i className="fa-solid fa-location-dot mr-2 "></i> Konum Seçin</h6>
                                <RenderSelect
                                  label="Ülke Seçin"
                                  value={selectedCountry}
                                  onChange={(value: string) => {
                                    setSelectedCountry(value);
                                    setSelectedDistrict(null);
                                  }}
                                  options={countries.map(country => country.label)}
                                />
                            
                                {selectedCountry && selectedCountryData?.districts?.length && (
                                  <RenderSelect
                                    label="İlçe Seçin"
                                    value={selectedDistrict}
                                    onChange={(value: string) => setSelectedDistrict(value)}
                                    options={selectedCountryData.districts}
                                  />
                                )}
                              </div>
                            </div>
                            <Accordion selectionMode="multiple">
                              <AccordionItem key="1" aria-label="kesitOrani" title="Marka">
                                <ScrollShadow className="w-full h-[120px]">
                                  <p>Marka İçeriği</p>
                                </ScrollShadow>
                              </AccordionItem>
                              <AccordionItem key="2" aria-label="kesitOrani" title="Jant Çapı">
                                <ScrollShadow className="w-full h-[120px]">
                                  <p>Jant Çapı İçeriği</p>
                                </ScrollShadow>
                              </AccordionItem>
                              <AccordionItem key="3" aria-label="kesitOrani" title="Kesit Oranı">
                                <ScrollShadow className="w-full h-[120px]">
                                  <KesitOrani />
                                </ScrollShadow>
                              </AccordionItem>
                              <AccordionItem key="4" aria-label="Mevsim" title="Mevsim">
                                <ScrollShadow className="w-full h-[120px]">
                                  <Mevsim />
                                </ScrollShadow>
                              </AccordionItem>
                              <AccordionItem key="5" aria-label="UretimYili" title="Üretim Yılı">
                                <ScrollShadow className="w-full h-[120px]">
                                  <UretimYili />
                                </ScrollShadow>
                              </AccordionItem>
                              <AccordionItem key="6" aria-label="UretimYili" title="Araç Türü">
                                <ScrollShadow className="w-full h-[120px]">
                                <p>Araç Türü içeriği</p>
                                </ScrollShadow>
                              </AccordionItem>
                            </Accordion>
                          </DrawerBody>
                          <DrawerFooter className="flex justify-center items-center gap-2 p-2 bg-[#FA8728]">
                            <Button className='bg-transparent text-white font-semibold' onPress={onClose}>
                              Ürünleri Gör
                            </Button>
                          </DrawerFooter>
                        </>
                      )}
                    </DrawerContent>
                  </Drawer>
                </div>
              </div>

              <div className="flex min-w-[120px] w-full gap-2">
                <Select
                  label="Sırala"
                  value={selectedCar || ''}
                  onChange={e => handleCarChange(e.target.value)}
                  className="w-full max-w-[200px] "
                >
                  <SelectItem key="1" value="1">Artan</SelectItem>
                  <SelectItem key="2" value="2">Azalan</SelectItem>
                </Select>
              </div>
            </div>
          </div>

            {/* Marka Kaydırılabilir Kısım */}
            <div className="border-1 rounded-xl mt-5 p-4 sm:block hidden">
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
                              <i className="fa-solid fa-wrench text-white text-xl"></i>
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
                onChange={handlePageChange}
                total={totalPages}
                initialPage={currentPage}
                color="warning"
                className='z-0 mt-2'
              />
            </div>
          </div>
        </div>
      </div>
      <Dowloand />
      <Footer />
      <Enalt />
      <Altpanel />
      
      <style jsx>
        {`
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
      `}
      </style>
    </>
  );
}

export default Page;