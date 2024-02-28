import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { textAnimation } from "../Animation/Animation";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
import CustomerData from "./CustomerData"; // Import CustomerData

export default function NewScholars() {
  const [customers, setCustomers] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setCustomers(CustomerData); // Set customers state with data from CustomerData
  }, []);

  const filterData = () => {
    if (filter === "all") {
      setCustomers(CustomerData);
    } else {
      const filteredData = CustomerData.filter(
        (customer) => customer.status === filter
      );
      setCustomers(filteredData);
    }
  };

  useEffect(() => {
    filterData();
  }, [filter]);

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

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
    <motion.div
          variants={textAnimation}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.5 }}
        >
    <div className="card w-[80%] mx-auto">
      <div className="py-4 px-4">
        <h2
          data-aos="fade-right"
          className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900"
        >
          All Scholarships
        </h2>
        <p className="mb-3 text-lg font-normal text-gray-500">
          <div className="space-x-3">
            <button
              type="button"
              style={{
                color: "white",
                backgroundImage: "linear-gradient(to right, #3b82f6, #2563eb)",
                boxShadow:
                  "0 0 0 1px rgba(66, 153, 225, 0.5), 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
                borderRadius: "0.375rem",
                fontSize: "0.875rem",
                padding: "0.625rem 1.25rem",
                textAlign: "center",
                marginRight: "0.5rem",
                marginBottom: "0.5rem",
                outline: "none",
                transition:
                  "background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              }}
              className="text-lg filter-btn"
              onClick={() => handleFilterChange("all")}
            >
              All
            </button>
            <button
              type="button"
              style={{
                color: "white",
                backgroundImage: "linear-gradient(to right, #3b82f6, #2563eb)",
                boxShadow:
                  "0 0 0 1px rgba(66, 153, 225, 0.5), 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
                borderRadius: "0.375rem",
                fontSize: "0.875rem",
                padding: "0.625rem 1.25rem",
                textAlign: "center",
                marginRight: "0.5rem",
                marginBottom: "0.5rem",
                outline: "none",
                transition:
                  "background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              }}
              className="text-lg filter-btn"
              onClick={() => handleFilterChange("active")}
            >
              Active
            </button>
            <button
              type="button"
              style={{
                color: "white",
                backgroundImage: "linear-gradient(to right, #3b82f6, #2563eb)",
                boxShadow:
                  "0 0 0 1px rgba(66, 153, 225, 0.5), 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
                borderRadius: "0.375rem",
                fontSize: "0.875rem",
                padding: "0.625rem 1.25rem",
                textAlign: "center",
                marginRight: "0.5rem",
                marginBottom: "0.5rem",
                outline: "none",
                transition:
                  "background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              }}
              className="text-lg filter-btn"
              onClick={() => handleFilterChange("archive")}
            >
              Archived
            </button>
          </div>
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
          field="startTime"
          header={<p className="text-lg">Start Date</p>}
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="endTime"
          header={<p className="text-lg">End Date</p>}
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="status"
          header={<p className="text-lg">Status</p>}
          style={{ width: "25%" }}
        ></Column>
        <Column
          header={<p className="text-lg">Official website</p>}
          body={actionBodyTemplate}
          style={{ width: "25%" }}
        ></Column>
      </DataTable>
    </div>
    </motion.div>
  );
}

// import React, { useState, useEffect } from "react";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import "primereact/resources/themes/saga-blue/theme.css";
// import "primeicons/primeicons.css";
// import CustomerData from "./CustomerData"; // Import CustomerData

// export default function NewScholars() {
//   const [customers, setCustomers] = useState([]);

//   useEffect(() => {
//     setCustomers(CustomerData); // Set customers state with data from CustomerData
//   }, []);

//   // Function to render the action column content as a link
//   // const actionBodyTemplate = (rowData) => {
//   //     return (
//   //         <a href={rowData.action} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">link</a>
//   //     );
//   // };

//   const actionBodyTemplate = (rowData) => {
//     const handleClick = () => {
//       window.open(rowData.action, "_blank");
//     };

//     return (
//       <button
//         className="bg-blue-500 text-white w-20 p-2 rounded-md"
//         onClick={handleClick}
//       >
//         Visit
//       </button>
//     );
//   };

//   return (
//     <div className="card w-[80%] mx-auto">
//       <div className="py-4 px-4">
//         <h2
//           data-aos="fade-right"
//           className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900"
//         >
//           All Scholarships
//         </h2>
//         <p className="mb-3 text-lg font-normal text-gray-500">
//           <div className="space-x-3">
//             <button
//               type="button"
//               style={{
//                 color: "white",
//                 backgroundImage: "linear-gradient(to right, #3b82f6, #2563eb)",
//                 boxShadow:
//                   "0 0 0 1px rgba(66, 153, 225, 0.5), 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
//                 borderRadius: "0.375rem",
//                 fontSize: "0.875rem",
//                 padding: "0.625rem 1.25rem",
//                 textAlign: "center",
//                 marginRight: "0.5rem",
//                 marginBottom: "0.5rem",
//                 outline: "none",
//                 transition:
//                   "background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
//               }}
//               className="text-lg"
//               onClick={() => window.open("www.google.com", "_blank")}
//             >
//               All
//             </button>
//             <button
//               type="button"
//               style={{
//                 color: "white",
//                 backgroundImage: "linear-gradient(to right, #3b82f6, #2563eb)",
//                 boxShadow:
//                   "0 0 0 1px rgba(66, 153, 225, 0.5), 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
//                 borderRadius: "0.375rem",
//                 fontSize: "0.875rem",
//                 padding: "0.625rem 1.25rem",
//                 textAlign: "center",
//                 marginRight: "0.5rem",
//                 marginBottom: "0.5rem",
//                 outline: "none",
//                 transition:
//                   "background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
//               }}
//               className="text-lg"
//               onClick={() => window.open("www.google.com", "_blank")}
//             >
//               Active
//             </button>
//             <button
//               type="button"
//               style={{
//                 color: "white",
//                 backgroundImage: "linear-gradient(to right, #3b82f6, #2563eb)",
//                 boxShadow:
//                   "0 0 0 1px rgba(66, 153, 225, 0.5), 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
//                 borderRadius: "0.375rem",
//                 fontSize: "0.875rem",
//                 padding: "0.625rem 1.25rem",
//                 textAlign: "center",
//                 marginRight: "0.5rem",
//                 marginBottom: "0.5rem",
//                 outline: "none",
//                 transition:
//                   "background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
//               }}
//               className="text-lg"
//               onClick={() => window.open("www.google.com", "_blank")}
//             >
//               Archived
//             </button>
//           </div>
//         </p>
//       </div>
//       <DataTable
//         value={customers}
//         paginator
//         rows={5}
//         rowsPerPageOptions={[5, 10, 25, 50]}
//         tableStyle={{ minWidth: "50rem" }}
//       >
//         <Column
//           field="name"
//           header={<p className="text-lg">Name</p>}
//           style={{ width: "25%" }}
//         ></Column>
//         <Column
//           field="startTime"
//           header={<p className="text-lg">Start Date</p>}
//           style={{ width: "25%" }}
//         ></Column>
//         <Column
//           field="endTime"
//           header={<p className="text-lg">End Date</p>}
//           style={{ width: "25%" }}
//         ></Column>
//         <Column
//           field="price"
//           header={<p className="text-lg">Price</p>}
//           style={{ width: "25%" }}
//         ></Column>
//         <Column
//           header={<p className="text-lg">Official website</p>}
//           body={actionBodyTemplate}
//           style={{ width: "25%" }}
//         ></Column>
//       </DataTable>
//     </div>
//   );
// }
