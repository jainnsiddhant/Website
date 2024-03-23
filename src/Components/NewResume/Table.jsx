import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
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
    const handleClick = () => {
      window.open(rowData.action, "_blank");
    };

    return (
      <button
        className="bg-blue-500 text-white w-20 p-2 rounded-md"
        onClick={handleClick}
      >
        Visit
      </button>
    );
  };

  return (
    <div id="table" className="card w-[80%] mx-auto mt-10">
      <div className="py-4 px-4">
        <h2
          data-aos="fade-right"
          className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl text-center"
        >
          Enhance Resume
        </h2>
        <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 text-center">
          Revamped resume layout with enhanced table design for optimal
          readability and visual appeal.
        </p>
      </div>
      <DataTable
        value={customers}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column
          field="name"
          header={<p className="text-lg">Name</p>}
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="chat"
          header={<p className="text-lg">Specialisation</p>}
          style={{ width: "25%" }}
        ></Column>
        <Column
          header={<p className="text-lg">Official website</p>}
          body={actionBodyTemplate}
          style={{ width: "15%" }}
        ></Column>
      </DataTable>
    </div>
  );
}
