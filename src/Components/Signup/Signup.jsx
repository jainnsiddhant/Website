import React, { useState } from "react";
import logo from '../../images/logo.jpg'
// import google from '../../images/google.webp'
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // TODO: Submit the form data to your backend
  };

  return (
    
    <div className="flex flex-col items-center justify-center h-screen">
    <div className="justify-left flex items-center" style={{ display: 'flex' }}>
      <img src={logo} width={50} height={50} className="rounded" style={{ position: 'absolute', top: 10, left: 10 }} />
      <h2 style={{ position: 'absolute', top: 20, left: 80 }} className="text-xl font-bold">FindMyUni</h2>
    </div>
    <h1 className="text-3xl font-bold mb-6">UniMarket Welcomes You!</h1>
    <p className="mb-5">If you already have an account kindly <a href="/login" className="text-blue-500">login</a></p>
    <form className="flex flex-col w-full max-w-sm " onSubmit={handleSubmit}>
      <input
        className="mb-4 p-2 border border-gray-300 rounded-full"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="mb-4 p-2 border border-gray-300 rounded-full"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="mb-4 p-2 border border-gray-300 rounded-full"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        type="submit"
      >
        Sign Up
      </button>
    </form>
  
    <p className="mt-5 text-xl items-center">OR</p>
    <div className="flex justify-center m-5">
      <div class="flex items-center">
        <button className="flex bg-blue-600 text-white font-bold py-2 px-6 rounded-full justify-between" type="submit">
          <FcGoogle className="mr-2 mt-1" /> <p>Continue with Google</p>
        </button>
      </div>
    </div>
  
    <div className="flex flex-col items-center">
        <div className="flex items-center">
      <input type="checkbox" id="staySignedIn" className="mr-2" />
      <label for="staySignedIn">Stay signed in</label></div>
      <p className="ml-auto">Using a public or shared device?</p>
      <p className="ml-auto">Deselect to protect your account</p>
    </div>
  </div>
  
    
  );
};

export default Signup;