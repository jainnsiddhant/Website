import React from "react";
import wise from '../../images/wise.jpg'
import revolut from '../../images/revolut.jpg'
import monzo from '../../images/monzo.jpg'
import chase from '../../images/chase.jpg'

const BanksToOpen = () => {
    return(
        <section id="bankstoopen">
                <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16 mt-5">
                    <h2 data-aos='fade-right' className='mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
                        Banks To Open
                    </h2>
                    <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                        Online Banks/Wallets - other than Major banks.
                    </p>
                </div>

                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-4 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">Revolut</h1>
                                 <a target="_blank" href="https://www.revolut.com/" className="text-sm mt-3">https://www.revolut.com/</a>
                                 {/* <button type="button" className="bg-slate-200 hover:bg-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center">Read More</button> */}
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={revolut} alt="universityimage" className="h-20 w-20 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>
                
                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-4 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">Wise</h1>
                                 <a target="_blank" href="https://wise.com/" className="text-sm mt-3">https://wise.com/</a>
                                 {/* <button type="button" className="bg-slate-200 hover:bg-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center">Read More</button> */}
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={wise} alt="universityimage" className="h-24 w-24 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>

                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-4 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">Monzo</h1>
                                 <a target="_blank" href="https://monzo.com/" className="text-sm mt-3">https://monzo.com/</a>
                                 {/* <button type="button" className="bg-slate-200 hover:bg-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center">Read More</button> */}
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={monzo} alt="universityimage" className="h-24 w-24 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>
                
                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-0 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">Chase</h1>
                                 <a target="_blank" href="https://www.chase.com/" className="text-sm mt-3">https://www.chase.com/</a>
                                 {/* <button type="button" className="bg-slate-200 hover:bg-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center">Read More</button> */}
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={chase} alt="universityimage" className="h-24 w-24 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>


            </section>
    )
}

export default BanksToOpen