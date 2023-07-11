import React from 'react'

const ListofForexCard = () => {
  return (
    <>
      {/* LIST OF FOREX CARDS TABLE */}
      <div id="forexcards" className="List of Forex Cards  md:w-[80vw] mx-auto">
        <section className="rounded-xl">
          <h1 className='text-3xl tracking-tight font-bold text-center mt-12 mb-4'>Forex Cards</h1>
          <p className="text-center md:text-left mt-3 mb-3">
            A Forex card, also known as a travel card or prepaid card, allows you to load multiple currencies onto a single card. This card can be used for making purchases, withdrawing cash from ATMs, and conducting online transactions.  <br />
            Forex cards enable you to load funds in your home currency and convert them to the local currency at competitive exchange rates. <br />
            Forex cards are widely accepted and can be used like a regular debit or credit card at various merchants and ATMs. They are equipped with PINs and offer enhanced security features, providing peace of mind during your transactionsForex cards are easily reloadable, either online or at designated outlets, ensuring that you have access to funds whenever needed.
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
                      <th className="p-3">Location</th>
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
                <small className='text-[0.7rem]'>* All rakings are shown from official reports</small>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ListofForexCard