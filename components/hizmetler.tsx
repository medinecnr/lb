import React from 'react'
import {cardData} from "@/components/items/pageitems";

function hizmetler() {
  return (
    <div className="container mx-auto bg-white py-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full "
          >
            <div className="w-full h-24 overflow-hidden ">
              <img
                src={card.imageSrc}
                alt={card.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-2 sm:p-4 flex flex-col justify-center items-center">
              <h3 className="font-bold mb-2 text-center">{card.title}</h3>
              <p className="text-gray-600 text-center text-xs">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default hizmetler