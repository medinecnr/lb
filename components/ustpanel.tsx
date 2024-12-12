"use client";
import React, { useState } from "react";
import { Link } from "@nextui-org/react";
import { useRouter } from "next/navigation"; 
import { usePathname } from "next/navigation";
function Ustpanel() {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const router = useRouter(); 
  const handleClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="bg-[#053C50]">
    <div className="flex flex-col sm:flex-row justify-between items-center container mx-auto max-w-7xl">
      <div className="hidden lg:flex justify-between items-center py-2 ">
        <ul className="flex space-x-2 text-white text-sm font gap-2">
          <li>
            <a href="#">
              <i className="fa-solid fa-truck-monster me-1"></i>
              Lastik Bulucu
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-sun me-1"></i>
              Jant Bulucu
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-car-battery me-1"></i>
              Akü Bulucu
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-oil-can me-1"></i>
              Yağ Bulucu
            </a>
          </li>
        </ul>
      </div>

      <div className="hidden lg:flex">
        <ul className="flex space-x-2 text-white text-sm font gap-2">
          <li><a href="#">Sipariş Takip</a></li>
          <li><a href="#">Yardım Merkezi</a></li>
        </ul>
      </div>
    </div>
  </div>
  );
}

export default Ustpanel;
