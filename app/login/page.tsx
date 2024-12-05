"use client";
import React, { useState } from 'react';
import NextLink from "next/link";

function Page() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const inputClass = "border border-gray-200 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FA8728]";

  return (
    <>

      <section className="container flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full max-w-md">
          <h1 className="text-3xl font-bold text-center relative group text-black mb-6">
            Giriş Yap
            <div className="border-t-3 rounded-lg border-[#FA8728] absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 transition-all group-hover:scale-x-100 group-hover:w-full w-20 origin-center"></div>
          </h1>

          <div className="w-full bg-white p-6 gap-4 rounded-2xl border-small border-gray-100 mt-5">
            
            <div className="mb-4">
              <input
                type="email"
                className={inputClass}
                placeholder="E-Posta Adresi"
                aria-label="E-Posta Adresi"
              />
            </div>

            <div className="mb-4 relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                className={inputClass}
                placeholder="Şifre"
                aria-label="Şifre"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                aria-label={passwordVisible ? "Şifreyi gizle" : "Şifreyi göster"}
              >
                <i className={`fa-regular ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>

            <button className="bg-[#FA8728] text-white rounded-lg py-2 px-4 w-full">
              Giriş Yap
            </button>

            <div className="mt-5">
              <NextLink href="#" className="text-[#FA8728]">
                <i className="fa-solid fa-lock me-2"></i> Şifremi Unuttum
              </NextLink>
            </div>
          </div>

          <div className="mt-6">
            <NextLink href="/create-acount" className="font-bold">
              <i className="fa-solid fa-user-plus me-2"></i> Hesap Oluştur
            </NextLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
