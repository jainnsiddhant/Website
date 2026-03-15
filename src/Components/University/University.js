import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import data from "./data";
import accountsdata from "./Accounts_finnace";
import computerdata from "./Computer";
import englishdata from "./English";
import buisnessdata from "./buisness";
import Internationaldata from "./International_relations";
import Economicsdata from "./Economics";
import Mechnicaldata from "./Mechanical";
import Psychologydata from "./Psychology";
import Pharmaceuticaldata from "./Pharmaceutical";
import Marketingdata from "./Marketing";
import "./University.css";

const SUBJECT_OPTIONS = [
  { value: "main", label: "All" },
  { value: "account", label: "Accounting and Finance" },
  { value: "buisness", label: "Business and management" },
  { value: "computer", label: "Computer science" },
  { value: "economics", label: "Economics" },
  { value: "english", label: "English" },
  { value: "international", label: "International relations" },
  { value: "marketing", label: "Marketing" },
  { value: "mechanical", label: "Mechanical" },
  { value: "pharmaceutical", label: "Pharmaceutical" },
  { value: "psychology", label: "Psychology" },
];

const University = ({ univdata }) => {
  const [products, setProducts] = useState(univdata);
  const [tab, setTab] = useState("main");

  useEffect(() => {
    if (tab === "account") setProducts(accountsdata);
    else if (tab === "computer") setProducts(computerdata);
    else if (tab === "english") setProducts(englishdata);
    else if (tab === "economics") setProducts(Economicsdata);
    else if (tab === "buisness") setProducts(buisnessdata);
    else if (tab === "international") setProducts(Internationaldata);
    else if (tab === "marketing") setProducts(Marketingdata);
    else if (tab === "mechanical") setProducts(Mechnicaldata);
    else if (tab === "pharmaceutical") setProducts(Pharmaceuticaldata);
    else if (tab === "psychology") setProducts(Psychologydata);
    else setProducts(data);
  }, [tab]);

  return (
    <div className="ranking-section">
      <div className="ranking-header">
        <h2 className="ranking-title">Rankings</h2>
        <p className="ranking-subtitle">
          Discover top UK university rankings (QS & Guardian) for academic excellence and opportunities. Sorted by Guardian by default.
        </p>
        <div className="ranking-links">
          <a
            href="https://www.topuniversities.com/university-rankings"
            target="_blank"
            rel="noopener noreferrer"
            className="ranking-link"
          >
            QS Ranking
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href="https://www.theguardian.com/education/ng-interactive/2024/sep/07/the-guardian-university-guide-2025-the-rankings"
            target="_blank"
            rel="noopener noreferrer"
            className="ranking-link"
          >
            Guardian Ranking
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      <div className="ranking-subject-wrap">
        <span className="ranking-subject-label">Subject</span>
        <select
          id="ranking-subject"
          value={tab}
          onChange={(e) => setTab(e.target.value)}
          className="ranking-subject-select"
          aria-label="Choose subject"
        >
          {SUBJECT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="ranking-table-wrap">
        <DataTable value={products} tableStyle={{ minWidth: "100%" }}>
          <Column
            field="name"
            header="Name"
            sortable
            style={{ width: "28%" }}
          />
          <Column field="Qsranking" header="QS Ranking" sortable style={{ width: "18%" }} />
          <Column field="Guardianranking" header="Guardian Ranking" sortable style={{ width: "18%" }} />
          <Column
            field="website"
            header="Website"
            style={{ width: "20%" }}
            body={(rowData) => (
              <a
                href={rowData.website}
                target="_blank"
                rel="noopener noreferrer"
                className="ranking-visit-btn"
              >
                Visit
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          />
        </DataTable>
      </div>
    </div>
  );
};

export default University;
