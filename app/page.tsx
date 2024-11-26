"use client";
import "@/styles/globals.css";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Accordion, AccordionItem, Tabs, Tab, Button  } from "@nextui-org/react";
import { carouselItems, tireProducts, tireSizes, brandLogos } from "@/components/items/pageitems";
import { useRef } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("lastik"); 
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (scrollAmount: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth', 
      });
    }
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      scrollCarousel(250); 
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="bg-white text-black">

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
              <div key={index} className="flex items-center justify-center w-full h-full px-8 md:px-16">
                <div className="flex-1 text-white p-6 md:p-10 text-left flex flex-col justify-center h-full">
                  <h1 className="mb-4 text-3xl md:text-4xl">{item.title}</h1>
                  <p className="mb-6 text-lg">{item.description}</p>
                  <a href="#">
                    <Button color="primary" className="bg-[#FFB45F] text-white" size="lg">
                      {item.buttonText}
                    </Button>
                  </a>
                </div>
                <div className="flex-1 pl-4">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="pb-6 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
            <div className="w-full h-32 overflow-hidden">
              <img src="/images/fiyat.jpg" alt="" className="w-full h-full object-contain" />
            </div>
            <div className="p-6 flex flex-col justify-center items-center">
              <h2 className="mb-4 font-bold">Uygun Fiyat Garantisi</h2>
              <p className="text-gray-600 text-center">Yapacağınız alışverişler için en uygun fiyat garantisi vermekteyiz.</p>
            </div>
          </div>
         
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
            <div className="w-full h-32 overflow-hidden">
              <img src="/images/kargo.jpg" alt="" className="w-full h-full object-contain" />
            </div>
            <div className="p-6 flex flex-col justify-center items-center">
              <h2 className="font-bold mb-4">Uygun Fiyat Garantisi</h2>
              <p className="text-gray-600">Yapacağınız alışverişler için en uygun fiyat garantisi vermekteyiz.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
            <div className="w-full h-32 overflow-hidden">
              <img src="/images/odeme.jpg" alt="" className="w-full h-full object-contain" />
            </div>
            <div className="p-6 flex flex-col justify-center items-center">
              <h2 className="font-bold mb-4">Uygun Fiyat Garantisi</h2>
              <p className="text-gray-600">Yapacağınız alışverişler için en uygun fiyat garantisi vermekteyiz.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
            <div className="w-full h-32 overflow-hidden">
              <img src="/images/destek.jpg" alt="" className="w-full h-full object-contain" />
            </div>
            <div className="p-6 flex flex-col justify-center items-center">
              <h2 className="font-bold mb-4">Uygun Fiyat Garantisi</h2>
              <p className="text-gray-600 text-center">Yapacağınız alışverişler için en uygun fiyat garantisi vermekteyiz.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto  p-7 flex-grow bg-[#FA8728] rounded-lg text-white">
        <div>
          <h1>Aracınıza En Uygun Lastiği Bulun!</h1>
          <p>Hesaplama aracını kullanarak araç modelinize ya da seçeceğiniz lastik ebatlarına göre aracınıza en uygun lastiği bulabilirsiniz.</p>
        </div>
        
        <div className="pt-2 ">
          <ul className="flex space-x-2 text-white text-sm font gap-2">
            <li
              onClick={() => handleTabClick("lastik")}
              className={` px-5 py-3 rounded-t-lg cursor-pointer ${activeTab === "lastik" ? "bg-white text-black font-bold" : "bg-[#FFB45F] text-white"}`}
            >
              <i className="fa-solid fa-truck-monster me-1"></i> Lastik Bulucu
            </li>
            <li
              onClick={() => handleTabClick("jant")}
              className={` px-5 py-3  rounded-t-lg cursor-pointer ${activeTab === "jant" ? "bg-white text-black font-bold" : "bg-[#FFB45F] text-white"}`}
            >
              <i className="fa-solid fa-sun me-1"></i> Jant Bulucu
            </li>
            <li
              onClick={() => handleTabClick("aku")}
              className={` px-5 py-3  rounded-t-lg cursor-pointer ${activeTab === "aku" ? "bg-white text-black font-bold" : "bg-[#FFB45F] text-white"}`}
            >
              <i className="fa-solid fa-car-battery me-1"></i> Akü Bulucu
            </li>
            <li
              onClick={() => handleTabClick("yag")}
              className={` px-5 py-3 rounded-t-lg cursor-pointer ${activeTab === "yag" ? "bg-white text-black font-bold" : "bg-[#FFB45F] text-white"}`}
            >
              <i className="fa-solid fa-oil-can me-1"></i> Yağ Bulucu
            </li>
          </ul>
        </div>
       
        <div className="bg-white text-black p-10 rounded-b-lg rounded-e-large">
          {activeTab === "lastik" && 
            <div className="flex flex-wrap gap-4">
          
            <div className="flex-1 min-w-[150px]">
              <select
                name="carBrand"
                id="carBrand"
                className="w-full p-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-[#FFB45F] placeholder:text-gray-400"
                defaultValue=""
              >
                <option value="" disabled hidden>Araç Markası</option>
                <option value="1">Audi</option>
                <option value="2">BMW</option>
                <option value="3">Mercedes</option>
                <option value="4">Volkswagen</option>
              </select>
            </div>
          
            <div className="flex-1 min-w-[150px]">
              <select
                name="carModel"
                id="carModel"
                className="w-full p-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-[#FFB45F] placeholder:text-gray-400"
                defaultValue=""
              >
                <option value="" disabled hidden>Araç Modeli</option>
                <option value="1">A3</option>
                <option value="2">3 Serisi</option>
                <option value="3">C Serisi</option>
                <option value="4">Passat</option>
              </select>
            </div>
          
            <div className="flex-1 min-w-[150px]">
              <select
                name="carYear"
                id="carYear"
                className="w-full p-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-[#FFB45F] placeholder:text-gray-400"
                defaultValue=""
              >
                <option value="" disabled hidden>Model Yılı</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
              </select>
            </div>
          
            <div className="flex-1 min-w-[150px]">
              <select
                name="carSubModel"
                id="carSubModel"
                className="w-full p-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-[#FFB45F] placeholder:text-gray-400"
                defaultValue=""
              >
                <option value="" disabled hidden>Alt Model</option>
                <option value="1">Sport</option>
                <option value="2">Sedan</option>
                <option value="3">Hatchback</option>
                <option value="4">Coupe</option>
              </select>
            </div>
          
            <div className="flex-1 min-w-[150px]">
              <select
                name="tireSize"
                id="tireSize"
                className="w-full p-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-[#FFB45F] placeholder:text-gray-400"
                defaultValue=""
              >
                <option value="" disabled hidden>Lastik Ebatı</option>
                <option value="1">205/55 R16</option>
                <option value="2">225/45 R17</option>
                <option value="3">195/65 R15</option>
                <option value="4">215/55 R18</option>
              </select>
            </div>
          
            <div className="flex-1 min-w-[150px]">
              <select
                name="rimSize"
                id="rimSize"
                className="w-full p-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-[#FFB45F] placeholder:text-gray-400"
                defaultValue=""
              >
                <option value="" disabled hidden>Jant Ölçüsü</option>
                <option value="1">16 inch</option>
                <option value="2">17 inch</option>
                <option value="3">18 inch</option>
                <option value="4">19 inch</option>
              </select>
            </div>
          
            <div className="flex-1 min-w-[150px] flex items-end">
              <Button className="bg-[#FFB45F] text-white w-full md:w-auto" size="lg">Ara</Button>
            </div>
          </div>
          }
          {activeTab === "jant" && <div>Jant içeriği</div>}
          {activeTab === "aku" && <div>Akü içeriği</div>}
          {activeTab === "yag" && <div>Yağ içeriği</div>}
        </div>

      </div>

      <div className="container mx-auto p-6 flex-grow ">
          <div className="flex flex-col justify-center items-center py-8">
            <h1 className="text-3xl font-bold text-center relative group text-black">
            Çok Satanar
              {/* Çizgi */}
              <div className="border-t-3 rounded-lg border-[#FA8728] absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 transition-all group-hover:scale-x-100 group-hover:w-full w-20 origin-center"></div>
            </h1>
          </div>
          
          <div className="flex justify-between gap-4 overflow-x-auto p-6 ">
            <Card className="w-60 p-4 shadow-lg flex items-center justify-center gap-3 border border-transparent hover:border-[#FA8728] bg-white text-black">
            <i className="fa-solid fa-truck-monster me-1"></i>
            <p className="font-semibold">Yaz Lastikleri</p>
            </Card>
            <Card className="w-60 p-4 shadow-lg flex items-center justify-center gap-3 border border-transparent hover:border-[#FA8728] bg-white text-black">
              <i className="fa-solid fa-truck-monster me-1"></i>
              <p className="font-semibold">Kış Lastikleri</p>
            </Card>
            <Card className="w-60 p-4 shadow-lg flex items-center justify-center gap-3 border border-transparent hover:border-[#FA8728] bg-white text-black">
              <i className="fa-solid fa-truck-monster me-1"></i>
              <p className="font-semibold">Jantlar</p>
            </Card>
            <Card className="w-60 p-4 shadow-lg flex items-center justify-center gap-3 border border-transparent hover:border-[#FA8728] bg-white text-black">
              <i className="fa-solid fa-truck-monster me-1"></i>
              <p className="font-semibold">Aküler</p>
            </Card>
            <Card className="w-60 p-4 shadow-lg flex items-center justify-center gap-3 border border-transparent hover:border-[#FA8728] bg-white text-black">
              <i className="fa-solid fa-truck-monster me-1"></i>
              <p className="font-semibold">Yağlar</p>
            </Card>
            <Card className="w-60 p-4 shadow-lg flex items-center justify-center gap-3 border border-transparent hover:border-[#FA8728] bg-white text-black">
              <i className="fa-solid fa-truck-monster me-1"></i>
              <p className="font-semibold">İnovasyon Ürünleri</p>
            </Card>
          </div>

        <div>
          <div className="overflow-x-auto py-6">
            <div className="flex gap-6 w-max">
              {tireProducts.map((product) => (
                <a href="#" key={product.id}>
                  <div className="group relative w-60 h-80 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105">
                    <div>
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="object-contain w-full h-40"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center text-center gap-3 p-4">
                      <h4 className="text-[#FA8728] text-lg font-semibold">{product.title}</h4>
                      <p className="text-sm text-gray-600">{product.description}</p>
                      <h3 className="font-bold text-xl text-gray-800">{product.price}</h3>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-4">
                      <button className="bg-[#FFB45F] text-white w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg py-2 hover:bg-[#FF9E42]">
                        SEPETE EKLE
                      </button>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#053C50]">
        <div className="container mx-auto flex-grow rounded-lg pt-16">
          <div className="flex flex-col justify-center items-center py-8">
            <h1 className="text-3xl font-bold text-center relative group text-white">
              Popüler Markalar
              <div className="border-t-3 rounded-lg border-[#FA8728] absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 transition-all group-hover:scale-x-100 group-hover:w-full w-20 origin-center"></div>
            </h1>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-5 mt-6">
            {brandLogos.map((brand) => (
              <a href={brand.url} className="group" key={brand.id}>
                <img
                  src={brand.imageUrl}
                  alt={brand.name}
                  className="w-28 sm:w-32 md:w-36 lg:w-40 bg-white p-2 rounded-lg transition-transform duration-300 group-hover:scale-105 cursor-pointer"
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

      <div className="mt-16">
          <div className="container mx-auto flex-grow">
            <div className="flex flex-col justify-center items-center py-8">
              <h1 className="text-3xl font-bold text-center relative group">
                Popüler Lastik Ebatları
                <div className="border-t-3 rounded-lg border-[#FA8728] absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 transition-all group-hover:scale-x-100 group-hover:w-full w-20 origin-center"></div>
              </h1>
            </div>

          <div className="relative">
            <div
              ref={carouselRef}
              className="flex overflow-x-auto justify-start space-x-4 p-4 scroll-smooth scrollbar-hide" >
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
                        <h2 className="font-semibold text-gray-800">{tire.size}</h2>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <button
              className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 text-[#FA8728]  rounded-full transition-all z-10"
              onClick={() => scrollCarousel(-250)}
            >
              ◀
            </button>
            <button
              className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 text-[#FA8728] rounded-full transition-all z-10"
              onClick={() => scrollCarousel(250)} 
            >
              ▶
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto felx-grow flex gap-6 py-6">
        <div className="flex-1 p-4">
          <div>
            <img src="https://via.placeholder.com/200x100" alt="Image 1" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="mt-4">
            <h1>Lorem ipsum dolor sit amet.</h1><br />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quis tenetur pariatur, quas dignissimos animi velit minima. Vero inventore labore neque, nobis pariatur in laborum asperiores provident fugit necessitatibus quis corporis odit? Placeat aperiam atque recusandae, cum porro exercitationem quas alias omnis corrupti a. Saepe voluptatem voluptate voluptas delectus impedit.</p><br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum cum commodi voluptatem ex tempore autem doloremque consectetur beatae alias nisi eos ut omnis in amet cupiditate saepe quae veritatis quis sapiente harum officia reiciendis, laborum perferendis atque. Saepe temporibus magnam et? Enim assumenda molestiae quis similique dignissimos dolore voluptate optio.</p>
            <br />
            <a href="#" className="font-semibold">Devamını Göster</a>
          </div>
        </div>

        <div className="flex-1 p-4">
          <div className="flex flex-col">
            <h1 className="">Sık Sorulan Sorular</h1>
            <div className="border-t-3 rounded-lg border-[#FA8728] w-[75px] my-2"></div>
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
              <AccordionItem key="1" aria-label="Accordion 1" title="Quidem incidunt ullam quasi ipsa nihil inventore?" >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor reiciendis, vel repellendus, incidunt aliquid quas soluta magni tempore, laboriosam dolores cumque sint? Quidem incidunt ullam quasi ipsa nihil inventore?</p>
              </AccordionItem>
              <AccordionItem key="2" aria-label="Accordion 2" title="Culpa sint blanditiis dolorum alias totam voluptatem  consectetur?">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sint blanditiis dolorum alias totam voluptatem accusantium quibusdam consectetur! Ducimus nobis neque sint consequatur voluptas nulla dolorum vitae voluptatibus qui nisi.</p>
              </AccordionItem>
              <AccordionItem key="3" aria-label="Accordion 3" title="Lorem ipsum dolor sit?">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, assumenda? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, maiores.</p>
              </AccordionItem>
              <AccordionItem key="4" aria-label="Accordion 4" title="Dolorum alias totam voluptatem  consectetur?">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sint blanditiis dolorum alias totam voluptatem accusantium quibusdam consectetur! Ducimus nobis neque sint consequatur voluptas nulla dolorum vitae voluptatibus qui nisi.</p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

      </div>

      <div className="resimm">
        <div className="container mx-auto py-20 ">
          
          <h1 className="text-white text-3xl font-bold mt-20">
            Sektörün Lider Pazar Yeri Platformu
          </h1>
          <h2 className="text-white text-xl mt-2">
            Şimdi App Store ve Google Play Store'da!
          </h2>

          <div className="flex gap-4 pt-3">
            <a href="#">
              <img
                src="/images/tr-tr.svg"
                alt="App Store"
                className=" hover:scale-105 transition-transform"/>
            </a>
            <a href="#">
              <img
                src="/images/tr_badge_web_generic.png"
                alt="Google Play"
                className=" hover:scale-105 transition-transform"/>
            </a>
            <a href="#">
              <img
                src="/images/huawei-app-gallery.jpg"
                alt="AppGallery"
                className=" hover:scale-105 transition-transform"/>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}