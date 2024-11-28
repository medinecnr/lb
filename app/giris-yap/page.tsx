import React from 'react'

function page() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-8">
            <h1 className="text-3xl font-bold text-center relative group text-black">
            Hesap Oluştur
              <div className="border-t-3 rounded-lg border-[#FA8728] absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 transition-all group-hover:scale-x-100 group-hover:w-full w-20 origin-center"></div>
            </h1>
      </div>

      <div>

        <div className='gap-4'>
          <button className='border rounded-3xl p-2 hover:border-[#FA8728]'> <i className="fa-regular fa-user"></i> Bireysel</button>
          <button className='border rounded-3xl p-2 hover:border-[#FA8728]'> <i className="fa-solid fa-city"></i> Bayi/B2B</button>
          <button className='border rounded-3xl p-2 hover:border-[#FA8728]'> <i className="fa-solid fa-car-side"></i> Filo</button>
        </div>

        <div>

          <div>
            <input type="text" name="" id="" />
          </div>

        </div>

      </div>
    </div>
  )
}

export default page