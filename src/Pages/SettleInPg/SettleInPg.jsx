import React from "react";
import SettleIn from "../../Components/Settle/SettleIn";
import Navbar from "../../Components/Navbar/Navbar";
import NewFooter from "../../Components/NewFooter/NewFooter";
import { Footer } from '../../Components/Footer/Footer'

const SettleInPg = () => {
    return(
        <>
            <Navbar />
            <SettleIn />
            <Footer />
        </>
    )
}

export default SettleInPg