"use client";
import React, { useState } from "react";
import { Link } from "@nextui-org/react";
import { useRouter } from "next/navigation"; 
import { usePathname } from "next/navigation";
function Altpanel() {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const router = useRouter(); 
  const handleClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="sm:hidden block container mx-auto justify-center items-center gap-4 py-1 fixed bottom-0 bg-slate-200">
      <div className="flex justify-evenly items-center ">
        <Link href="/" onClick={() => handleClick(0)}>
          <div className="p-4 rounded-lg">
            <i
              className={`fa-solid fa-home text-xl ${
                activeTab === 0 ? "text-orange-500" : "text-gray-600"
              }`}
            ></i>
          </div>
        </Link>
        <Link href="/search" onClick={() => handleClick(1)}>
          <div className="p-4 rounded-lg">
            <i
              className={`fa-solid fa-search text-xl ${
                activeTab === 1 ? "text-orange-500" : "text-gray-600"
              }`}
            ></i>
          </div>
        </Link>
        <Link href="#" onClick={() => handleClick(2)}>
          <div className="p-4 rounded-lg">
            <i
              className={`fa-solid fa-shopping-cart text-xl ${
                activeTab === 2 ? "text-orange-500" : "text-gray-600"
              }`}
            ></i>
          </div>
        </Link>
        <Link href="#" onClick={() => handleClick(3)}>
          <div className="p-4 rounded-lg">
            <i
              className={`fa-regular fa-heart text-xl ${
                activeTab === 3 ? "text-orange-500" : "text-gray-600"
              }`}
            ></i>
          </div>
        </Link>
        <Link href="/category" onClick={() => handleClick(4)}>
          <div className="p-4 rounded-lg">
            <i
              className={`fa-solid fa-bars text-xl ${
                activeTab === 4 ? "text-orange-500" : "text-gray-600"
              }`}
            ></i>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Altpanel;
