import React from "react";

const IeltsSection = () => {
  return (
    <>
      <section id="ielts">
        <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h2
            data-aos="fade-right"
            className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
          >
            <span className="text-black  bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                  IELTS
                  </span>
          </h2>
          <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
            Unlock your potential: Explore the IELTS, the gateway to countless
            academic opportunities.
          </p>
          <div>
            <a
              type="button"
              href="#"
              target="_blank"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Official Website
            </a>
          </div>
        </div>

        <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h2
            data-aos="fade-right"
            className="mb-3 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl"
          >
            Exam Pattern
          </h2>
          <p className="mb-3 text-base font-normal text-gray-500 lg:text-lg sm:px-16 lg:px-48">
            Unlock your potential: Explore the IELTS, the gateway to countless
            academic opportunities.
          </p>
          <div>
            <a
              type="button"
              href="#"
              target="_blank"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              General
            </a>
            <a
              type="button"
              href="#"
              target="_blank"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Academic
            </a>
          </div>

          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="container p-4 sm:p-4 border rounded-xl">
              {/* <h2 className="mb-4 text-xl font-semibold leading-tight">List : </h2> */}
              <div className="overflow-x-auto mx-auto">
                <table className="min-w-full text-sm mx-auto text-center">
                  <thead className="">
                    <tr className="">
                      <th className="p-3 text-lg">Name</th>
                      <th className="p-3 text-lg">Location</th>
                      <th className="p-3 text-lg">Link</th>
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
                            <p>location 1</p>
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
                            <p>location 1</p>
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
                            <p>location 1</p>
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
                            <p>location 1</p>
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
                            <p>location 1</p>
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
                <small className="text-[0.7rem]">* Sources</small>
              </div>
            </div>
          </div>
        </div>

          <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h2
              data-aos="fade-right"
              className="mb-3 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl"
            >
              Time Table
            </h2>
            <p className="mb-3 text-base font-normal text-gray-500 lg:text-lg sm:px-16 lg:px-48">
              Unlock your potential: Explore the IELTS, the gateway to countless
              academic opportunities.
            </p>

            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="container p-4 sm:p-4 border rounded-xl">
                {/* <h2 className="mb-4 text-xl font-semibold leading-tight">List : </h2> */}
                <div className="overflow-x-auto mx-auto">
                  <table className="min-w-full text-sm mx-auto text-center">
                    <thead className="">
                      <tr className="">
                        <th className="p-3 text-lg">Name</th>
                        <th className="p-3 text-lg">Location</th>
                        <th className="p-3 text-lg">Link</th>
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
                              <p>location 1</p>
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
                              <p>location 1</p>
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
                              <p>location 1</p>
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
                              <p>location 1</p>
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
                              <p>location 1</p>
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
                  <small className="text-[0.7rem]">* Sources</small>
                </div>
              </div>
            </div>
          </div>

          <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h2
              data-aos="fade-right"
              className="mb-3 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl"
            >
              Resources
            </h2>
            <p className="mb-3 text-base font-normal text-gray-500 lg:text-lg sm:px-16 lg:px-48">
              Unlock your potential: Explore the IELTS, the gateway to countless
              academic opportunities.
            </p>

            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="container p-4 sm:p-4 border rounded-xl">
                {/* <h2 className="mb-4 text-xl font-semibold leading-tight">List : </h2> */}
                <div className="overflow-x-auto mx-auto">
                  <table className="min-w-full text-sm mx-auto text-center">
                    <thead className="">
                      <tr className="">
                        <th className="p-3 text-lg">Name</th>
                        <th className="p-3 text-lg">Location</th>
                        <th className="p-3 text-lg">Link</th>
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
                              <p>location 1</p>
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
                              <p>location 1</p>
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
                              <p>location 1</p>
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
                              <p>location 1</p>
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
                              <p>location 1</p>
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
                  <small className="text-[0.7rem]">* Sources</small>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default IeltsSection;
