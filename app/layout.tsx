"use client";
import "@/styles/globals.css";
import clsx from "clsx";
import { ReactNode, useState, useEffect } from "react";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ChatButton from "@/components/ChatButton";
import { Spinner } from "@nextui-org/react";


export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => setLoading(false), 0.1);
  //   return () => clearTimeout(timeout);
  // }, []);

  // if (loading) {
  //   return (
  //     <html lang="en" className="light">
  //       <body className="min-h-screen flex justify-center items-center bg-white">
  //       <Spinner color="warning"/>
  //         {/* <div className="text-orange-500">Yükleniyor..</div> */}
  //       </body>
  //     </html>
  //   );
  // }

  return (
    <html suppressHydrationWarning lang="en" className="light">
      <head>
        <link rel="icon" href="/images/favico3.png" />
      </head>
      <body className={clsx("min-h-screen antialiased")}>
        <main className="flex-grow">{children}</main>
        <ScrollToTopButton />
        <ChatButton />
      </body>
    </html>
  );
}