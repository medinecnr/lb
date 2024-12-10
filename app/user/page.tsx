"use client";
import Altpanel from "@/components/altpanel";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import React from "react";

type Props = {};

function Page({}: Props) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-col justify-center items-center mt-24">
        <div className="space-y-4 w-full max-w-xs">
          <Link href="/login">
            <button className="w-full border p-2 rounded-md">
              <i className="fa-solid fa-arrow-right-from-bracket pe-2"></i>{" "}
              Giriş Yap
            </button>
          </Link>
        </div>

        <p className="text-sm text-gray-600 my-6">veya hesap Oluştur</p>

        <div className="space-y-4 w-full max-w-xs">
          <Link href="/create-acount">
            <button className="border px-6 py-3 rounded-md w-full">
              <i className="fa-regular fa-user pe-2"></i> Bireysel
            </button>
          </Link>

          <Link href="/create-acount">
            <button className="border px-6 py-3 rounded-md w-full my-4">
              <i className="fa-solid fa-city pe-2"></i> Bayi / B2B
            </button>
          </Link>

          <Link href="/create-acount">
            <button className="border px-6 py-3 rounded-md w-full">
              <i className="fa-solid fa-car-side pe-2"></i> Filo
            </button>
          </Link>
        </div>
      </div>

      <div className="fixed bottom-[4rem] w-full text-center py-2">
        <p className="text-[14px] text-gray-600">
          2024 © Lastik Borsası. Tüm haklar saklıdır.
        </p>
      </div>

      <Altpanel />
    </div>
  );
}

export default Page;
