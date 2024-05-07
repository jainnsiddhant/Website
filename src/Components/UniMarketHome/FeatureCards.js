import React from "react";
import fees from "../../images/fees.jpg";
import nearby from "../../images/nearby.jpg";
import verify from "../../images/verify.jpg";

const FeatureCard = () => {
    const backgroundfees = `url(${fees})`;
    const backgroundnearby = `url(${nearby})`;
    const backgroundverify = `url(${verify})`;
  return (
    <>
    <section>
        <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 mt-5 w-[80%] mx-auto">

<div class="max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-center bg-no-repeat bg-gray-400 bg-blend-multiply" style={{ backgroundImage: backgroundfees }}>
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Free! No postage fee for 1st Listing</h5>
    </a>
    <p class="mb-3 font-normal text-gray-300">Fast Service .</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
        View more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>

<div class="max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-center bg-no-repeat bg-gray-400 bg-blend-multiply" style={{ backgroundImage: backgroundnearby }}>
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Find nearby items based on university.</h5>
    </a>
    <p class="mb-3 font-normal text-gray-300">Fast Service .</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
        View more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>

<div class="max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-center bg-no-repeat bg-gray-400 bg-blend-multiply" style={{ backgroundImage: backgroundverify }}>
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Verified student/seller profiles.</h5>
    </a>
    <p class="mb-3 font-normal text-gray-300">Fast Service .</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
        View more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>

        </div>
    </section>
    </>
  );
};

export default FeatureCard;

