import React from 'react'
import { FaChevronRight , FaTwitter , FaInstagram ,FaFacebook , FaLinkedin } from "react-icons/fa";

const NewFooter = () => {
    return (
        <footer>
            <div className='p-10 bg-gray-800 text-gray-200'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 md-grid-cols-2 lg:grid-cols-4 gap-2'>
                        <div className='mb-5'>
                            <h4 className='text-2xl pb-4'>FindMyUni</h4>
                            <p className='text-gray-500'>
                            Find your university <br />
                            Connect with student ambassador <br />
                            Enhance resume <br /><br />
                            <strong>Email:</strong>abc123@gmail.com<br />
                            <strong>Phone:</strong>0123456789
                            </p>
                        </div>
                        <div className='mb-5'>
                            <h4 className='pb-4'>Useful Links</h4>
                            <ul className='text-gray-500'>
                                <li className='pb-4 flex'><FaChevronRight className='text-blue-600' /><a href="#" className='hover:text-blue-600'>Home</a></li>
                                <li className='pb-4 flex'><FaChevronRight className='text-blue-600' /><a href="#" className='hover:text-blue-600'>About Us</a></li>
                                <li className='pb-4 flex'><FaChevronRight className='text-blue-600' /><a href="#" className='hover:text-blue-600'>Services</a></li>
                            </ul>
                        </div>
                        <div className='mb-5'>
                            <h4 className='pb-4'>Our Services</h4>
                            <ul className='text-gray-500'>
                                <li className='pb-4 flex'><FaChevronRight className='text-blue-600' /><a href="#" className='hover:text-blue-600'>Find University</a></li>
                                <li className='pb-4 flex'><FaChevronRight className='text-blue-600' /><a href="#" className='hover:text-blue-600'>Connect with ambassador</a></li>
                                <li className='pb-4 flex'><FaChevronRight className='text-blue-600' /><a href="#" className='hover:text-blue-600'>Enhance resume</a></li>
                            </ul>
                        </div>
                        <div className='mb-5'>
                            <h4 className='pb-4'>Join Us</h4>
                            <p className='text-gray-500 pb-2'>For all latest updates on courses and scholarships across the globe</p>
                            <form className='flex flex-row flex-wrap'>
                                <input type="text" className='text-gray-500 w-2/3 p-2 focus:border-blue-500' placeholder="email@example.com" />
                                <button className='p-2 w-1/3 bg-blue-500 text-white hover:bg-blue-600'>Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-gray-900 text-gray-500 px-10'>
                <div className='max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center'>
                    <div className='text-center'>
                        <div>
                            Copyright <strong><span>Company</span></strong>. All Rights Reserved.
                        </div>
                        <div>
                            Designed by <a href="#" className='text-blue-500'>TailwindCss</a>
                        </div>
                    </div>
                    <div className='text-center text-xl text-white'>
                        <a href="#" className='w-10 h-10 rounded-full bg-blue-500 bg-blue-600 mx-1 inline-block pt-1'><FaTwitter /></a>
                        <a href="#" className='w-10 h-10 rounded-full bg-blue-500 bg-blue-600 mx-1 inline-block pt-1'><FaInstagram /></a>
                        <a href="#" className='w-10 h-10 rounded-full bg-blue-500 bg-blue-600 mx-1 inline-block pt-1'><FaFacebook /></a>
                        <a href="#" className='w-10 h-10 rounded-full bg-blue-500 bg-blue-600 mx-1 inline-block pt-1'><FaLinkedin /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default NewFooter