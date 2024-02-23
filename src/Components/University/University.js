import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import NewFooter from "../NewFooter/NewFooter";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import data from "./data";
import accountsdata from "./Accounts_finnace";
import computerdata from "./Computer"; 
import englishdata from "./English"
const University = () => {
  const [products, setProducts] = useState(data);
  const [selectedtab, setselectedtab] = useState(1);
  const [tab, settab] = useState("");
  useEffect(() => {
    setProducts(data);
    if (tab == "account") {
      setProducts(accountsdata);
    } else if (tab == "computer") {
      setProducts(computerdata);
    } else if (tab == "english") {
      setProducts(englishdata);
    }
  }, [selectedtab, tab]);
  return (
    <>
      <Navbar /> 
      
      <div className="md:max-w-5xl md:mx-auto "> 
        <h1 className="font-bold text-xl p-4">Explore University</h1>
        <div className="p-6"> 
          <div className="text-lg font-bold text-center text-black border-b border-gray-200">
            <ul className="flex flex-wrap -mb-px">
              <li className="me-2 my-auto">Choose The Subject</li>
              <li className="me-2">
                <span
                  onClick={() => {
                    setselectedtab(0);
                  }}
                  className={`${
                    selectedtab
                      ? "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:cursor-pointer hover:border-gray-300 "
                      : "inline-block p-4  border-b-2 hover:cursor-pointer text-blue-600 border-blue-600 rounded-t-lg active"
                  }`}
                >
                  <label for="underline_select" class="sr-only">
                    Underline select
                  </label>
                  <select
                    onClick={(e) => {
                      settab(e.target.value);
                    }}
                    id="underline_select"
                    class="px-0 w-full text-sm text-gray-500   border-gray-200  focus:outline-none focus:ring-0 focus:border-gray-200"
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
      <div className="relative mb-12 max-w-5xl mx-auto mt-8 overflow-x-auto shadow-md sm:rounded-lg">
        {/* <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Qs Rank
              </th>
              <th scope="col" className="px-6 py-3">
                Guardian Rank
              </th>
              <th scope="col" className="px-6 py-3">
                View
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {item.name}
                  </th>
                  <td className="px-6 py-4">{item.Qsranking}</td>
                  <td className="px-6 py-4">{item.Guardianranking}</td>
                  <td className="px-6 py-4">
                    <a
                      target="_blank"
                      href={`${item.website}`}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table> */}

        <div className="card">
          <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
            <Column
              field="name"
              header="Name"
              sortable
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="Qsranking"
              header="Qs Ranking"
              sortable
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="Guardianranking"
              header="Guardian Ranking"
              sortable
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="website"
              header="View"
              style={{ width: "25%" }}
              body={(rowData) => {
                return (
                  <div
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <a
                      style={{
                        color: "#3F00FF",
                        textDecoration: "underline",
                        cursor: "pointer",
                        "&:hover": {
                          color: "black",
                        },
                      }}
                      href={rowData.website}
                    >
                      {"View"}
                    </a>
                  </div>
                );
              }}
            ></Column>
            ;
          </DataTable>
        </div>
      </div>
      <NewFooter />
    </>
  );
};
export default University;
