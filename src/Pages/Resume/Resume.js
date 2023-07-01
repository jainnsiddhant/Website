import React from 'react'
import IntroPage3 from '../../Components/resume/ResumeIntro/IntroPage3'
import Navbar from '../../Components/Navbar/Navbar'
import { Footer } from '../../Components/Footer/Footer'
import ResumeTemplate from '../../Components/resume/ResumeTemplate'
import Table from '../../Components/resume/TableResume/Table'

const Resume = () => {
    return (
        <>
            <Navbar />
            <IntroPage3 />
            <ResumeTemplate /> 
            <Table/>
            <Footer />
        </>
    )
}

export default Resume