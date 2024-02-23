import React from "react";
import Course from "../../Components/Course/Course";
import Navbar from "../../Components/Navbar/Navbar";
import NewFooter from "../../Components/NewFooter/NewFooter";
import { Footer } from '../../Components/Footer/Footer'

const CoursePg = () => {
    return (
        <>
            <Navbar />
            <Course />
            <Footer />
        </>
    )
}

export default CoursePg