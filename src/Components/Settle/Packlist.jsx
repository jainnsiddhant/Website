import React from "react";
import { motion } from 'framer-motion';
import Bank from '../../images/Bank.jpg'
import hdfc from '../../images/hdfc.jpg'
import axis from '../../images/axis.jpg'
import sbi from '../../images/sbi.jpg'
import icici from '../../images/icici.jpg'
import luggage from "../../images/luggage.jpg"
import kitchen from "../../images/kitchen.jpg"
import electronics from "../../images/electronics.jpg"
import DownloadPDF1 from "../Download/DownloadPDF1";

const Packlist = () => {
    return(
        <section id="packlists">
                <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16 mt-5">
                    <h2 data-aos='fade-right' className='mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
                        Packing List
                    </h2>
                    {/* <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                        Recommendation only, consult banks before puchasing.
                    </p> */}
                </div>

                <div className="md:w-[80vw] mx-auto -mt-10">
          <section className="rounded-xl">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="container p-4 sm:p-4 border rounded-xl">
                <div className="overflow-x-auto mx-auto">
                    <p>
                    <ul class="space-y-4 list-disc list-inside">
                       <li className="text-lg">
                       Luggage
                            <ol class="pl-5 mt-2 space-y-1 list-decimal list-inside text-sm">
                                {/* <li>Large 75cms Luggage Bag (Durable Brand: Samsonite, Delsey)</li>
                                <li>Medium 55cms Luggage Bag (Durable Brand: Samsonite, Delsey)</li> */}
                                {/* <a href="#dwnld" className="text-blue-500 hover:underline">Download the file to see more ...</a> */}
                                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-4 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="w-full md:w-1/2 flex flex-col gap-x-3">
                             <li>Large 75cms Luggage Bag (Durable Brand: Samsonite, Delsey)</li>
                                <li>Medium 55cms Luggage Bag (Durable Brand: Samsonite, Delsey)</li>
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={luggage} alt="universityimage" className="h-20 w-20 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>
                           </ol>
                        </li>
                       <li className="text-lg">
                       Kitchen
                            <ol class="pl-5 mt-2 space-y-1 list-decimal list-inside text-sm">
                                {/* <li>Knife and Peeler (Set of 5)</li>
                                <li>Cooker 3 litre (Amazon Choice)</li>
                                <li>Induction and Gas compatible cookware (set of 3). <span className="text-blue-500">... more</span></li> */}
                                {/* <li>Non: stick cooking and serving spoons (3)</li>
                                <li>Individual Pan</li>
                                <li>Can/tin opener</li>
                                <li>Microwave friendly plate (3) and bowl set (3)</li>
                                <li>Spoon, Fork, Knife Se</li>
                                <li>Masalas Combo: (9)</li>
                                <li>Masalas: Monthly cooking essentials (recommended)</li>
                                <li>Roti Belan and Chakla</li>
                                <li>Oil Dispenser</li>
                                <li>Hand Blender</li>
                                <li>Sansi/pakkad/Pincers</li>
                                <li>Sandwich Maker</li>
                                <li>Coffee maker</li>
                                <li>Tea Stainer/Channi</li>
                                <a href="#dwnld" className="text-blue-500 hover:underline">Download the file to see more ...</a> */}
                                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-4 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="w-full md:w-1/2 flex flex-col gap-x-3">
                             <li>Knife and Peeler (Set of 5)</li>
                                <li>Cooker 3 litre (Amazon Choice)</li>
                                <li>Induction and Gas compatible cookware (set of 3). <span className="text-blue-500">... more</span></li>
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={kitchen} alt="universityimage" className="h-20 w-20 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>
                           </ol>
                        </li>
                        <li className="text-lg">
                        Electronics
                            <ol class="pl-5 mt-2 space-y-1 list-decimal list-inside text-sm">
                            {/* <li>UK adaptor</li>
                                <li>Extension Board</li>
                                <li>External Hard drive</li>
                                <li>USB Drive (HP) <span className="text-blue-500">... more</span> </li> */}
                                {/* <li>Power Bank</li>
                                <li>Door Jammer safety alarm</li>
                                <li> Shaving Tools for men</li>
                                <li>Digital luggage weighing scale</li>
                                <li>Thermometer</li>
                                <li>Batteries</li>
                                <li> Laptop + Phone + Chargers</li> */}
                                {/* <a href="#dwnld" className="text-blue-500 hover:underline">Download the complete file ...</a> */}
                                <div className="container mx-auto px-4">
                     <div className="flex flex-col mt-4 items-center">
                         <div className="flex flex-row w-full md:w-[80%] mt-2 mb-2">
                             <div className="w-full md:w-1/2 flex flex-col gap-x-3">
                             <li>Extension Board</li>
                                <li>External Hard drive</li>
                                <li>USB Drive (HP) <span className="text-blue-500">... more</span> </li>
                             </div>
                             <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
                                 <img src={electronics} alt="universityimage" className="h-20 w-20 rounded-full" />
                             </div>
                         </div>
                     </div>
               </div>
                           </ol>
                        </li>
                        {/* <li className="text-lg">
                        CLOTHES
                            <ul class="pl-5 mt-2 space-y-1 list-decimal list-inside text-sm">
                                <li>Hanging shelf organizer (recommended)</li>
                                <li>Multiple hanger</li>
                                <li> Gloves (-5 degree)</li>
                                <li>Socks underwear</li>
                                <li>3-piece Suit, Blazer</li>
                                <a href="#dwnld" className="text-blue-500 hover:underline">Download the file to see more ...</a>
                            </ul>
                        </li>
                        <li className="text-lg">
                        Stationary
                            <ul class="pl-5 mt-2 space-y-1 list-decimal list-inside text-sm">
                                <li>PEN, PENCIL, ETC.</li>
                                <li>Notebooks and Registers</li>
                                <li>Folders and scissor, tape etc</li>
                                <a href="#dwnld" className="text-blue-500 hover:underline">Download the file to see more ...</a>
                            </ul>
                        </li>
                        <li className="text-lg">
                        TOILETRIES
                            <ul class="pl-5 mt-2 space-y-1 list-decimal list-inside text-sm">
                                <li>Shampoo conditioner soap toothpaste and brush.</li>
                                <li>Dishwasher sponge detergent</li>
                                <li>Sewing kit</li>
                                <li>Oil, cream, Towel, Napkin</li>
                                <a href="#dwnld" className="text-blue-500 hover:underline">Download the file to see more ...</a>
                            </ul>
                        </li>
                        <li className="text-lg">
                        Others
                            <ul class="pl-5 mt-2 space-y-1 list-decimal list-inside text-sm">
                                <li>Swiss knife</li>
                                <li>Nail cutter</li>
                                <li>Bag locks</li>
                                <li>Umbrella</li>
                                <li>Pillow bedsheet quilt (With Covers)</li>
                                <a href="#dwnld" className="text-blue-500 hover:underline">Download the file to see more ...</a>
                            </ul>
                        </li>
                        <li className="text-lg">
                        Medicine *(Common Medicines not Recommended – Consult Doctor before packing)
                            <ul class="pl-5 mt-2 space-y-1 list-decimal list-inside text-sm">
                                <li>Fever, Cold, Headache, Body Pain: Crocin, Paracetamol, Combi flam, Disprin</li>
                                <li>Vomiting: Avomine, vomikind</li>
                                <li>Indigestion, Gastric Problem: Eno</li>
                                <li>Skin Infection: Antifungal Cream, Avil25, Gramocef</li>
                                <li>Common Cold: Vicks Vaporrub, Cold act</li>
                                <li>Stomach Pain: Cyclopam</li>
                                <li>Nasal Spray: Otrivian</li>
                                <li>Diarrhea: LopaMide</li>
                                <li>Teeth Pain: Dentone</li>
                                <a href="#dwnld" className="text-blue-500 hover:underline">Download the file to see more ...</a>
                            </ul>
                        </li> */}
                    </ul>
                    </p>
                </div>
              </div>
            {/* <div className="w-[80%] mx-auto">
                                <button 
                                    id="dwnld"
                                    type="button" 
                                    className="bg-blue-500 text-white font-medium rounded-lg text-sm px-5 py-2.5 w-full mt-3 flex justify-center" 
                                    onClick={() => window.open('www.google.com', '_blank')}
                                    >
                                    Download File
                                </button>
            </div> */}
            <motion.div
                  whileHover={
                    {
                      scale: 1.25
                    }
                  }>
            <DownloadPDF1 />
            </motion.div>
            </div>
          </section>
        </div>

                
            </section>
    )
}

export default Packlist