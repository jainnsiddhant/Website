import React from "react";

const UniMarketForm = () => {
    return (
        <>
        <div className="mt-10">
        <h1 className="flex flex-col text-2xl font-bold items-center justify-center mb-5">LIST A PRODUCT</h1>
            

<form class="max-w-3xl mx-auto">
  <div class="mb-5">
    <label for="name" class="block mb-2 text-md font-medium text-gray-900">Product</label>
    <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Name of the product" required />
  </div>
  <div class="mb-5">
    <label for="category" class="block mb-2 text-md font-medium text-gray-900">Category</label>
    <input type="text" id="category" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Product Category" required />
  </div>
  <div class="mb-5">
<fieldset className="flex space-x-3">
  <legend class="sr-only">New or Used</legend>
  <div class="flex items-center mb-4">
    <input id="option-1" type="radio" name="new/used" value="New" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked />
    <label for="option-1" class="block ms-2  text-md font-medium text-gray-900">
      New
    </label>
  </div>

  <div class="flex items-center mb-4">
    <input id="option-2" type="radio" name="new/used" value="Used" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
    <label for="option-2" class="block ms-2 text-md font-medium text-gray-900">
      Used
    </label>
  </div>
</fieldset>
  </div>
  <div class="mb-5">
    <label for="price" class="block mb-2 text-md font-medium text-gray-900">Price</label>
    <input type="text" id="price" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Product Price" required />
  </div>
  <div class="mb-5">
  <label for="message" class="block mb-2 text-md font-medium text-gray-900">Description</label>
  <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Describe your product..."></textarea>
  </div>
  <div class="mb-5">
    <label for="email" class="block mb-2 text-md font-medium text-gray-900">Your email</label>
    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-5">
  <label for="website-admin" class="block mb-2 text-md font-medium text-gray-900">Username</label>
  <div class="flex">
    <span class="inline-flex items-center px-3 text-md text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md">
      <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
      </svg>
    </span>
    <input type="text" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5" placeholder="Bonnie Green" />
  </div>
  </div>
  <div class="mb-5">
  <label for="countries" class="block mb-2 text-md font-medium text-gray-900">Select your country</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
    <option>Select</option>
    <option>United Kingdom</option>
    {/* <option>United States</option>
    <option>Canada</option>
    <option>France</option>
    <option>Germany</option> */}
  </select>
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-md font-medium text-gray-900">Your password</label>
    <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
  </div>
  <div class="mb-5">
    <label for="repeat-password" class="block mb-2 text-md font-medium text-gray-900">Repeat password</label>
    <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
  </div>
  <div class="mb-5">
  <label class="block mb-2 text-md font-medium text-gray-900" for="user_avatar">Upload file</label>
  <input class="block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
  <div class="mt-1 text-md text-gray-500" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
  </div>
  <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
    </div>
    <label for="terms" class="ms-2 text-md font-medium text-gray-900">I agree with the <a href="#" class="text-blue-600 hover:underline">terms and conditions</a></label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center">Submit</button>
</form>

        </div>
        </>
    )
}

export default UniMarketForm;