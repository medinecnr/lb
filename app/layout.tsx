import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import  Footer  from "@/components/footer";
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import Altpanel from "@/components/altpanel";

interface ProvidersProps {
  themeProps: {
    attribute: string;
  };
  children: ReactNode;
}

export function Providers({ themeProps, children }: ProvidersProps) {
  return (
    <ThemeProvider {...themeProps}>
      {children} 
    </ThemeProvider>
  );
}

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="light">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <script src="https://kit.fontawesome.com/fbcb436b89.js"></script>
      </head>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-white font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class"}} >
          <div className="relative flex flex-col h-screen">
            <div className="bg-[#053C50]">
              <div className="flex flex-col sm:flex-row justify-between items-center container mx-auto max-w-7xl px-3 bg-[#053C50]">
                <div className="hidden lg:flex justify-center items-center py-2">
                  <ul className="flex space-x-2 text-white text-sm font gap-2">
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-truck-monster me-1"></i>
                        Lastik Bulucu
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-sun me-1"></i>
                        Jant Bulucu
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-car-battery me-1"></i>
                        Akü Bulucu
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-oil-can me-1"></i>
                        Yağ Bulucu
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="hidden lg:flex">
                  <ul className="flex space-x-2 text-white text-sm">
                    <li><a href="#">Sipariş Takip</a></li>
                    <li><a href="#">Yardım Merkezi</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <Navbar />
            <main className="flex-grow">
              {children} 
            </main>
            <Footer />
            <div className="bg-[#042F3F]">
              <div className="flex flex-col sm:flex-row justify-between items-center container mx-auto max-w-7xl  bg-[#042F3F]">
                <p className="text-[14px] text-white mt-4  sm:mt-0 sm:mb-0">2024 © Lastik Borsası. Tüm haklar saklıdır.</p>
                <a href="#"><img src="/images/logoDark.jpg" alt="Logo" className="w-28 h-auto" /></a>
              </div>
            </div>
             <Altpanel />

          </div>
        </Providers>
      </body>
    </html>
  );
}
