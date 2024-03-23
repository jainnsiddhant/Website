import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import NewFooter from "../../Components/NewFooter/NewFooter";
import { Footer } from '../../Components/Footer/Footer'
import NewConnect from "../../Components/NewConnect/NewConnect";

const NewConnectPg = () => {
    return(
        <>
            <Navbar />
            <NewConnect />
            <Footer />
        </>
    )
}

export default NewConnectPg