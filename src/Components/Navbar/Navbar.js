import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoORG from '../../images/logo.jpg';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [mobileStyle, setMobileStyle] = useState("mobile-menu hidden text-center md:hidden flex flex-col bg-black text-white rounded-2xl p-6 z-30");
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1312) {
                setMobileStyle(toggle ? "mobile-menu flex flex-col text-center md:hidden text-white rounded-2xl p-6" : "mobile-menu hidden text-center md:hidden flex flex-col bg-black text-white rounded-2xl p-6 z-30");
            } else {
                setMobileStyle("hidden text-center md:hidden flex flex-col bg-black text-white rounded-2xl p-6 z-30");
            }
        };

        handleResize(); // Call once to set initial state

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [toggle]);

    return (
        <>
            <nav className="py-4 pl-12 pr-12">
                <div className="w-full max-w-[1600px] mx-auto">
                    <div className="flex justify-between items-center w-full">
                        {/* Logo left */}
                        <div className="shrink-0">
                            <Link
                                to={"/"}
                                className="flex items-center py-2 text-black"
                            >
                                <img
                                    className="h-12 w-12 mr-1 text-blue-400"
                                    alt='icon'
                                    src={logoORG}
                                />
                                <span className="font-bold text-3xl navfont">FindMyUni</span>
                            </Link>
                        </div>
                        {/* primary nav: fills space between logo and Contact Us, even space between links */}
                        <div className="hidden md:flex items-center justify-between flex-1 min-w-0 mx-6 flex-nowrap text-sm font-semibold">
                            <NavLink to={"/Resume"}>Resume Builder</NavLink>
                            <NavLink to={"/Ielts-Gre"}>IELTS/GRE</NavLink>
                            <NavLink to={"/Connect"}>Connect</NavLink>
                            <NavLink to={"/Scholarship"}>Scholarships</NavLink>
                            <NavLink to={"/course"}>Courses</NavLink>
                            <NavLink to={"/SettleinUK"}>Settle in UK</NavLink>
                            <NavLink to={"/findmyfriend"}>FindMyFriend</NavLink>
                            <NavLink to={"/AlreadyinUk"}>Already in UK</NavLink>
                            <NavLink to={"/about"}>About Us</NavLink>
                        </div>
                        {/* Contact Us right */}
                        <div className="hidden md:flex items-center shrink-0">
                            <Link
                                to={"/contact"}
                                className="whitespace-nowrap py-2 px-4 text-lg font-bold bg-gradient-to-r from-black to-black hover:from-green-600 hover:to-blue-600 text-white rounded-full border-2 border-black hover:border-transparent transition duration-300 navfont"
                            >
                                Contact Us
                            </Link>
                        </div>
                        {/* mobile button goes here */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => {
                                    setToggle(!toggle);
                                }}
                                className="mobile-menu-button"
                            >
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
                <div className={mobileStyle}>
                    <NavLink to={"/Resume"}>Resume Builder</NavLink>
                    <NavLink to={"/Ielts-Gre"}>IELTS/GRE</NavLink>
                    <NavLink to={"/Connect"}>Connect</NavLink>
                    <NavLink to={"/Scholarship"}>Scholarships</NavLink>
                    <NavLink to={"/course"}>Courses</NavLink>
                    <NavLink to={"/SettleinUK"}>Settle in UK</NavLink>
                    <NavLink to={"/findmyfriend"}>FindMyFriend</NavLink>
                    <NavLink to={"/AlreadyinUk"}>Already in UK</NavLink>
                    <NavLink to={"/about"}>About Us</NavLink>
                    <NavLink to={"/contact"}>Contact Us</NavLink>
                </div>
                {/* <hr className='border-1 border-black' /> */}
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
            className={`whitespace-nowrap py-5 px-1 text-black hover:text-gray-900 navfont ${location.pathname === to ? 'text-black bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent' : ''}`}
        >
            {children}
        </Link>
    );
};

export default Navbar;
