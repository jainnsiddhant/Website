import React from "react";
import instructionlist from "../../images/instructionlist.jpg";
import one from "../../images/one.jpg"
import two from "../../images/two.jpg"
import three from "../../images/three.jpg"
import four from "../../images/four.jpg"
import five from "../../images/five.jpg"
import six from "../../images/six.jpg"
import seven from "../../images/seven.jpg"
import eight from "../../images/eight.jpg"
import nine from "../../images/nine.jpg"


const Instruction = () => {
  return (
    <section id="instructions">
      <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16 mt-5">
        <h2
          data-aos="fade-right"
          className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
        >
          Instructions
        </h2>
        <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
        Guidelines for Success: College Instructions
                    </p>
      </div>

      <div className="md:w-[90vw] flex-col mx-auto -mt-10 flex">
        <img
          src={instructionlist}
          alt="instructionlist"
          className="my-auto h-40 mx-auto mt-14 md:mt-0 w-40"
        />
        <section className="rounded-xl">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="container p-4 sm:p-4 border rounded-xl">
              <div className="overflow-x-auto mx-auto">
                <p>
                  <ol class="space-y-4 list-decimal list-inside">
                    <li className="text-md flex flex-row">
                      <img src={one} className="h-10 w-10" />
                      <div>Keep your documents safe and have multiple copies</div>
                    </li>
                    <li className="text-md flex flex-row">
                      <img src={two} className="h-10 w-10" />
                      <div>Buy SIM CARD - check from neighbours or seniors which sim
                      provider works best.</div>
                    </li>
                    <li className="text-md flex flex-row">
                      <img src={three} className="h-10 w-10" />
                      <div>Collect BRP</div>
                    </li>
                    <li className="text-md flex flex-row">
                      <img src={four} className="h-10 w-10" />
                      <div>Buy Duvet & Pillow and Quick meals as It will be difficult to cook and you need energy due to jetlag from Sainsbury, Asda, Co-op, Aldi, Morrisons, M&S Foodhall, Tesco etc.</div>
                    </li>
                    <li className="text-md flex flex-row">
                      <img src={five} className="h-10 w-10" />
                      <div>Get your Wifi sorted if living in university accomadation. If not:</div>
                    </li>
                    <li className="text-md flex flex-row">
                      <img src={six} className="h-10 w-10" />
                      <div>Get your wifi, Electrcity bill, water bill, Gas bill sorted. All the numbers and details are available online just remember your postcode is important.</div>
                    </li>
                    <li className="text-md flex flex-row">
                      <img src={seven} className="h-10 w-10" />
                      <div>Buy clothes specially jackets from Hollister(Best Quality below 80Pounds), Superdry, Primark(Cheapest), Columbia, and North Face etc</div>
                    </li>
                    <li className="text-md flex flex-row">
                      <img src={eight} className="h-10 w-10" />
                      <div>Winter boots from Amzon, Mountainwarehouse, Timberland, Northface , Decathelon etc.</div>
                    </li>
                    <li className="text-md flex flex-row">
                      <img src={nine} className="h-10 w-10" />
                      <div>Buy a Railcard and/or National express card(for domestic commute) as its cheaper and have deals in September/October.</div>
                    </li>
                    {/* <li className="text-md">
                      Get your Wifi sorted if living in university accomadation.
                      If not:
                    </li>
                    <li className="text-md">
                      Get your wifi, Electrcity bill, water bill, Gas bill
                      sorted. All the n<li className="text-md">
                      Keep your documents safe and have multiple copies
                    </li>
                    <li className="text-md">
                      Buy SIM CARD - check from neighbours or seniors which sim
                      provider works best.
                    </li>
                    <li className="text-md">Collect BRP</li>
                    <li className="text-md">
                      Buy Duvet & Pillow and Quick meals as It will be difficult
                      to cook and you need energy due to jetlag from Sainsbury,
                      Asda, Co-op, Aldiumbers and details are available online
                      just remember your postcode is important.
                    </li>
                    <li className="text-md">
                      Buy clothes specially jackets from Hollister(Best Quality
                      below 80Pounds), Superdry, Primark(Cheapest), Columbia,
                      and North Face etc
                    </li>
                    <li className="text-md">
                      Winter boots from Amzon, Mountainwarehouse, Timberland,
                      Northface , Decathelon etc.
                    </li>
                    <li className="text-md">
                      Buy a Railcard and/or National express card(for domestic
                      commute) as its cheaper and have deals in
                      September/October.
                    </li> */}
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Instruction;
