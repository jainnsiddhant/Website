import React from 'react';
import "./Table.css"
import {AiOutlineSearch} from 'react-icons/ai'
const Table = () => {
  return (
    <>
    
<div id="resume_table" class="relative overflow-x-auto table w-[90%] mx-auto">
<h1 className='text-7xl text-center specialfont'>Enhance {/* <em className='mytext'>your</em> */}
 Resume<br /></h1>
    </div>
              <div className="container p-4 sm:p-4 border rounded-xl">
                <div className="overflow-x-auto mx-auto">
                  <table className="min-w-full text-sm mx-auto text-center">
                    <colgroup>
                      <col />
                      <col />
                      <col />
                      <col />
                      <col />
                      <col className="w-24" />
                    </colgroup>
                    <thead className="">
                      <tr className="">
                        <th className="p-3">Product name</th>
                        <th className="p-3">Color</th>
                        <th className="p-3">Category</th>
                        <th className="p-3">Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        <>
                            <tr className="border-b border-opacity-20">
                              <td className="p-3">
                                <p>name 1</p>
                              </td>
                              <td className="p-3">
                                <p>color 1</p>
                              </td>
                              <td className="p-3">
                                <p>category 1</p>
                              </td>
                              <td className="p-3">
                                <span className="px-3 py-1 text-blue-700 font-semibold rounded-md dark:bg-violet-400">
                                  <a href="#">View</a>
                                </span>
                              </td>
                            </tr>
                            <tr className="border-b border-opacity-20">
                              <td className="p-3">
                                <p>name 1</p>
                              </td>
                              <td className="p-3">
                                <p>color 1</p>
                              </td>
                              <td className="p-3">
                                <p>category 1</p>
                              </td>
                              <td className="p-3">
                                <span className="px-3 py-1 text-blue-700 font-semibold rounded-md dark:bg-violet-400">
                                  <a href="#">View</a>
                                </span>
                              </td>
                            </tr>
                            <tr className="border-b border-opacity-20">
                              <td className="p-3">
                                <p>name 1</p>
                              </td>
                              <td className="p-3">
                                <p>color 1</p>
                              </td>
                              <td className="p-3">
                                <p>category 1</p>
                              </td>
                              <td className="p-3">
                                <span className="px-3 py-1 text-blue-700 font-semibold rounded-md dark:bg-violet-400">
                                  <a href="#">View</a>
                                </span>
                              </td>
                            </tr>
                        </>
                      }
                    </tbody>
                  </table>
                  <small className='text-[0.7rem]'>* All rakings are shown from official reports</small>
                </div>
</div>

    </>
  );
};

export default Table;




