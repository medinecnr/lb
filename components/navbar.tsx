"use client";
import { Navbar as NextUINavbar, NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarBrand, NavbarItem,NavbarMenuItem, } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import NextLink from "next/link";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { SearchIcon } from "@/components/icons";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Ürün Arayın..."
      endContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
      fullWidth
    />
  );

  return (
    <div className="sticky top-0 z-50 w-full bg-white ">
      <NextUINavbar maxWidth="xl">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="max-w-fit">
            <NextLink className="flex justify-start items-center" href="/">
              <img src="/images/logoLight.jpg" alt="Logo" className="w-28 h-auto" />
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex flex-1 justify-center" justify="center">
          <NavbarItem className="w-full max-w-3xl">
            {searchInput}
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="flex sm:flex-1 justify-end" justify="end">
          <NavbarItem className="hidden sm:flex xs:hidden"> 
            <Dropdown
              showArrow
              radius="sm"
              classNames={{
                base: "before:bg-default-200",
                content: "border-small border-divider bg-background",
              }}
            >
              <DropdownTrigger>
                <Button variant="ghost" disableRipple>
                  <i className="fa-regular fa-user"></i>
                  Hesabım
                  <i className="fa-solid fa-chevron-down"></i>
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Custom item styles"
                disabledKeys={["profile"]}
                className="p-3"
              >
                <DropdownSection aria-label="Preferences" showDivider>
                  <DropdownItem key="login">
                    <NextLink href="#" className="text-default-600 font-bold">
                      Giriş Yap
                    </NextLink>
                  </DropdownItem>
                  <DropdownItem key="signup">
                    <NextLink href="#" className="text-default-600 font-bold">
                      Hesap Oluştur
                    </NextLink>
                  </DropdownItem>
                </DropdownSection>

                <DropdownSection aria-label="Help & Feedback">
                  <DropdownItem key="wholesaler-login" className="font-bold">
                    <NextLink href="#" className="text-default-600">
                      Bayi Girişi
                    </NextLink>
                  </DropdownItem>
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>

          <NavbarItem className="sm:hidden flex items-center">
            <Button
              variant="ghost"
              disableRipple
              as={NextLink} 
              href="/indirme" 
              className="border flex items-center ">
              <img
                src="./images/dowloandlogo.png"
                alt="Indirme Logo"
                className="w-7 h-7 object-contain"/>
              <span className="text-gray-600 text-xs">Uygulamayı<br />indirin!</span>
            </Button>

            <Button
              variant="ghost"
              disableRipple
              as={NextLink} 
              href="/giris-yap"
              className="border-none"
            >
              <i className="fa-regular fa-user text-xl text-orange-500"></i>
            </Button>
          </NavbarItem>

          <NavbarItem className="hidden sm:block"> 
            <Button color="default" variant="bordered" className="ms-2">
              <i className="fa-solid fa-cart-shopping"></i>
              Sepetim
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="xs:hidden md:flex">
          {searchInput}
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  href="#"
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>

      <div className="mt-1 bg-[#FAFAFA] ">
        <div className="flex flex-col sm:flex-row justify-between items-center container mx-auto max-w-7xl px-4 bg-[#FAFAFA] py-3 ">
          <div className="hidden sm:flex">
            <ul className="flex space-x-2 text-xs font gap-2 ">
              <li><a href="#">LASTİK</a></li>
              <li><a href="#">JANT</a></li>
              <li><a href="#">AKÜ</a></li>
              <li><a href="#">YAĞ</a></li>
              <li><a href="#">İNOVASYON ÜRÜNLERİ</a></li>
              <li><a href="#">MONTAJ</a></li>
              <li><a href="#">DİĞER ÜRÜNLER</a></li>
            </ul>
          </div>
          <div className="hidden sm:flex">
            <ul className="flex space-x-2 text-xs font gap-2">
              <li><a href="#">MARKALAR</a></li>
              <li><a href="#">KAMPANYALAR</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
