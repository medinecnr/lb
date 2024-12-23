'use client';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { SearchIcon } from "@/components/icons";
import { Input } from "@nextui-org/input";
import Altpanel from '@/components/altpanel';
import { Spinner } from "@nextui-org/react";

export default function SearchPage() {

  return (
    <>
      <Head>
        <title>Ürün Arama | Lastik Borsası</title>
        <meta
          name="description"
          content="Aradığınız ürünleri kolayca bulmak için ürün arama sayfasını kullanın. Lastik modellerini ve daha fazlasını keşfedin."
        />
        <meta
          name="keywords"
          content="ürün arama, lastik arama, lastik modelleri, online alışveriş, lastikborsası"
        />
      </Head>

      <div>
        <div>
          <h2 className="font-bold p-4">Ürün Arama</h2>
          <div className="border-b-1 border-gray-200"></div>
        </div>

        <main className="flex justify-center p-4">
          <Input
            aria-label="Ürün arama kutusu"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            labelPlacement="outside"
            placeholder="Ürün Arayın..."
            endContent={
              <SearchIcon
                className="text-base text-default-400 pointer-events-none flex-shrink-0"
                aria-hidden="true"
              />
            }
            type="search"
            fullWidth
          />
        </main>
        <Altpanel />
      </div>
    </>
  );
}