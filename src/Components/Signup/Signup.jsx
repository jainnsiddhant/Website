import React, { useState } from "react";
import logo from '../../images/logo.jpg';
import { FcGoogle } from "react-icons/fc";
import Axios from "axios"; 

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post('http://localhost:8080/api/register', {
        firstName,
        lastName,
        password,
        email
      });

      if (response.status === 200 || response.status === 201) {
        window.location.href = '/unimarket/profile';
      } else {
        console.error('Signup failed:', response.data.error);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="justify-left flex items-center" style={{ display: 'flex' }}>
        <img src={logo} width={50} height={50} className="rounded" style={{ position: 'absolute', top: 10, left: 10 }} />
        <h2 style={{ position: 'absolute', top: 20, left: 80 }} className="text-xl font-bold">FindMyUni</h2>
      </div>
      <h1 className="text-3xl font-bold mb-6">UniMarket Welcomes You!</h1>
      <p className="mb-5">If you already have an account kindly <a href="/unimarket/login" className="text-blue-500">login</a></p>
      <form className="flex flex-col w-full max-w-sm " onSubmit={handleSubmit}>
        {/* First name input */}
        <input
          className="mb-4 p-2 border border-gray-300 rounded-full"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          autoComplete="off"
          required
        />
        {/* Last name input */}
        <input
          className="mb-4 p-2 border border-gray-300 rounded-full"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          autoComplete="off"
          required
        />
        {/* Email input */}
        <input
          className="mb-4 p-2 border border-gray-300 rounded-full"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
          required
        />
        {/* Password input */}
        <input
          className="mb-4 p-2 border border-gray-300 rounded-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
          required
        />
        {/* Submit button */}
        <button
          className="bg-blue-500 hover:bg-black text-white font-bold py-2 px-4 rounded-full"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      {/* Continue with Google button */}
      <div className="flex justify-center m-5">
        <div className="flex items-center">
          <button className="flex bg-blue-600 text-white font-bold py-2 px-6 rounded-full justify-between" type="button">
            <FcGoogle className="mr-2 mt-1" /> <p>Continue with Google</p>
          </button>
        </div>
      </div>
      {/* Stay signed in checkbox */}
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <input type="checkbox" id="staySignedIn" className="mr-2" />
          <label htmlFor="staySignedIn">Stay signed in</label>
        </div>
        <p className="ml-auto">Using a public or shared device?</p>
        <p className="ml-auto">Deselect to protect your account</p>
      </div>
    </div>
  );
};

export default Signup;
