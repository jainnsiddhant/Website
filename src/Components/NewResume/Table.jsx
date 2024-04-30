import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FaLinkedin } from 'react-icons/fa';
import "primereact/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
import CustomerData from "./CustomerData"; // Import CustomerData

export default function Table() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    setCustomers(CustomerData); // Set customers state with data from CustomerData
  }, []);

  // Function to render the action column content as a link
  // const actionBodyTemplate = (rowData) => {
  //     return (
  //         <a href={rowData.action} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">link</a>
  //     );
  // };


// Function to render the action column content as a button
const actionBodyTemplate = (rowData) => {
    const handleClick = (link) => {
        console.log("hello");
        window.open(link, "_blank");
    };

    return rowData.actions.map((link, idx) => {
        const isLinkedIn = link.includes("linkedin");

        return (
            <button
                key={idx}
                className={`text-white space-x-4 font-medium rounded-lg text-sm px-2 py-1.5 me-2 mb-1 ${
                    isLinkedIn ? 'bg-blue-500 hover:bg-blue-600' : 'bg-cyan-500 hover:bg-cyan-600'
                }`}
                onClick={() => handleClick(link)}
            >
                {isLinkedIn ? (
                    <div className="flex flex-row items-center justify-between">
                    <FaLinkedin className="inline mr-2" />
                    <span>LINKEDIN</span>
                  </div>
                  
                ) : (
                    "WEBSITE"
                )}
            </button>
        );
    });
};



  const actionTags = (rowData) => {
    // console.log(rowData.tags);
    return rowData.tags.map((item, idx) => {
      return (
        <React.Fragment key={idx}>
          <button
            type="button"
            className="font-medium text-sm py-1 mb-2"
          >
            {item}
          </button>
          {idx !== rowData.tags.length - 1 && <span>|</span>}
        </React.Fragment>
      );
    });
};


  return (
    <div id="table" className="w-[80%] mx-auto mt-10 justify-center">
  <div className="py-4 px-4">
    <h2
      data-aos="fade-right"
      className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl text-center"
    >
      Enhance Resume
    </h2>
    <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 text-center">
      Boost your resume with these courses offered by societies from IITs and IIMs to elevate your skillset and create a strong resume
    </p>
  </div>
  <DataTable
    value={customers}
    paginator
    rows={5}
    rowsPerPageOptions={[5, 10, 25, 50]}
  >
    <Column
      field="name"
      header={<p className="text-lg">Name</p>}
      style={{ width: "25%" }}
      className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6"
    ></Column>
    <Column
      field="tags"
      header={<p className="text-lg">Specialisation</p>}
      style={{ width: "50%" }}
      body={actionTags}
      className="w-full  sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6 xs:w-full"
    ></Column>
    <Column
      header={<p className="text-lg">Official Pages</p>}
      body={actionBodyTemplate}
      style={{ width: "25%" }}
      className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6"
    ></Column>
  </DataTable>
</div>

  );
}
