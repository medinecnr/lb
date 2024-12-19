import "@/styles/globals.css";
import { Metadata } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ReactNode } from 'react';
export const metadata: Metadata = {
  icons: {
    icon: "/images/dowloandlogo.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="light">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <script src="https://kit.fontawesome.com/fbcb436b89.js" defer></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
        <link rel="icon" href="/images/dowloandlogo.png" />
      </head>

      <body
        className={clsx(
          "min-h-screen antialiased",
        )}>
        <div>
          <main className="flex-grow">
            {children} 
          </main>
        </div>
      </body>
      
    </html>
  );
}
