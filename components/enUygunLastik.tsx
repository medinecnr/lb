import React from 'react'
import { selectOptions,  } from "@/components/items/pageitems";
import { Button } from "@nextui-org/react";
import { useState } from 'react';


const renderOptions = (options: { value: string; label: string }[]) => {
  return options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));
};

function enUygunLastik() {
    const [activeTab, setActiveTab] = useState("lastik");
    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
      };
    
  return (
    <div className="container mx-auto p-5 flex-grow bg-[#FA8728] rounded-lg text-white">
        <div>
          <h3 className="font-bold text-xl">Aracınıza En Uygun Lastiği Bulun!</h3>
          <p className="text-medium">
            Hesaplama aracını kullanarak araç modelinize ya da seçeceğiniz
            lastik ebatlarına göre aracınıza en uygun lastiği bulabilirsiniz.
          </p>
        </div>

        <div className="pt-2">
          <ul className="flex space-x-2 text-white font gap-2">
            <li
              key="lastik"
              onClick={() => handleTabClick("lastik")}
              className={`px-3 py-3 rounded-t-lg cursor-pointer ${
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
              className={`px-3 py-3 rounded-t-lg cursor-pointer ${
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
              className={`px-3 py-3 rounded-t-lg cursor-pointer ${
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
              className={`px-3 py-3 rounded-t-lg cursor-pointer ${
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
        <div className="bg-white text-black p-8 rounded-b-lg rounded-e-lg">
          {activeTab === "lastik" && (
            <div className="flex flex-wrap gap-3 justify-center items-center">
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
                  size="md"
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
  )
}

export default enUygunLastik