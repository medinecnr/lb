"use client";
import Ustpanel from '@/components/ustpanel'
import { Navbar } from '@/components/navbar'
import Dowload from '@/components/dowloand'
import Footer from '@/components/footer'
import Enalt from '@/components/enalt'
import React from 'react'
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";


function page() {
  return (
    <section>
        <Ustpanel />
        <Navbar />
        <div className='container mx-auto'>
            <div className='my-6'>
                <Breadcrumbs>
                    <BreadcrumbItem href="#">Lastik</BreadcrumbItem>
                    <BreadcrumbItem href="#">Otomobil Lastikleri</BreadcrumbItem>
                    <BreadcrumbItem href="/suv">SUV 4x4 Lastikleri</BreadcrumbItem>
                    <BreadcrumbItem href="/urun-detay">235/65R16C 12PR 121/119N Lassa Wintus 2 M+S</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <div>

            </div>






        </div>

        





        <Dowload />
        <Footer />
        <Enalt />
    </section>
  )
}

export default page