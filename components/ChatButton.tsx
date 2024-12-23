"use client";

export default function ChatButton() {
  const handleChatClick = () => {
    alert("Sohbet başlatıldı!"); 
  };

  return (
    <button
      onClick={handleChatClick}
      className="fixed bottom-16 right-4 py-2 px-3 bg-orange-500 text-white rounded-full shadow-lg sm:block hidden transition-transform hover:scale-105"
      aria-label="Sohbet"
    >
      <i className="fa-solid fa-comments"></i>
    </button>
  );
}