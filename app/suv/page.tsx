import Footer from '@/components/footer'
import { Navbar } from '@/components/navbar'
import Ustpanel from '@/components/ustpanel'
import Enalt from '@/components/enalt'
import React from 'react'
import Altpanel from '@/components/altpanel'

function page() {
  return (
    <div>
        <Ustpanel />
        <Navbar />
        <div></div>
        <Footer />
        <Enalt/>
        <Altpanel/>
    </div>
  )
}

export default page