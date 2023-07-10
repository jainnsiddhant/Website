import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import { Ambasdoors } from './Ambasdorsdata'
const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="md:w-[80vw] mx-auto">
          <h5 className="text-3xl text-center mt-8 mb-8 font-bold tracking-tight text-gray-900">List of Universities with their Ambasdors</h5>
          <p className="text-center md:text-left">
            Our website features a list of university ambassadors from all over the world. These students are passionate about their schools and are committed to promoting them to prospective students. They are active leaders on campus and are always looking for new ways to connect with students and prospective students.
            As ambassadors, they represent their schools at a variety of events, including on-campus recruiting fairs, social media campaigns, and alumni events. They also work to promote their schools' academic programs, student life, and extracurricular activities.
            If you are interested in learning more about a particular university's ambassador program, please visit their website or contact their admissions office.
          </p>
        </div>
        <div className="flex mx-auto mt-12 mb-12 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-[80vw] max-w-[100vw]">
          <div className="flex flex-col justify-between p-4 leading-normal">
            <p className="mb-3 font-normal text-gray-700">List:</p>
            <div className="mb-12 mt-10">
              <ul className="">
                {
                  Ambasdoors.map((item, idx) => {
                    return (
                      <div className='mt-8 mb-8' key={idx}>
                        <li className="font-bold text-3xl">{item.UniversityName}</li>
                        <p className="mt-2 mb-2">
                          {item.details}
                        </p>
                        <div className="container mt-6 mb-6 p-4 sm:p-4 rounded-xl">
                          <div className="overflow-x-auto mx-auto">
                            <table className="min-w-full text-sm mx-auto text-right">
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
                                  <th className="p-3">Name</th>
                                  <th className="p-3">Connect</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                  item.list.map((item, idx) => {
                                    return (
                                      <tr key={idx} className="border-b border-opacity-20">
                                        <td className="p-3">
                                          <p>{item.name}</p>
                                        </td>
                                        <td className="p-3">
                                          <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400">
                                            <a href={item.link}>Connect</a>
                                          </span>
                                        </td>
                                      </tr>
                                    )
                                  })

                                }
                              </tbody>
                            </table>
                            <small className='text-[0.7rem]'>* All rakings are shown from official reports</small>
                          </div>
                        </div>
                      </div>
                    )
                  })
                } 
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog