import React from 'react'
import {cardData} from "@/components/items/pageitems";

function hizmetler() {
  return (
    <div className="pb-6 mx-auto max-w-screen-xl">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
        >
          <div className="w-full h-32 overflow-hidden">
            <img
              src={card.imageSrc}
              alt={card.title}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="p-6 flex flex-col justify-center items-center">
            <h2 className="font-bold mb-4 text-center">{card.title}</h2>
            <p className="text-gray-600 text-center">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default hizmetler