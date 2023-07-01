import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Footer } from '../../Components/Footer/Footer'
import Page4templates from '../../Components/Page4/Page4templates'
import Page4Table from '../../Components/Page4/Page4Table'

const Page4 = () => {
  return (
    <>
        <Navbar />
        <Page4templates />
        <Page4Table />
        <Footer />
    </>
  )
}

export default Page4