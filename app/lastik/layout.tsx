"use client";
import React, { useState, useEffect } from 'react';
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

interface SearchLayoutProps {
  children: ReactNode;
}

export default function lastikLayout({ children }: SearchLayoutProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); 
  }, []);

  if (!mounted) {
    return null; 
  }

  return (
    <html suppressHydrationWarning lang="en" className="light">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <script src="https://kit.fontawesome.com/fbcb436b89.js"></script>
      </head>
      <body
        className={clsx(
          "min-h-screen bg-white font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="relative flex flex-col h-screen">
     
          <main className="flex-grow">
            {children}
          </main>

          <Altpanel />
        </div>
      </body>
    </html>
  );
}

