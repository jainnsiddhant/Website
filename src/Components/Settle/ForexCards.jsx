import React from "react";
import hdfc from '../../images/hdfc.jpg'
import axis from '../../images/axis.jpg'
import sbi from '../../images/sbi.jpg'
import icici from '../../images/icici.jpg'

const ForexCard = () => {
    return(
        <section id="forexcards">
                <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16 mt-5">
                    <h2 data-aos='fade-right' className='mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
                        Forex Cards
                    </h2>
                    <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                        Recommendation only, consult banks before puchasing.
                    </p>
                </div>

                
                
                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-4 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">HDFC Multi-Currency Forex Plus Card</h1>
                                 <p className="text-sm mt-3">A comprehensive guide to top 10 universities in the world.</p>
                                 {/* <button type="button" className="bg-slate-200 hover:bg-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center">Read More</button> */}
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={hdfc} alt="universityimage" className="h-24 w-24 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>

                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-4 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">Axis Multi-Currency Forex Card</h1>
                                 <p className="text-sm mt-3">A comprehensive guide to top 10 universities in the world.</p>
                                 {/* <button type="button" className="bg-slate-200 hover:bg-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center">Read More</button> */}
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={axis} alt="universityimage" className="h-24 w-24 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>


                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-4 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">ICICI Multi-Currency Travel Card</h1>
                                 <p className="text-sm mt-3">A comprehensive guide to top 10 universities in the world.</p>
                                 {/* <button type="button" className="bg-slate-200 hover:bg-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center">Read More</button> */}
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={icici} alt="universityimage" className="h-24 w-24 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>
                
                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-0 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="text-center w-full md:w-1/2 flex flex-col gap-x-3">
                                <h1 className="text-md font-bold">State Bank Of India Mutli-Currency Card</h1>
                                 <p className="text-sm mt-3">A comprehensive guide to top 10 universities in the world.</p>
                                 {/* <button type="button" className="bg-slate-200 hover:bg-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 w-40 mt-3 flex justify-center">Read More</button> */}
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={sbi} alt="universityimage" className="h-24 w-24 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>


            </section>
    )
}

export default ForexCard