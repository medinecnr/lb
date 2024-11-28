import "@/styles/globals.css";
import { Metadata } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { ReactNode } from 'react';
import Altpanel from "@/components/altpanel";
import NextLink from "next/link"; 
import { Button } from "@nextui-org/button";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function girisYapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="light">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <script src="https://kit.fontawesome.com/fbcb436b89.js"></script>
      </head>
      <body
        className={clsx(
          "min-h-screen bg-white font-sans antialiased",
          fontSans.variable,
        )}
      >
        <div className="flex h-screen">
          <div className="relative flex flex-col w-1/2 p-4 ">
            <div className="flex justify-between items-center">
                <a href="/" className="flex justify-start items-center ps-4">
                  <img src="/images/logoLight.jpg" alt="Logo" className="w-28 h-auto" />
                </a>

                <button className=''> 
                  <i className="fa-solid fa-arrow-right-from-bracket pe-2"></i> 
                  Giriş Yap
                </button>
            </div>
           
            <main className="flex-grow p-4 flex justify-center items-center">
              {children}
            </main>

            <div>

              <div className="flex flex-col sm:flex-row justify-center items-center container mx-auto max-w-7xl">
                <p className="text-[14px] text-gray-500 flex justify-center items-center">
                  2024 © Lastik Borsası. Tüm haklar saklıdır.
                </p>
              </div>

            </div>
          </div>

          
          <div className="w-1/2 bg-gray-100">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-xl font-semibold">Carousel</p>
              
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
