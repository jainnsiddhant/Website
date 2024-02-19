import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import NewFooter from "../../Components/NewFooter/NewFooter";
import NewConnect from "../../Components/NewConnect/NewConnect";

const NewConnectPg = () => {
    return(
        <>
            <Navbar />
            <NewConnect />
            <NewFooter />
        </>
    )
}

export default NewConnectPg