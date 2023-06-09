import React from 'react'

const ListofBanks = () => {
  return (
    <>
      {/* BANKS TO OPEN TABLE */}
      <div id="bankstoopen" className="List Of Banks to Open  md:w-[80vw] mx-auto">
        <section className="rounded-xl">
          <h2 className="mb-4 text-center text-3xl tracking-tight font-bold text-gray-900">
            Banks to Open
          </h2>
          <p className="text-center md:text-left mt-3 mb-3">
            When it comes to banking, we understand the importance of having a reliable financial institution by your side.
            we highlight some of the leading banks in the UK. We provide a brief overview of each bank, including the services they offer and the benefits they provide. Whether you need assistance with opening a bank account, accessing online banking, or availing of other financial services, these banks have you covered
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

export default ListofBanks