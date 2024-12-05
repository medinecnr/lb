
'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import "@/styles/globals.css";
import Altpanel from "@/components/altpanel";

interface OtomobilLastikLayoutProps {
  children: ReactNode;
}

export default function OtomobilLastikLayout({ children }: OtomobilLastikLayoutProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); 
  }, []);

  if (!mounted) {
    return null; 
  }

  return (
    <div className="relative flex flex-col min-h-screen">
      <main className="flex-grow">
        {children} 
      </main>
      <Altpanel /> 
    </div>
  );
}
