"use client";
import { ReactNode } from 'react';
import NextLink from "next/link";
import Head from 'next/head';


export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Giriş Yap | Lastik Borsası</title>
        <meta 
          name="description" 
          content="Lastikborsasi.com üzerinden hesabınıza giriş yapın. Lastik çeşitlerini keşfedin ve en iyi fiyatlarla alışveriş yapın."
        />
        <meta 
          name="keywords" 
          content="lastik borsası, giriş yap, lastik fiyatları, online lastik alışverişi, en uygun lastikler"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head> 

      <section
        className="relative flex flex-col w-full overflow-y-auto h-screen"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#FA8728 #f1f1f1',
        }}
      >
        <div className="flex justify-center items-center px-4 py-2 border-b">
          <NextLink href="/" className="flex justify-start items-center">
            <img 
              src="/images/logoLight.jpg" 
              alt="Lastik Borsası Logo" 
              className="w-28 h-auto" 
            />
          </NextLink>
        </div>

        <main className="flex-grow flex justify-center items-center bg-[#FAFAFA]">
          {children}
        </main>

        <div className="flex flex-col justify-center items-center py-6 bg-[#FAFAFA]">
          <p className="text-[14px] text-gray-500">2024 © Lastik Borsası. Tüm haklar saklıdır.</p>
        </div>
      </section>
    </>
  );
}