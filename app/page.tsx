"use client";
import "@/styles/globals.css";
import { useState, useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Accordion,
  AccordionItem,
  Tabs,
  Tab,
  Button,
} from "@nextui-org/react";
import {
  carouselItems,
  tireSizes,
  brandLogos,
  cardData,
  selectOptions,
  renderOptions,
  tireCategories,
  productData,
} from "@/components/items/pageitems";
import Ustpanel from "@/components/ustpanel";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import Enalt from "@/components/enalt";
import Altpanel from "@/components/altpanel";
import Head from "next/head";

export default function Home() {
  const [activeTab, setActiveTab] = useState("lastik");
  const [selectedCategory, setSelectedCategory] = useState("yazLastigi");
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const scrollCarousel = (scrollAmount: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      scrollCarousel(250);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const getProducts = (tab: string) => {
    switch (tab) {
      case "yazLastigi":
        return productData.yazLastikleri;
      case "kisLastigi":
        return productData.kisLastikleri;
      case "jantlar":
        return productData.jantlar;
      case "aku2":
        return productData.aku2;
      case "yag2":
        return productData.yag2;
      default:
        return [];
    }
  };

  const renderCard = (product: any) => (
    <div
      key={product.id}
      className="group relative w-60 h-80 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105"
    >
      <div>
        <img
          src={product.imageUrl}
          alt={product.title}
          className="object-contain w-full h-40"
        />
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-3 p-4">
        <h3 className="text-[#FA8728]  font-semibold">{product.title}</h3>
        <p className=" text-gray-600">{product.description}</p>
        <h4 className="font-bold text-gray-800">{product.price}</h4>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4">
        <button className="bg-[#FFB45F] text-white w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg py-2 hover:bg-[#FF9E42]">
          SEPETE EKLE
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <Head>
        <title>Lastik ve Araç Parçaları - E-Ticaret Sitesi</title>
        <meta
          name="description"
          content="En kaliteli lastik ve araç parçalarını uygun fiyatlarla online satın alabilirsiniz."
        />
        <meta
          name="keywords"
          content="lastik, yaz lastiği, kış lastiği, araç parçaları, jant, akü, e-ticaret"
        />
        <meta
          property="og:title"
          content="Lastik ve Araç Parçaları - E-Ticaret Sitesi"
        />
        <meta
          property="og:description"
          content="En kaliteli lastik ve araç parçalarını uygun fiyatlarla online satın alabilirsiniz."
        />
      </Head>

      <Ustpanel />
      <Navbar />
      {/* Carousel (HALLEDİLDİ)*/}
      <div className="mb-10">
        <div className="carousel-container relative w-full bg-[#006969] flex justify-center items-center m-0 py-10">
          <Carousel
            selectedItem={currentIndex}
            onChange={setCurrentIndex}
            autoPlay
            infiniteLoop
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            swipeable={true}
            emulateTouch={true}
            className="w-full h-full"
            interval={4000}
            transitionTime={1000}
          >
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-center w-full h-full "
              >
                <div className="flex-1 text-white p-8 text-center md:text-left flex flex-col justify-center h-full gap-4">
                  <h2 className=" text-2xl md:text-3xl">{item.title}</h2>
                  <p className="">{item.description}</p>
                  <a href="#">
                    <Button
                      color="primary"
                      className="bg-[#FFB45F] mx-auto px-4"
                      size="lg"
                    >
                      {item.buttonText}
                    </Button>
                  </a>
                </div>

                <div className="flex-1 pl-4 p-8 ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-xl "
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Hizmetler (HALLEDİLDİ)*/}
      <div className="pb-6 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
            >
              <div className="w-full h-32 overflow-hidden">
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 flex flex-col justify-center items-center">
                <h2 className="font-bold mb-4 text-center">{card.title}</h2>
                <p className="text-gray-600 text-center">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Aracınıza En Uygun Lastiği Bulun Kısmı */}
      <div className="container mx-auto p-7 flex-grow bg-[#FA8728] rounded-lg text-white">
        <div>
          <h2 className="font-bold text-2xl">Aracınıza En Uygun Lastiği Bulun!</h2>
          <p className="text-lg">
            Hesaplama aracını kullanarak araç modelinize ya da seçeceğiniz
            lastik ebatlarına göre aracınıza en uygun lastiği bulabilirsiniz.
          </p>
        </div>

        <div className="pt-2">
          <ul className="flex space-x-2 text-white font gap-2">
            <li
              key="lastik"
              onClick={() => handleTabClick("lastik")}
              className={`px-5 py-3 rounded-t-lg cursor-pointer ${
                activeTab === "lastik"
                  ? "bg-white text-black font-bold"
                  : "bg-[#FFB45F] text-white"
              }`}
            >
              <i className="fa-solid fa-truck-monster me-1"></i>
              Lastik Ebatı
            </li>

            <li
              key="jant"
              onClick={() => handleTabClick("jant")}
              className={`px-5 py-3 rounded-t-lg cursor-pointer ${
                activeTab === "jant"
                  ? "bg-white text-black font-bold"
                  : "bg-[#FFB45F] text-white"
              } hidden sm:block`}
            >
              <i className="fa-solid fa-sun me-1"></i>
              Jant Bulucu
            </li>

            <li
              key="aku"
              onClick={() => handleTabClick("aku")}
              className={`px-5 py-3 rounded-t-lg cursor-pointer ${
                activeTab === "aku"
                  ? "bg-white text-black font-bold"
                  : "bg-[#FFB45F] text-white"
              } hidden sm:block`}
            >
              <i className="fa-solid fa-car-battery me-1"></i>
              Akü Bulucu
            </li>

            <li
              key="yag"
              onClick={() => handleTabClick("yag")}
              className={`px-5 py-3 rounded-t-lg cursor-pointer ${
                activeTab === "yag"
                  ? "bg-white text-black font-bold"
                  : "bg-[#FFB45F] text-white"
              } hidden sm:block`}
            >
              <i className="fa-solid fa-oil-can me-1"></i>
              Yağ Bulucu
            </li>
          </ul>
        </div>

        {/* İçerikler */}
        <div className="bg-white text-black p-10 rounded-b-lg rounded-e-large">
          {activeTab === "lastik" && (
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <div className="flex-1 min-w-[120px] max-w-[200px] w-full">
                <select
                  name="carBrand"
                  id="carBrand"
                  className="w-full p-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-[#FFB45F] placeholder:text-gray-400"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Araç Markası
                  </option>
                  {renderOptions(selectOptions.carBrand)}
                </select>
              </div>

              <div className="flex-1 min-w-[120px] max-w-[200px] w-full">
                <select
                  name="carModel"
                  id="carModel"
                  className="w-full p-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-[#FFB45F] placeholder:text-gray-400"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Araç Modeli
                  </option>
                  {renderOptions(selectOptions.carModel)}
                </select>
              </div>

              <div className="flex-1 min-w-[120px] max-w-[200px] w-full">
                <select
                  name="carYear"
                  id="carYear"
                  className="w-full p-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-[#FFB45F] placeholder:text-gray-400"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Model Yılı
                  </option>
                  {renderOptions(selectOptions.carYear)}
                </select>
              </div>

              <div className="flex-1 min-w-[120px] max-w-[200px] w-full">
                <select
                  name="carSubModel"
                  id="carSubModel"
                  className="w-full p-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-[#FFB45F] placeholder:text-gray-400"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Alt Model
                  </option>
                  {renderOptions(selectOptions.carSubModel)}
                </select>
              </div>

              <div className="flex-1 min-w-[120px] max-w-[200px] w-full">
                <select
                  name="tireSize"
                  id="tireSize"
                  className="w-full p-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-[#FFB45F] placeholder:text-gray-400"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Lastik Ebatı
                  </option>
                  {renderOptions(selectOptions.tireSize)}
                </select>
              </div>

              <div className="flex-1 min-w-[120px] max-w-[200px] w-full">
                <select
                  name="rimSize"
                  id="rimSize"
                  className="w-full p-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-[#FFB45F] placeholder:text-gray-400"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Jant Ölçüsü
                  </option>
                  {renderOptions(selectOptions.rimSize)}
                </select>
              </div>

              <div className="flex-1 min-w-[120px] max-w-[200px] w-full flex items-end">
                <Button
                  className="bg-[#FFB45F] text-white w-full md:w-auto"
                  size="lg"
                >
                  Ara
                </Button>
              </div>
            </div>
          )}

          {activeTab === "jant" && <div>Jant içeriği</div>}
          {activeTab === "aku" && <div>Akü içeriği</div>}
          {activeTab === "yag" && <div>Yağ içeriği</div>}
        </div>
      </div>

      {/* Çok Satanlar */}
      <div className="container mx-auto p-6 flex-grow ">
        <div className="flex flex-col justify-center items-center py-8">
          <h2 className="text-2xl font-bold text-center relative group text-black">
            Çok Satanar
            <div className="border-t-3 rounded-lg border-[#FA8728] absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 transition-all group-hover:scale-x-100 group-hover:w-full w-20 origin-center"></div>
          </h2>
        </div>

        <div>
          {/* Tab menüsü */}
          <div className="overflow-x-auto p-6">
            <div className="flex gap-4 justify-between items-center">
              {tireCategories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`min-w-[150px] px-5 py-10 rounded-xl cursor-pointer border hover:border-[#FA8728] ${selectedCategory === category.id ? "border-[#FA8728] bg-white" : "bg-white text-black"}`}
                >
                  <div className="flex flex-col items-center justify-center text-center h-full">
                    <i className={`${category.icon} mb-2 text-2xl`}></i>
                    <span>{category.name}</span>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Seçilen kategoriye göre içerik */}
          <div className="overflow-x-auto py-6">
            <div className="flex gap-6 w-max">
              {getProducts(selectedCategory).map((product) =>
                renderCard(product),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Popüler Markalar  (HALLEDİLDİ)*/}
      <div className="bg-[#053C50]">
        <div className="container mx-auto flex-grow rounded-lg pt-16">
          <div className="flex flex-col justify-center items-center py-8">
            <h2 className="text-2xl font-bold text-center relative group text-white">
              Popüler Markalar
              <div className="border-t-3 rounded-lg border-[#FA8728] absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 transition-all group-hover:scale-x-100 group-hover:w-full w-20 origin-center"></div>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-5 mt-6">
            {brandLogos.map((brand) => (
              <a href={brand.url} className="group" key={brand.id}>
                <img
                  src={brand.imageUrl}
                  alt={brand.name}
                  className="w-20 sm:w-28 md:w-32 lg:w-36 bg-white p-2 rounded-lg transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                />
              </a>
            ))}
          </div>

          <div className="flex justify-center items-center mt-8 pb-16">
            <a href="#" className="text-white font-bold">
              TÜMÜNÜ GÖR <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Popüler Lastik Ebatları (HALLEDİLDİ)*/}
      <div className=" bg-[#FAFAFA] py-16">
        <div className="container mx-auto flex-grow">
          <div className="flex flex-col justify-center items-center py-8">
            <h2 className="text-2xl font-bold text-center relative group">
              Popüler Lastik Ebatları
              <div className="border-t-3 rounded-lg border-[#FA8728] absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 transition-all group-hover:scale-x-100 group-hover:w-full w-20 origin-center"></div>
            </h2>
          </div>

          <div className="relative">
            <div
              ref={carouselRef}
              className="flex overflow-x-auto justify-start space-x-4 p-4 scroll-smooth scrollbar-hide"
            >
              {tireSizes.map((tire) => (
                <div key={tire.id} className="w-[200px] flex-shrink-0">
                  <Link href={tire.detailUrl}>
                    <div className="card shadow-md hover:shadow-xl transition-all rounded-lg overflow-hidden">
                      <div className="card-header">
                        <img
                          src={tire.image}
                          alt={tire.size}
                          className="w-full h-[180px] object-contain"
                        />
                      </div>
                      <div className="card-body text-center py-5 px-10">
                        <h2 className="font-semibold text-gray-800">
                          {tire.size}
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <button
              className="absolute left-[0px] top-1/2 transform -translate-y-1/2 text-[#FA8728]  rounded-full transition-all z-5"
              onClick={() => scrollCarousel(-250)}
            >
              ◀
            </button>
            <button
              className="absolute right-[0px] top-1/2 transform -translate-y-1/2 text-[#FA8728] rounded-full transition-all z-5"
              onClick={() => scrollCarousel(250)}
            >
              ▶
            </button>
          </div>
        </div>
      </div>

      {/* Hakkımızda (HALLEDİLDİ)*/}
      <div className="container mx-auto flex-grow flex flex-col md:flex-row gap-6 py-3">
        <div className="flex-1 p-4">
          <div>
            <img
              src="https://via.placeholder.com/200x100"
              alt="Image 1"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="mt-4">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <br />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus quis tenetur pariatur, quas dignissimos animi velit
              minima. Vero inventore labore neque, nobis pariatur in laborum
              asperiores provident fugit necessitatibus quis corporis odit?
              Placeat aperiam atque recusandae, cum porro exercitationem quas
              alias omnis corrupti a. Saepe voluptatem voluptate voluptas
              delectus impedit.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              cum commodi voluptatem ex tempore autem doloremque consectetur
              beatae alias nisi eos ut omnis in amet cupiditate saepe quae
              veritatis quis sapiente harum officia reiciendis, laborum
              perferendis atque. Saepe temporibus magnam et? Enim assumenda
              molestiae quis similique dignissimos dolore voluptate optio.
            </p>
            <br />
            <a href="#" className="font-semibold">
              Devamını Göster
            </a>
          </div>
        </div>

        <div className="flex-1 p-4">
          <div className="flex flex-col mb-6">
            <h3 className="text-2xl font-bold text-center relative group text-black">
              Sık Sorulanlar
              <div className="border-t-3 rounded-lg border-[#FA8728] absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 transition-all group-hover:scale-x-100 group-hover:w-full w-20 origin-center"></div>
            </h3>
          </div>
          <div>
            <Accordion
              motionProps={{
                variants: {
                  enter: {
                    y: 0,
                    opacity: 1,
                    height: "auto",
                    transition: {
                      height: {
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        duration: 1,
                      },
                      opacity: {
                        easings: "ease",
                        duration: 1,
                      },
                    },
                  },
                  exit: {
                    y: -10,
                    opacity: 0,
                    height: 0,
                    transition: {
                      height: {
                        easings: "ease",
                        duration: 0.25,
                      },
                      opacity: {
                        easings: "ease",
                        duration: 0.3,
                      },
                    },
                  },
                },
              }}
            >
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Quidem incidunt ullam quasi ipsa nihil inventore?"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  dolor reiciendis, vel repellendus, incidunt aliquid quas
                  soluta magni tempore, laboriosam dolores cumque sint? Quidem
                  incidunt ullam quasi ipsa nihil inventore?
                </p>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Culpa sint blanditiis dolorum alias totam voluptatem  consectetur?"
              >
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Culpa sint blanditiis dolorum alias totam voluptatem
                  accusantium quibusdam consectetur! Ducimus nobis neque sint
                  consequatur voluptas nulla dolorum vitae voluptatibus qui
                  nisi.
                </p>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Lorem ipsum dolor sit?"
              >
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Adipisci, assumenda? Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Quod, maiores.
                </p>
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title="Dolorum alias totam voluptatem  consectetur?"
              >
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Culpa sint blanditiis dolorum alias totam voluptatem
                  accusantium quibusdam consectetur! Ducimus nobis neque sint
                  consequatur voluptas nulla dolorum vitae voluptatibus qui
                  nisi.
                </p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Uygulama İndir (RESPONSİVE SIKINTILI) */}
      <div className="resimm">
        <div className="container mx-auto py-20 ">
          <h3 className="text-white text-2xl font-bold mt-20">
            Sektörün Lider Pazar Yeri Platformu
          </h3>
          <h2 className="text-white   mt-2">
            Şimdi App Store ve Google Play Store'da!
          </h2>

          <div className="flex gap-4 pt-3">
            <a href="https://apps.apple.com/tr/app/lb-lastik-borsas%C4%B1-sigorta/id1566776050?ign-itscg=30200&ign-itsct=apps_box_badge">
              <img
                src="/images/tr-tr.svg"
                alt="App Store"
                className=" hover:scale-105 transition-transform"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.lastikborsasi.mobile&hl=tr&gl=US">
              <img
                src="/images/tr_badge_web_generic.png"
                alt="Google Play"
                className=" hover:scale-105 transition-transform"
              />
            </a>
            <a href="https://appgallery.huawei.com/app/C108110243">
              <img
                src="/images/huawei-app-gallery.jpg"
                alt="AppGallery"
                className=" hover:scale-105 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <Enalt />
      <Altpanel />
    </div>
  );
}
