import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { textAnimation } from "../Animation/Animation";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
import CustomerData from "./CustomerData"; // Import CustomerData

const useIntersectionObserver = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isVisible;
};

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
        className="bg-blue-500 text-white font-medium rounded-lg text-sm px-5 py-2.5 mt-3"
        onClick={handleClick}
      >
        Visit
      </button>
    );
  };

  const cardsRef = useRef(null);

  const cardsVisible = useIntersectionObserver(cardsRef);

  return (
    <div style={{ width: "100%" }}>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: cardsVisible ? 1 : 0,
          scale: cardsVisible ? 1 : 0.5,
        }}
        transition={{ duration: 0.8 }}
        ref={cardsRef}
      >
        <div className="m-10 mt-5">
          <div className="py-4 px-4 w-full">
            <h2
              data-aos="fade-right"
              className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 "
            >
              ALL SCHOLARSHIPS
            </h2>
            <p className="mb-3 text-lg font-normal text-gray-500">
              <div className="space-x-1 flex flex-row gap-8">
                <button
                  type="button"
                  className="text-lg filter-btn bg-blue-500 text-white w-20 p-2 rounded-md"
                  onClick={() => handleFilterChange("all")}
                >
                  All
                </button>
                <button
                  type="button"
                  className="text-lg filter-btn bg-blue-500 text-white w-20 p-2 rounded-md"
                  onClick={() => handleFilterChange("Active")}
                >
                  Active
                </button>
                <button
                  type="button"
                  className="text-lg filter-btn bg-blue-500 text-white w-23 p-2 rounded-md"
                  onClick={() => handleFilterChange("Archive")}
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
            tableStyle={{ minWidth: "100%", justifyContent: "center" }}
          >
            <Column
              field="name"
              header={<p className="text-lg">Name</p>}
              style={{ width: "25%" }}
              className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6"
            ></Column>
            <Column
              field="startTime"
              header={<p className="text-lg">Start Date</p>}
              style={{ width: "25%" }}
              className="w-1/6 sm:w-1/6 md:w-1/6 lg:w-1/12 xl:w-1/12"
            ></Column>
            <Column
              field="endTime"
              header={<p className="text-lg">End Date</p>}
              style={{ width: "25%" }}
              className="w-1/6 sm:w-1/6 md:w-1/6 lg:w-1/12 xl:w-1/12"
            ></Column>
            <Column
              field="status"
              header={<p className="text-lg">Status</p>}
              style={{ width: "10%" }}
              className="w-1/6 sm:w-1/6 md:w-1/6 lg:w-1/12 xl:w-1/12"
            ></Column>
            <Column
              header={<p className="text-lg">Official website</p>}
              body={actionBodyTemplate}
              style={{ width: "35%" }}
              className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6"
            ></Column>
          </DataTable>
        </div>
      </motion.div>
    </div>
  );
}
