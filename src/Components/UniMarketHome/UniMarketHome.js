import React from "react";
import FeatureCard from "./FeatureCards";
import Products from "./Products";

const UniMarketHome = () => {
  return (
    <>
<section class="bg-center bg-no-repeat mt-40">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-12 lg:py-30">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">UniMarketPlace</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">Connecting university students abroad with tailored marketing solutions to meet their diverse needs.</p>
        
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"> 
            <div class="grid grid-cols-8 gap-2 w-full max-w-[46rem]">
                <label for="npm-install" class="sr-only">Label</label>
                <input id="npm-install" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5" value="Search your item!" disabled readonly />
                <button data-copy-to-clipboard-target="npm-install" class="col-span-2 text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center items-center inline-flex justify-center">
                    <span id="default-message">Search</span>
                </button>
            </div>
        </div>

    </div>
</section>

<FeatureCard />
<Products />

    </>
  );
};

export default UniMarketHome;

