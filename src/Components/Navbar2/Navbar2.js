import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import './Navbar2.css';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    const location = useLocation();
    const [mobilestyle, setmobilestyle] = useState("mobile-menu hidden text-center md:hidden flex flex-col bg-black text-white rounded-2xl p-6 z-30");
    const [toogle, settoogle] = useState(false);
    
    useEffect(() => {
        if (window.innerWidth <= 768 && toogle === true) {
            setmobilestyle("mobile-menu flex flex-col text-center md:hidden text-white rounded-2xl p-6");
        } else {
            setmobilestyle("mobile-menu flex flex-col text-center hidden md:hidden text-white rounded-2xl p-6");
        }
    }, [window.innerWidth, toogle]);
    return (
        <>
            <nav className="p-6 fixed top-0 w-full bg-white shadow-lg">
                <div className="max-w-7xl mx-auto px-2">
                    <div className="flex justify-between">
                        <div className="flex space-x-[1rem]">
                            <div>
                                <Link
                                    to={"/"}
                                    className="flex items-center py-5 px-2 text-black"
                                >
                                    <span className="font-bold text-3xl navfont">
                                    <button type="button" class="text-white bg-gradient-to-r from-green-500 to-blue-400 focus:outline-none focus:ring-4  font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2 flex my-auto border-black border-2">
                                        <div className='my-auto'>
                                        <FaArrowLeft />
                                        </div>
                                        <div>
                                            Back to FindMyUni
                                        </div>
                                    </button>
                                    </span>
                                </Link>
                            </div>
                            {/* primary nav */}
                            <div className="hidden md:flex items-center space-x-1 text-sm font-semibold my-auto">
                                <NavLink to={"/unimarkethome"}>Home</NavLink>
                                <NavLink to={"/unimarketchat"}>Chat</NavLink>
                                <NavLink to={"/unimarketadmin"}>Admin</NavLink>
                                <NavLink to={"/unimarketproduct"}>Product</NavLink>
                                <NavLink to={"/unimarketform"}>Form fill</NavLink>
                                <NavLink to={"/productdetail"}>ProductDetail</NavLink>
                            </div>
                        </div>
                        {/* secondary nav */}
                        <div className="hidden md:flex items-center space-x-1">
                            <Link
                                to={"/unimarkethome"}
                                className="py-2 px-2 text-lg font-bold bg-black hover:bg-white text-white hover:text-black rounded-full  border-2 border-black transition duration-300 navfont"
                            >
                                <CgProfile />
                            </Link>
                        </div>
                        {/* mobile button goes here */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => {
                                    settoogle(!toogle);
                                }}
                                className="mobile-menu-button">
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* mobile menu */}
                <div className={mobilestyle}>
                    <NavLink to={"/unimarkethome"}>Home</NavLink>
                    <NavLink to={"/unimarketchat"}>Chat</NavLink>
                    <NavLink to={"/unimarketadmin"}>Admin</NavLink>
                    <NavLink to={"/unimarketproduct"}>Product</NavLink>
                    <NavLink to={"/unimarketform"}>Form fill</NavLink>
                    <NavLink to={"/productdetail"}>Product Detail</NavLink>
                    <NavLink to={"/unimarkethome"}>My Profile</NavLink>
                </div>
                <hr className='border-1 border-black' />
            </nav>
        </>
    );
};
// NavLink component to handle active link styling
const NavLink = ({ to, children }) => {
    const location = useLocation();

    return (
        <Link
            to={to}
            className={`py-5 px-3 text-black hover:text-gray-900 navfont ${location.pathname === to ? 'text-black  bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent' : ''}`}
        >
            {children}
        </Link>
    );
};
export default Navbar;