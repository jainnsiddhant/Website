import React from "react";

function DownloadPDF() {
    return(
        <div style={{ backgroundColor: '#FFA500' }} className="text-white font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center mx-auto" >
            <a href="After coming to uk.pdf" download="PackList.pdf">Download</a>
        </div>
    )
}
export default DownloadPDF