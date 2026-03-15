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
    <>
      <div className="md:max-w-5xl md:mx-auto" id="univtable">
        <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h2
            data-aos="fade-right"
            className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
          >
            Rankings
          </h2>
          <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl max-w-6xl mx-auto px-2 sm:px-4">
            Discover top university rankings for insights into academic excellence and opportunities
            <br />
            Note: By default, all rankings are sorted by Guardian Ranking.
          </p>
          <div className="mb-4">
            <a
              href="https://www.topuniversities.com/university-rankings"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 inline-block"
            >
              QS Ranking
            </a>
            <a
              href="https://www.theguardian.com/education/ng-interactive/2024/sep/07/the-guardian-university-guide-2025-the-rankings"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 inline-block"
            >
              Guardian Ranking
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-1.5 py-4 border-b border-gray-200">
            <span className="text-sm font-medium text-gray-500 self-center mr-2">Choose subject</span>
            {SUBJECT_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setTab(opt.value)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors border ${
                  tab === opt.value
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mb-12 max-w-4xl mx-auto mt-8 overflow-x-auto shadow-md sm:rounded-lg">
          <div className="overflow-x-auto ranking-table">
            <DataTable value={products} tableStyle={{ minWidth: "100%", justifyContent: "center" }}>
              <Column field="name" header="Name" sortable style={{ width: "35%" }} />
              <Column field="Qsranking" header="Qs Ranking" sortable style={{ width: "18%" }} />
              <Column field="Guardianranking" header="Guardian Ranking" sortable style={{ width: "25%" }} />
              <Column
                field="website"
                header="University Website"
                style={{ width: "22%" }}
                body={(rowData) => (
                  <div className="flex justify-center">
                  <a
                    href={rowData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium text-gray-600 bg-white border border-gray-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    <span>Visit</span>
                    <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  </div>
                )}
              />
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
};

export default University;
