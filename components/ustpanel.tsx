"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Ustpanel() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="bg-[#053C50]">
      <div className="flex flex-col sm:flex-row justify-between items-center container mx-auto">
        <div className="hidden lg:flex justify-between items-center py-2">
          <ul className="flex space-x-4 text-white text-sm font-medium">
            <li>
              <button
                onClick={() => handleNavigation("/lastik-bulucu")}
                className="flex items-center gap-1 hover:underline"
              >
                <i className="fa-solid fa-truck-monster"></i>
                Lastik Bulucu
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/jant-bulucu")}
                className="flex items-center gap-1 hover:underline"
              >
                <i className="fa-solid fa-sun"></i>
                Jant Bulucu
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/aku-bulucu")}
                className="flex items-center gap-1 hover:underline"
              >
                <i className="fa-solid fa-car-battery"></i>
                Akü Bulucu
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/yag-bulucu")}
                className="flex items-center gap-1 hover:underline"
              >
                <i className="fa-solid fa-oil-can"></i>
                Yağ Bulucu
              </button>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex">
          <ul className="flex space-x-4 text-white text-sm font-medium">
            <li>
              <button
                onClick={() => handleNavigation("/siparis-takip")}
                className="hover:underline"
              >
                Sipariş Takip
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/yardim-merkezi")}
                className="hover:underline"
              >
                Yardım Merkezi
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Ustpanel;