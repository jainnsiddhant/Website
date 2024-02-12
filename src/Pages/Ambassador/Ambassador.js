import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import NewFooter from "../../Components/NewFooter/NewFooter";
import StudentAmbassador from "../../Components/Ambassador/StudentAmbassador";

const Ambassador = () => {
    return(
        <>
            <Navbar />
            <StudentAmbassador />
            <NewFooter />
        </>
    )
}

export default Ambassador