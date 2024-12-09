import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { countries } from "@/components/items/countries";
import { cars } from "@/components/items/cars";

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

const FiltrePanel = ({
  selectedCar,
  setSelectedCar,
  selectedModel,
  setSelectedModel,
  selectedYear,
  setSelectedYear,
  selectedSubModel,
  setSelectedSubModel,
  selectedSize,
  setSelectedSize,
  selectedRimSize,
  setSelectedRimSize,
  selectedCountry,
  setSelectedCountry,
  selectedDistrict,
  setSelectedDistrict,
  handleSearch
}: any) => {
  const selectedCarData = cars.find(car => car.label === selectedCar);
  const selectedCountryData = countries.find(country => country.label === selectedCountry);


  return (
    <div className="w-1/4">
      <div className="bg-[#FA8728] rounded-xl flex justify-start flex-col">
        <Accordion>
          <AccordionItem key="1" aria-label="Accordion 1" title={
            <h6 className="text-white ">
              <i className="fa-regular fa-sun me-3 text-[#053C50] flex items-center"></i>
              Lastiğini Bul
            </h6>
          } >
            <RenderSelect
              label="Araba Markası"
              value={selectedCar}
              onChange={(value: string) => {
                setSelectedCar(value);
                setSelectedModel(null);
                setSelectedYear(null);
                setSelectedSubModel(null);
                setSelectedSize(null);
                setSelectedRimSize(null);
              }}
              options={cars.map(car => car.label)}
            />

            {selectedCar && selectedCarData?.models?.length && (
              <RenderSelect
                label="Model"
                value={selectedModel}
                onChange={(value: string) => {
                  setSelectedModel(value);
                  setSelectedYear(null);
                  setSelectedSubModel(null);
                  setSelectedSize(null);
                  setSelectedRimSize(null);
                }}
                options={selectedCarData.models}
              />
            )}

            {selectedModel && selectedCarData?.years?.length && (
              <RenderSelect
                label="Model Yılı"
                value={selectedYear}
                onChange={(value: string) => {
                  setSelectedYear(value);
                  setSelectedSubModel(null);
                  setSelectedSize(null);
                  setSelectedRimSize(null);
                }}
                options={selectedCarData.years}
              />
            )}

            {selectedYear && selectedCarData?.subModels?.length && (
              <RenderSelect
                label="Alt Model"
                value={selectedSubModel}
                onChange={(value: string) => {
                  setSelectedSubModel(value);
                  setSelectedSize(null);
                  setSelectedRimSize(null);
                }}
                options={selectedCarData.subModels}
              />
            )}

            {selectedSubModel && selectedCarData?.sizes?.length && (
              <RenderSelect
                label="Ebat"
                value={selectedSize}
                onChange={(value: string) => {
                  setSelectedSize(value);
                  setSelectedRimSize(null);
                }}
                options={selectedCarData.sizes}
              />
            )}

            {selectedSize && selectedCarData?.rimSizes?.length && (
              <RenderSelect
                label="Jant Ölçüsü"
                value={selectedRimSize}
                onChange={(value: string) => setSelectedRimSize(value)}
                options={selectedCarData.rimSizes}
              />
            )}

            {/* Ara Butonu */}
            <div className="mt-6 flex justify-center">
              <button
                className="bg-[#053C50] text-white py-2 px-4 rounded-xl flex items-center justify-center w-full"
                onClick={handleSearch}
              >
                Ara
                <i className="fa-solid fa-search text-base text-default-400 pointer-events-none flex-shrink-0 ml-3" />
              </button>
            </div>
          </AccordionItem>
        </Accordion>
      </div>

      {/* 120 Dakikada Teslimat */}
      <div className="border-1 rounded-xl mt-4">
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h6 className="text-[#FA8728]">120 Dakikada Teslimat</h6>
            <Checkbox color="warning" checked={false} />
          </div>
          <span className="text-xs leading-[0.7]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, mollitia?</span>
        </div>
        
        {/* Konum Seçin */}
        <div className="p-4">
          <h6 className="text-gray-500 font-serif mb-4"> <i className="fa-solid fa-location-dot mr-2 "></i> Konum Seçin</h6>
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

      <div className='border rounded-t-xl flex justify-start flex-col mt-4'>
        <div className='bg-[#E6E6E6] p-4 rounded-t-xl'>
          {/* sayfada kaç ürün gösteriliyorsa şu kadar ürün var yazacak */}
          <p> <span className='font-bold text-2xl'>...</span> Ürün Listeleniyor</p>
        </div>
        <div className='m-2'>
          <p>Seçili Filtreler</p>
        </div>
      </div>
      <div className='flex  items-center border p-4'>
        <Checkbox color="warning" checked={false} />
        <p>24 Saate kargoda</p>
      </div>
      <div className='flex  items-center border p-4'>
        <Checkbox color="warning" checked={false} />
        <p>4 Adet ve Üzeri</p>
      </div>

    </div>
  );
}

export default FiltrePanel;
