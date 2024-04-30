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

const University = ({univdata}) => {
  const [products, setProducts] = useState(univdata);
  const [selectedtab, setSelectedTab] = useState("main");
  const [tab, setTab] = useState("main"); 

  useEffect(() => {
    if (tab === "account") {
      setProducts(accountsdata);
    } else if (tab === "computer") {
      setProducts(computerdata);
    } else if (tab === "english") {
      setProducts(englishdata);
    } else if (tab === "economics") {
      setProducts(Economicsdata);
    } else if (tab === "buisness") {
      setProducts(buisnessdata);
    } else if (tab === "international") {
      setProducts(Internationaldata);
    } else if (tab === "marketing") { 
      setProducts(Marketingdata);
    } else if (tab === "mechanical") { 
      setProducts(Mechnicaldata);
    } else if (tab === "pharmaceutical") { 
      setProducts(Pharmaceuticaldata);
    } else if (tab === "psychology") { 
      setProducts(Psychologydata);
    } else {
      setProducts(data); // default to main data
    }
  }, [tab]);

  return (
    <>
      <div className="md:max-w-5xl md:mx-auto" id="univtable">
      <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h2
            data-aos="fade-right"
            className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
          >
            Ranking
          </h2>
          <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
          Discover top university rankings for insights into academic excellence and opportunities
          </p>
          <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
          NOTE: By default, all rankings are sorted by Guardian Ranking.                    
          </p>          
          <div>
          <a type="button" href="https://www.topuniversities.com/university-rankings" target="_blank" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">QS Ranking</a>
          <a type="button" href="https://www.theguardian.com/education/ng-interactive/2023/sep/09/the-guardian-university-guide-2024-the-rankings" target="_blank" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Guardian Ranking</a>
          </div>
        </div>
        <div className="p-6">
          <div className="text-lg font-bold text-center text-black border-b border-gray-200">
            <ul className="flex flex-wrap -mb-px">
              <li className="me-2 my-auto">Choose The Subject</li>
              <li className="me-2">
                <span
                  onClick={() => setSelectedTab("main")}
                  className={`${
                    selectedtab === "main"
                      ? "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:cursor-pointer hover:border-gray-300 "
                      : "inline-block p-4  border-b-2 hover:cursor-pointer text-blue-600 border-blue-600 rounded-t-lg active"
                  }`}
                >
                  <label htmlFor="underline_select" className="sr-only">
                    Underline select
                  </label>
                  <select
                    onClick={(e) => setTab(e.target.value)}
                    id="underline_select"
                    className="px-0 w-full text-sm text-gray-500   border-gray-200  focus:outline-none focus:ring-0 focus:border-gray-200"
                  >
                    <option selected>Main Table</option>
                    <option value="account">Accounting and Finance</option>
                    <option value="buisness">Business and management</option>
                    <option value="computer">
                      Computer science information
                    </option>
                    <option value="economics">Economics</option>
                    <option value="english">English</option>
                    <option value="international">
                      International relations
                    </option>
                    <option value="marketing">Marketing</option>
                    <option value="mechanical">Mechanical</option>
                    <option value="pharmaceutical">Pharmaceutical</option>
                    <option value="psychology">Psychology</option>
                  </select>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative justify-center mb-12 max-w-screen-lg mx-auto mt-8 overflow-x-auto shadow-md sm:rounded-lg">
  <div className="overflow-x-auto">
    <DataTable
      value={products}
      tableStyle={{ minWidth: "100%", justifyContent: "center" }}
    >
      <Column
        field="name"
        header="Name"
        sortable
        className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6"
      ></Column>
      <Column
        field="Qsranking"
        header="Qs Ranking"
        sortable
        className="w-1/6 sm:w-1/6 md:w-1/6 lg:w-1/12 xl:w-1/12"
      ></Column>
      <Column
        field="Guardianranking"
        header="Guardian Ranking"
        sortable
        className="w-1/6 sm:w-1/6 md:w-1/6 lg:w-1/12 xl:w-1/12"
      ></Column>
      <Column
        field="website"
        header="University Website"
        className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6"
        body={(rowData) => {
          return (
            <div className="flex justify-center sm:justify-start">
              <a
                href={rowData.website}
                target="_blank"
                className="text-blue-500 cursor-pointer hover:underline"
              >
                <button className="bg-blue-500 text-white font-medium rounded-lg text-sm px-5 py-2.5 mt-3">
                  Visit Website
                </button>
              </a>
            </div>
          );
        }}
      ></Column>
    </DataTable>
  </div>
</div>

    </>
  );
};

export default University;
