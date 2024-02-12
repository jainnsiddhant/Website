import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import NewFooter from "../NewFooter/NewFooter";
import data from "./data";
const University = () => {
  const [selectedtab, setselectedtab] = useState(1);
  useEffect(() => {
    data.sort((a, b) => {
      // First, compare Guardian rankings
      if (a.Guardianranking !== b.Guardianranking) {
        return a.Guardianranking - b.Guardianranking;
      }
      // If Guardian rankings are the same, compare QS rankings
      return a.Qsranking - b.Qsranking;
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="md:max-w-5xl md:mx-auto ">
        <h1 className="font-bold text-xl p-4">Explore University</h1>
        <div className="p-6">
          <div className="text-lg font-bold text-center text-black border-b border-gray-200">
            <ul className="flex flex-wrap -mb-px">
              <li className="me-2">
                <span
                  onClick={() => {
                    setselectedtab(1);
                  }}
                  className={`${
                    selectedtab
                      ? "inline-block p-4  border-b-2 hover:cursor-pointer text-blue-600 border-blue-600 rounded-t-lg active"
                      : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:cursor-pointer hover:border-gray-300 "
                  }`}
                >
                  All
                </span>
              </li>
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
                  Category
                </span>
              </li>
            </ul>
          </div>
        </div>
        <ul
          className={`${
            !selectedtab
              ? "flex space-y-2 flex-wrap text-sm font-bold text-center text-gray-500"
              : "hidden"
          }`}
        >
          <li className="me-2 mt-2">
            <span className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 border-[1px] ">
              Accounting
            </span>
          </li>
          <li className="me-2">
            <span className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 border-[1px] ">
              Finance
            </span>
          </li>
          <li className="me-2">
            <span className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 border-[1px] ">
              Business and management
            </span>
          </li>
          <li className="me-2">
            <span className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 border-[1px] ">
              Computer science information
            </span>
          </li>
          <li className="me-2">
            <span className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 border-[1px]">
              Economics
            </span>
          </li>
          <li className="me-2">
            <span className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 border-[1px] ">
              English
            </span>
          </li>
          <li className="me-2">
            <span className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 border-[1px] ">
              International relations
            </span>
          </li>
          <li className="me-2">
            <span className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 border-[1px] ">
              Marketing
            </span>
          </li>
          <li className="me-2">
            <span className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 border-[1px] ">
              Mechanical
            </span>
          </li>
          <li className="me-2">
            <span className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 border-[1px] ">
              Pharmaceutical
            </span>
          </li>
          <li className="me-2">
            <span className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 border-[1px] ">
              Psychology
            </span>
          </li>
        </ul>
      </div>
      <div className="relative mb-12 max-w-5xl mx-auto mt-8 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
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
        </table>
      </div>
      <NewFooter />
    </>
  );
};
export default University;
