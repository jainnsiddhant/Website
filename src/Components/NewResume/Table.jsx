import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FaLinkedin } from "react-icons/fa";
import "primereact/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
import CustomerData from "./CustomerData";
import "./Table.css";

export default function Table() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    setCustomers(CustomerData);
  }, []);

  const actionBodyTemplate = (rowData) => (
    <div className="resume-table-actions">
      {rowData.actions.map((link, idx) => {
        const isLinkedIn = link.includes("linkedin");
        return (
          <a
            key={idx}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`resume-table-action-btn ${isLinkedIn ? "resume-table-action-btn--linkedin" : ""}`}
          >
            {isLinkedIn ? (
              <>
                <FaLinkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </>
            ) : (
              "Website"
            )}
          </a>
        );
      })}
    </div>
  );

  const actionTags = (rowData) => (
    <div className="resume-table-tags">
      {rowData.tags.map((item, idx) => (
        <span key={idx} className="resume-table-tag">
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div id="table" className="resume-table-page">
      <div className="resume-table-inner">
        <h2 className="resume-table-title">Enhance Resume</h2>
        <p className="resume-table-subtitle">
          Boost your resume with these courses offered by societies from IITs and IIMs to elevate your skillset and create a strong resume
        </p>

        <div className="resume-table-wrap">
          <DataTable
            value={customers}
            paginator
            rows={10}
            rowsPerPageOptions={[10]}
            paginatorTemplate="PrevPageLink CurrentPageReport NextPageLink"
            currentPageReportTemplate="{first}–{last} of {totalRecords}"
            paginatorClassName="resume-table-paginator"
            tableClassName="resume-table"
            tableStyle={{ minWidth: "100%" }}
            emptyMessage="No courses to show."
          >
            <Column
              field="name"
              header="Name"
              className="resume-table-col-name"
            />
            <Column
              field="tags"
              header="Specialisation"
              body={actionTags}
            />
            <Column
              header="Official Pages"
              body={actionBodyTemplate}
            />
          </DataTable>
        </div>
      </div>
    </div>
  );
}
