import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Footer } from '../../Components/Footer/Footer'
import Page5templates from '../../Components/Page5/Page5templates'
import Page5Table from '../../Components/Page5/Page5Table'

const Page5 = () => {
  return (
    <>
        <Navbar />
        <Page5templates />
        <Page5Table />
        <Footer />
    </>
  )
}

export default Page5