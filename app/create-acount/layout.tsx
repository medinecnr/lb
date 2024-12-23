'use client';

import { ReactNode, useState, useEffect } from 'react';
import { Button } from "@nextui-org/button";
import clsx from "clsx";
import NextLink from "next/link";
import { slides } from "@/components/items/signup";
import Altpanel from "@/components/altpanel";
import { Spinner } from "@nextui-org/react";

export default function CreateAcountLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const totalItems = slides.length;

  useEffect(() => {
    setIsClient(true); 
    }, []);

  useEffect(() => {
    if (isClient) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isClient, totalItems]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <section className="flex h-screen overflow-hidden">
        {/* Sol Panel */}
        <div
          className="relative flex flex-col w-full sm:w-1/2 bg-white overflow-y-auto h-screen"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#FA8728 #f1f1f1',
          }}
        >
          <div className="flex justify-between items-center bg-white px-4 py-2 border-b">
            <NextLink href="/" passHref>
              <img
                src="/images/logoLight.jpg"
                alt="Lastik Borsası logosu"
                className="w-28 h-auto"
              />
            </NextLink>
            <NextLink href="/login" passHref>
              <button
                className="flex items-center text-sm text-[#053C50]"
                aria-label="Giriş Yap"
              >
                <i className="fa-solid fa-arrow-right-from-bracket pe-2"></i>
                Giriş Yap
              </button>
            </NextLink>
          </div>

          <main className="flex-grow flex justify-center items-center bg-[#FAFAFA] sm:p-0 md:p-20">
            {children}
          </main>

          <div className="flex flex-col justify-center items-center py-6 bg-[#FAFAFA]">
            <p className="text-[14px] text-gray-500">
              2024 © Lastik Borsası. Tüm haklar saklıdır.
            </p>
          </div>
        </div>

        {/* Sağ Panel: Slaytlar */}
        {isClient && (
          <div className="w-full sm:w-1/2 bg-[#053C50] flex-col items-center justify-center h-screen sticky top-0 hidden sm:block">
            <div className="w-full p-6 flex flex-col justify-center items-center h-full text-white">
              <h2 className="text-3xl font-bold text-center relative group">
                {slides[currentIndex].title}
                <div className="border-t-3 rounded-lg border-[#FA8728] absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 transition-all group-hover:scale-x-100 group-hover:w-full w-20 origin-center"></div>
              </h2>

              <div className="w-full flex flex-col justify-center items-center mt-8 text-white text-center">
                <div className="transition-transform duration-500 ease-in-out transform">
                  <i className={`fa-solid ${slides[currentIndex].icon} text-[#FA8728] text-7xl py-3`} />
                  <h2 className="py-3">{slides[currentIndex].subtitle}</h2>
                  <p className="p-3">{slides[currentIndex].description}</p>
                </div>
              </div>

              {/* Dairelere Tıklama */}
              <div className="flex gap-2 mt-4">
                {[...Array(totalItems)].map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-[#FA8728]' : 'bg-white opacity-50'}`}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Slayt ${index + 1} seç`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        )}
        <Altpanel />
      </section>
    </>
  );
}