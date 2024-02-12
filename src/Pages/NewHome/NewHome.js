import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Footer } from '../../Components/Footer/Footer'
import NewFooter from '../../Components/NewFooter/NewFooter'
import NewIntro from '../../Components/NewIntro/NewIntro'

const NewHome = () => {
    return (
        <>
            <Navbar />
            <NewIntro />
            <NewFooter />
        </>
    )
}

export default NewHome