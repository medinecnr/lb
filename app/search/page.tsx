
'use client';

import React, { useState, useEffect } from 'react';
import { SearchIcon } from "@/components/icons";
import { Input } from "@nextui-org/input";

export default function SearchPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); 
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <div>
        <h1 className="p-4 text-2xl font-bold">Arama</h1>
        <div className="border-b-1 border-gray-200"></div>
      </div>

      <div className="flex justify-center p-4">
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
      </div>
    </div>
  );
}
