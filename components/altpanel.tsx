"use client";
import React, { useState } from "react";
import { Link } from "@nextui-org/react";

function Altpanel() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveTab(index);
  };

  const tabs = [
    { href: "/", icon: "fa-solid fa-home", index: 0 },
    { href: "/search", icon: "fa-solid fa-search", index: 1 },
    { href: "#", icon: "fa-solid fa-shopping-cart", index: 2 },
    { href: "#", icon: "fa-regular fa-heart", index: 3 },
    { href: "/category", icon: "fa-solid fa-bars", index: 4 },
  ];

  return (
    <div className="sm:hidden block container mx-auto justify-center items-center gap-4 py-1 fixed bottom-0 bg-slate-200">
      <div className="flex justify-evenly items-center">
        {tabs.map((tab) => (
          <div
            key={tab.index}
            className="p-4 rounded-lg cursor-pointer"
            onClick={() => handleClick(tab.index)}
          >
            <Link href={tab.href}>
              <i
                className={`${tab.icon} text-xl ${
                  activeTab === tab.index ? "text-orange-500" : "text-gray-600"
                }`}
              ></i>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Altpanel;