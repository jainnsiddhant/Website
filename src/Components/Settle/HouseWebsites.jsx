import React from "react";
import Bank from '../../images/Bank.jpg'
import hdfc from '../../images/hdfc.jpg'
import axis from '../../images/axis.jpg'
import sbi from '../../images/sbi.jpg'
import icici from '../../images/icici.jpg'

const HousingWebsites = () => {
    return(
        <section id="housingwebsites">
                <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16 mt-5">
                    <h2 data-aos='fade-right' className='mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
                        Housing Websites
                    </h2>
                    <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                        To find Property or Temporary accommodation
                    </p>
                </div>

                
                <div className="md:w-[80vw] mx-auto -mt-10">
          <section className="rounded-xl">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="container p-4 sm:p-4 border rounded-xl">
                <div className="overflow-x-auto mx-auto">
                    <p>
                    <ul class="space-y-4 list-disc list-inside">
                       <li className="text-lg">
                       Right Move
                            <ul class="pl-5 mt-2 space-y-1 list-inside text-sm">
                                <li><a href="https://www.rightmove.co.uk/" target="_blank">https://www.rightmove.co.uk/</a></li>
                           </ul>
                        </li>
                       <li className="text-lg">
                       SpareRoom
                            <ul class="pl-5 mt-2 space-y-1 list-inside text-sm">
                                <li><a href="https://www.spareroom.co.uk/" target="_blank">https://www.spareroom.co.uk/</a></li>
                           </ul>
                        </li>
                       <li className="text-lg">
                       Zoopla
                            <ul class="pl-5 mt-2 space-y-1 list-inside text-sm">
                                <li><a href="https://www.zoopla.co.uk/" target="_blank">https://www.zoopla.co.uk/</a></li>
                           </ul>
                        </li>
                       <li className="text-lg">
                       Unihomes
                            <ul class="pl-5 mt-2 space-y-1 list-inside text-sm">
                                <li><a href="https://www.unihomes.co.uk/" target="_blank">https://www.unihomes.co.uk/</a></li>
                           </ul>
                        </li>
                       <li className="text-lg">
                       Amber student
                            <ul class="pl-5 mt-2 space-y-1 list-inside text-sm">
                                <li><a href="https://www.amberstudent.co.uk/" target="_blank">https://www.amberstudent.co.uk/</a></li>
                           </ul>
                        </li>
                    </ul>
                    </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        
            </section>
    )
}

export default HousingWebsites