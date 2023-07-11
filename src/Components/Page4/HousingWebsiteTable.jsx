import React from 'react'

const HousingWebsiteTable = () => {
  return (
    <>
      {/* HOUSING WEBSITES TABLE */}
      <div id="housingwebsite" className="Housing Websites  md:w-[80vw] mx-auto">
        <section className="rounded-xl">
          <h2 className="mb-4 text-center text-3xl tracking-tight font-bold text-gray-900">
            Housing Websites List
          </h2>
          <p className="text-center md:text-left mt-3 mb-3">
          We provide a curated list of housing societies that cater to different preferences and needs. These societies offer a range of amenities and facilities to make your stay comfortable and enjoyable. Whether you're looking for a vibrant community, modern apartments, or a peaceful neighborhood, our list has something for everyone. Each housing society is accompanied by a detailed description and key features to help you make an informed decision.
          </p>
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="mb-8 lg:mb-16">
            </div>
            <div className="container p-4 sm:p-4 border rounded-xl">
              <h2 className="mb-4 text-xl font-semibold leading-tight">List : </h2>
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
          </div>
        </section>
      </div>
    </>
  )
}

export default HousingWebsiteTable