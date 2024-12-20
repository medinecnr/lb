"use client";
import { Navbar as NextUINavbar, NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarBrand, NavbarItem,NavbarMenuItem, } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import NextLink from "next/link";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { SearchIcon } from "@/components/icons";
import { menuItems } from "@/components/items/navbar-menu-items";
import { useState, useRef, useEffect } from "react";

export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleMenuClick = (id: string) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setActiveMenu(null); 
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
    <div className="sticky top-0 z-50 w-full bg-white">
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
                    <NextLink href="/login" className="text-default-600 font-bold">
                      Giriş Yap
                    </NextLink>
                  </DropdownItem>
                  <DropdownItem key="create-acount">
                    <NextLink href="/create-acount" className="text-default-600 font-bold">
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
              href="/user"
              className="border-none"
            >
              <i className="fa-regular fa-user text-xl text-[#FA8728]"></i>
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

      <div className=" bg-[#FAFAFA] sm:block hidden">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <ul className="flex space-x-4 py-4 text-xs font-semibold">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className="cursor-pointer hover:text-[#FA8728]"
                  onMouseEnter={() => handleMenuClick(item.id)}
                >
                  <NextLink href={`${item.id}`}>{item.label}</NextLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="flex space-x-4 text-xs font-semibold">
              <li className="cursor-pointer hover:text-[#FA8728]">
                <NextLink href="#" aria-label="Markalar sayfasına git">MARKALAR</NextLink>
              </li>
              <li className="cursor-pointer hover:text-[#FA8728]">
                <NextLink href="#">KAMPANYALAR</NextLink>
              </li>
            </ul>
          </div>
        </div>

        {activeMenu && (
          <div
            ref={menuRef}
            className="absolute w-full bg-gray-100 shadow-md z-40 rounded-b-xl "
          >
            <div className="">
              {menuItems.find((menu) => menu.id === activeMenu)?.content}
            </div>
          </div>
        )}
      </div>
      <div className="border-t "></div>
    </div>
  );
};
