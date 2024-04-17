import React, { useState } from 'react';

const IeltsSection = () => {

    const [showGeneralTable, setShowGeneralTable] = useState(true);
    const [showAcademicTable, setShowAcademicTable] = useState(false);
  
    const handleGeneralButtonClick = () => {
      setShowGeneralTable(true);
      setShowAcademicTable(false);
    };
  
    const handleAcademicButtonClick = () => {
      setShowGeneralTable(false);
      setShowAcademicTable(true);
    };
  
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
            IELTS Exam Pattern
          </h2>
          <p className="mb-3 text-base font-normal text-gray-500 lg:text-lg sm:px-16 lg:px-48">
            Unlock your potential: Explore the IELTS, the gateway to countless
            academic opportunities.
          </p>
          <div className="mb-5">
            <button
              onClick={handleGeneralButtonClick}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              General
            </button>
            <button
              onClick={handleAcademicButtonClick}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Academic
            </button>
          </div>

<div className='flex justify-center'>
          {showGeneralTable && (
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-20">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Section
                </th>
                <th scope="col" class="px-6 py-3">
                    Duration
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Listening
                </th>
                <td class="px-6 py-4">
                   30 minutes
                </td>
                
                <td class="px-6 py-4">
                <ul style={{ listStyleType: 'circle' }}>
       <li>Four recorded texts including monologues and conversations by native speakers.</li>
       <li>Series of questions assessing comprehension of main ideas, detailed information, opinions, and attitudes.</li>
       <li>Variety of voices and accents.</li>
   </ul>
                </td>
                
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
            
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Reading 
                </th>
                <td class="px-6 py-4">
                    60 minutes
                </td>
                <td class="px-6 py-4">
                <ul style={{ listStyleType: 'circle' }}>
       <li>Extracts from books, magazines, newspapers, notices, advertisements, company handbooks, and guidelines.</li>
       <li>Comprehension of materials encountered in daily English-speaking environment.</li>
   </ul>
                </td>
                
                
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Writing
                </th>
                <td class="px-6 py-4">
                    60 minutes
                </td>
                <td class="px-6 py-4">
                <ul style={{ listStyleType: 'circle' }}>
       <li>Task 1: Write a letter requesting information or explaining a situation.</li>
       <li>Task 2: Write an essay responding to a point of view, argument, or problem.</li>
       <li>Formal or semi-formal tone.</li>
   </ul>
                </td>
                
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                   Speaking
                </th>
                <td class="px-6 py-4">
                    11-14 minutes
                </td>
                <td class="px-6 py-4">
                <ul style={{ listStyleType: 'circle' }}>
       <li>Part 1: Answer general questions about yourself and familiar topics.</li>
       <li>Part 2: Talk about a particular topic for up to two minutes.</li>
       <li>Part 3: Discuss more abstract issues and ideas connected to the topic in Part 2.</li>
   </ul>
                </td>
                
            </tr>
            
        </tbody>
    </table>
</div>
          )}</div>

<div className='flex justify-center'>
          {showAcademicTable && (
<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-20">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Section
                </th>
                <th scope="col" class="px-6 py-3">
                    Duration
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Listening
                </th>
                <td class="px-6 py-4">
                    30 minutes
                </td>
                <td class="px-6 py-4">
                <ul style={{ listStyleType: 'circle' }}>
       <li>Four recorded texts including monologues and conversations by native speakers.</li>
       <li>Series of questions assessing comprehension of main ideas, detailed information, opinions, and attitudes.</li>
       <li>Variety of voices and accents.</li>
   </ul>
                </td>
                
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
            
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Reading
                </th>
                <td class="px-6 py-4">
                    60 minutes
                </td>
                <td class="px-6 py-4">
                <ul style={{ listStyleType: 'circle' }}>
       <li>Three lengthy texts covering diverse topics sourced from books, journals, magazines, and newspapers.</li>
       <li>Comprehension of general idea, main concepts, details, logical arguments, opinions, attitudes, and writer's purpose.</li>
   </ul>
                </td>
                
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Writing
                </th>
                <td class="px-6 py-4">
                    60 minutes
                </td>
                <td class="px-6 py-4">
                <ul style={{ listStyleType: 'circle' }}>
       <li>Task 1: Describe, summarize, or explain information from a graph, table, chart, or diagram.</li>
       <li>Task 2: Write an essay responding to a point of view, argument, or problem.</li>
       <li>Formal writing style.</li>
   </ul>
                </td>
                
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
                
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Speaking
                </th>
                <td class="px-6 py-4">
                    11-14 minutes
                </td>
                <td class="px-6 py-4">
                <ul style={{ listStyleType: 'circle' }}>
       <li>Part 1: Answer general questions about yourself and familiar topics.</li>
       <li>Part 2: Talk about a particular topic for up to two minutes.</li>
       <li>Part 3: Discuss more abstract issues and ideas connected to the topic in Part 2.</li>
   </ul>
                </td>
                
            </tr>
            
            
        </tbody>
    </table>
</div>
          )}</div>
          
</div>

          <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h2
              data-aos="fade-right"
              className="mb-3 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl"
            >
              IELTS Time Table
            </h2>
            <p className="mb-3 text-base font-normal text-gray-500 lg:text-lg sm:px-16 lg:px-48">
              Unlock your potential: Explore the IELTS, the gateway to countless
              academic opportunities.
            </p>

            
<div className='flex justify-center '>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-20">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Week
                </th>
                <th scope="col" class="px-6 py-3">
                    Focus Area
                </th>
                <th scope="col" class="px-6 py-3">
                    Activities
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-white even:bg-gray-200 border-b border-gray-400">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    1
                </th>
                <td class="px-6 py-4">
                Listening
                </td>
                <td class="px-6 py-4">
                <ul class="list-disc ml-4">
                    <li>Familiarize with IELTS format</li>
                    <li>Take a practice test to assess current level</li>
                    <li>Practice listening to different English accents and sources</li>
                </ul>
                </td>
                
            </tr>
            <tr class="odd:bg-white even:bg-gray-200 border-b border-gray-400">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    2
                </th>
                <td class="px-6 py-4">
                    Reading
                </td>
                <td class="px-6 py-4">
                <ul class="list-disc ml-4">
                    <li>Improve reading speed and comprehension</li>
                    <li>Practice reading different types of texts</li>
                    <li>Work on understanding question types</li>
                </ul>
                </td>
                
            </tr>
            <tr class="odd:bg-white even:bg-gray-200 border-b border-gray-400">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    3
                </th>
                <td class="px-6 py-4">
                Writing
                </td>
                <td class="px-6 py-4">
                <ul class="list-disc ml-4">
                    <li>Focus on task 1 and task 2 formats</li>
                    <li>Practice writing essays and reports</li>
                    <li>Get feedback on writing samples</li>
                </ul>
                </td>
                
            </tr>
            <tr class="odd:bg-white even:bg-gray-200 border-b border-gray-400">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    4
                </th>
                <td class="px-6 py-4">
                Speaking
                </td>
                <td class="px-6 py-4">
                <ul class="list-disc ml-4">
                    <li>Practice speaking on a variety of topics</li>
                    <li>Record and listen to your speaking</li>
                    <li>Engage in English conversations</li>
                </ul>
                </td>
                
            </tr>
            
        </tbody>
    </table>
</div>
</div></div>

          <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h2
              data-aos="fade-right"
              className="mb-3 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl"
            >
              IELTS Resources
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