"use client";
import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-16 right-4 py-2 px-4 bg-black text-white rounded-full shadow-lg sm:block hidden hover:scale-105 transition-all duration-1000 ease-in-out hover:bg-[#FA8728] ${
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Yukarı Çık"
    >
      <i className="fa-solid fa-arrow-up text-sm" aria-hidden="true"></i>
    </button>
  );
}