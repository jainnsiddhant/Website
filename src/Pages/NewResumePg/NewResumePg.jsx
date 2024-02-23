import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import NewResume from '../../Components/NewResume/NewResume'
import NewFooter from '../../Components/NewFooter/NewFooter'
import { Footer } from '../../Components/Footer/Footer'

const NewResumePg = () => {
  return (
    <>
        <Navbar />
        <NewResume />
        <Footer />
    </>
  )
}

export default NewResumePg