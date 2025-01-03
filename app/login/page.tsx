"use client";
import React, { useState } from 'react';
import NextLink from "next/link";
import Altpanel from '@/components/altpanel';
import { Input } from "@nextui-org/react";
import { metaData } from "@/config/metaConfig";

export default function Page() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const inputClass = "border border-gray-200 rounded-xl w-full focus:outline-none focus:ring-1 focus:ring-[#fa8628c6]";

  const meta = metaData.login;

  return (
    <>
      <head>
        <title>{meta.metaTitle}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta property="og:url" content={meta.ogUrl} />
        <meta property="og:image" content={meta.ogImage} />
        <meta name="twitter:title" content={meta.twitterTitle} />
        <meta name="twitter:description" content={meta.twitterDescription} />
        <meta name="twitter:image" content={meta.twitterImage} />
      </head>

      <section className="container flex justify-center items-center bg-[#FAFAFA]">
        <div className="flex flex-col justify-center items-center w-full max-w-md">
          <h1 className="text-3xl font-bold text-center relative group text-black mb-6">
            Giriş Yap
            <div className="border-t-3 rounded-lg border-[#FA8728] absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 transition-all group-hover:scale-x-100 group-hover:w-full w-20 origin-center"></div>
          </h1>

          <form className="w-full bg-white p-6 gap-4 rounded-2xl border-small border-gray-100 mt-5">
            <div className="mb-4">
              <Input
                type="email"
                className={inputClass}
                placeholder="E-Posta Adresi"
                aria-label="E-Posta Adresi"
                onClear={() => console.log("input cleared")}
                required
              />
            </div>

            <div className="mb-4 relative">
              <Input
                type={passwordVisible ? 'text' : 'password'}
                className={inputClass}
                placeholder="Şifre"
                aria-label="Şifre"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#FA8728] transition-colors"
                aria-label={passwordVisible ? "Şifreyi gizle" : "Şifreyi göster"}
              >
                <i className={`fa-regular ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`} aria-hidden="true"></i>
              </button>
            </div>

            <button
              type="submit"
              className="bg-warning-500 text-white rounded-lg py-2 px-4 w-full hover:bg-[#FA8728] transition-colors"
              aria-label="Giriş Yap"
            >
              Giriş Yap
            </button>

            <div className="mt-5 text-center">
              <NextLink href="#" className="text-[#FA8728]" aria-label="Şifremi unuttum">
                <i className="fa-solid fa-lock me-2" aria-hidden="true"></i> Şifremi Unuttum
              </NextLink>
            </div>
          </form>

          <div className="mt-6">
            <NextLink href="/create-acount" className="font-bold" aria-label="Hesap Oluştur">
              <i className="fa-solid fa-user-plus me-2" aria-hidden="true"></i> Hesap Oluştur
            </NextLink>
          </div>
        </div>
        <Altpanel />
      </section>
    </>
  );
}
