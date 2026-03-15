import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
import CustomerData from "./ScholarshipData";
import "./NewScholars.css";

const useIntersectionObserver = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);

  return isVisible;
};

const TABS = [
  { id: "all", label: "All" },
  { id: "Active", label: "Active" },
  { id: "Archived", label: "Archived" },
];

export default function NewScholars() {
  const [customers, setCustomers] = useState([]);
  const [filter, setFilter] = useState("all");
  const cardsRef = useRef(null);
  const cardsVisible = useIntersectionObserver(cardsRef);

  useEffect(() => {
    if (filter === "all") {
      setCustomers(CustomerData);
    } else {
      setCustomers(CustomerData.filter((c) => c.status === filter));
    }
  }, [filter]);

  const actionBodyTemplate = (rowData) => (
    <a
      href={rowData.action}
      target="_blank"
      rel="noopener noreferrer"
      className="scholars-visit-btn"
    >
      Visit
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  );

  return (
    <div className="scholars-page">
      <motion.div
        className="scholars-inner"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: cardsVisible ? 1 : 0, y: cardsVisible ? 0 : 12 }}
        transition={{ duration: 0.4 }}
        ref={cardsRef}
      >
        <h2 className="scholars-title">All Scholarships</h2>
        <p className="scholars-subtitle">
          {/* Filter by status and visit official links for deadlines and how to apply. */}
        </p>

        {/* Tab filters */}
        <div className="scholars-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={filter === tab.id}
              className={`scholars-tab ${filter === tab.id ? "scholars-tab--active" : ""}`}
              onClick={() => setFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="scholars-table-wrap">
          <DataTable
            value={customers}
            paginator
            rows={10}
            rowsPerPageOptions={[10]}
            paginatorTemplate="PrevPageLink CurrentPageReport NextPageLink"
            currentPageReportTemplate="{first}–{last} of {totalRecords}"
            paginatorClassName="scholars-paginator"
            tableClassName="scholars-table"
            tableStyle={{ minWidth: "100%" }}
            emptyMessage="No scholarships match this filter."
          >
            <Column field="name" header="Name" className="scholars-col-name" />
            <Column field="startTime" header="Start" className="scholars-col-date" />
            <Column field="endTime" header="End" className="scholars-col-date" />
            <Column field="status" header="Status" className="scholars-col-status" />
            <Column header="Link" body={actionBodyTemplate} className="scholars-col-action" />
          </DataTable>
        </div>
      </motion.div>
    </div>
  );
}
