import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ScholarshipIntro from '../../Components/Scholarship/ScholarshipIntro/ScholarshipIntro'
import { Footer } from '../../Components/Footer/Footer'
import ScholarshipTables from '../../Components/Scholarship/ScholarshipTables/ScholarshipTables'

const Scholarship = () => {
  return (
    <>
        <Navbar />
        <ScholarshipIntro />
        <ScholarshipTables />
        <Footer />
    </>
  )
}

export default Scholarship