"use client";
import React from "react";

export default function ChatButton() {
  const handleChatClick = () => {
    alert("Sohbet başlatıldı!");
  };

  return (
    <button
      onClick={handleChatClick}
      className="fixed bottom-4 right-4 py-2 px-3 bg-orange-500 text-white rounded-full shadow-lg sm:block hidden transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300"
      aria-label="Sohbet başlat"
    >
      <i className="fa-solid fa-comments" aria-hidden="true"></i>
    </button>
  );
}