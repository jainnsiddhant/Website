import React from "react";

const GreSection = () => {
  return (
    <>
      <section id="gre">
        <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h2
            data-aos="fade-right"
            className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
          >
                  <span className="text-black  bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                  GRE
                  </span>
          </h2>
          <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
            Unlock your potential: Explore the GRE, the gateway to countless
            academic opportunities.
          </p>
          <div>
            <a
              type="button"
              href="#"
              target="_blank"
              class="text-white bg-gradient-to-r from-red-600 to-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2"
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
          {/* <div>
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
          </div> */}

          

<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-20">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Accessories
                </th>
                <th scope="col" class="px-6 py-3">
                    Available
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Weight
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    3.0 lb.
                </td>
                <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 hover:underline ms-3">Remove</a>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
            
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    No
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    1.0 lb.
                </td>
                <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 hover:underline ms-3">Remove</a>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    No
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    0.2 lb.
                </td>
                <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 hover:underline ms-3">Remove</a>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Apple Watch
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Watches
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    No
                </td>
                <td class="px-6 py-4">
                    $199
                </td>
                <td class="px-6 py-4">
                    0.12 lb.
                </td>
                <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 hover:underline ms-3">Remove</a>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Apple iMac
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    PC
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    7.0 lb.
                </td>
                <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 hover:underline ms-3">Remove</a>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Apple AirPods
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    No
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    $399
                </td>
                <td class="px-6 py-4">
                    38 g
                </td>
                <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 hover:underline ms-3">Remove</a>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    iPad Pro
                </th>
                <td class="px-6 py-4">
                    Gold
                </td>
                <td class="px-6 py-4">
                    Tablet
                </td>
                <td class="px-6 py-4">
                    No
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    $699
                </td>
                <td class="px-6 py-4">
                    1.3 lb.
                </td>
                <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 hover:underline ms-3">Remove</a>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Magic Keyboard
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    453 g
                </td>
                <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 hover:underline ms-3">Remove</a>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Apple TV 4K
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    TV
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    No
                </td>
                <td class="px-6 py-4">
                    $179
                </td>
                <td class="px-6 py-4">
                    1.78 lb.
                </td>
                <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 hover:underline ms-3">Remove</a>
                </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    AirTag
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    No
                </td>
                <td class="px-6 py-4">
                    $29
                </td>
                <td class="px-6 py-4">
                    53 g
                </td>
                <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 hover:underline ms-3">Remove</a>
                </td>
            </tr>
        </tbody>
    </table>
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

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-20">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-white even:bg-gray-200 border-b border-gray-400">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-200 border-b border-gray-400">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-200 border-b border-gray-400">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-200 border-b border-gray-400">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Google Pixel Phone
                </th>
                <td class="px-6 py-4">
                    Gray
                </td>
                <td class="px-6 py-4">
                    Phone
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Apple Watch 5
                </th>
                <td class="px-6 py-4">
                    Red
                </td>
                <td class="px-6 py-4">
                    Wearables
                </td>
                <td class="px-6 py-4">
                    $999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
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

export default GreSection;
