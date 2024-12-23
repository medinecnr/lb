"use client";

import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
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
      className={`fixed bottom-4 right-4 py-2 px-4 bg-black text-white rounded-full shadow-lg sm:block hidden transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Yukarı Çık"
    >
      <i className="fa-solid fa-arrow-up text-sm"></i>
    </button>
  );
}