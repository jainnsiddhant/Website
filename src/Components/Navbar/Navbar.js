import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoORG from '../../images/logo.jpg';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [mobilestyle, setmobilestyle] = useState("mobile-menu hidden text-center md:hidden flex flex-col bg-black text-white rounded-2xl p-6 z-30");
    const [toogle, settoogle] = useState(false);
    useEffect(() => {
        if (window.innerWidth <= 768 && toogle === true) {
            setmobilestyle("mobile-menu flex flex-col text-center md:hidden  text-white rounded-2xl p-6");
        } else {
            setmobilestyle("mobile-menu flex flex-col text-center hidden md:hidden  text-white rounded-2xl p-6");
        }
    }, [window.innerWidth, toogle]);
    return (
        <>
            <nav className="p-6">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-[4rem]">
                            <div>
                                <Link
                                    to={"/"}
                                    className="flex items-center py-5 px-2 text-black"
                                >
                                    <img
                                        className="h-12 w-12 mr-1 text-blue-400"
                                        alt='icon'
                                        src={logoORG}
                                    >
                                    </img>
                                    <span className="font-bold text-3xl navfont">FindMyUni</span>
                                </Link>
                            </div>
                            {/* primary nav */}
                            <div className="hidden md:flex items-center space-x-1 text-sm font-semibold my-auto">
                                <NavLink to={"/Resume"}>Resume Builder</NavLink>
                                <NavLink to={"/Connect"}>Connect</NavLink>
                                <NavLink to={"/Scholarship"}>Scholarships</NavLink>
                                <NavLink to={"/course"}>Courses</NavLink>
                                <NavLink to={"/SettleinUK"}>Settle in UK</NavLink>
                                <NavLink to={"/AlreadyinUk"}>Already in UK</NavLink>
                                <NavLink to={"/about"}>About Us</NavLink>
                            </div>
                        </div>
                        {/* secondary nav */}
                        <div className="hidden md:flex items-center space-x-1">
                            <Link
                                to={"/contact"}
                                className="py-2 px-3 text-lg font-bold bg-black hover:bg-white text-white hover:text-black rounded-full  border-2 border-black transition duration-300 navfont"
                            >
                                Contact Us
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
                    <NavLink to={"/Resume"}>Resume Builder</NavLink>
                    <NavLink to={"/Connect"}>Connect</NavLink>
                    <NavLink to={"/Scholarship"}>Scholarships</NavLink>
                    <NavLink to={"/course"}>Courses</NavLink>
                    <NavLink to={"/SettleinUK"}>Settle in UK</NavLink>
                    <NavLink to={"/AlreadyinUk"}>Already in UK</NavLink>
                    <NavLink to={"/about"}>About Us</NavLink>
                    <NavLink to={"/contact"}>Contact Us</NavLink>
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