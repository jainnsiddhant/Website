import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import "./ScholarshipTables.css"
import img6 from '../../../images/5_communication01.jpg'
const ScholarshipTables = () => {

    const [scholarshipdata, setscholarshipdata] = useState([1]);
    const [coursedata, setcoursedata] = useState([1]);

    const retrivescholarshipdata = async () => {
        let headersList = {
            "Accept": "*/*"
        }

        let response = await fetch(`${process.env.REACT_APP_API_URL}/scholarship`, {
            method: "GET",
            headers: headersList
        });

        if (response.ok) {
            let data = await response.text();
            data = JSON.parse(data);
            setscholarshipdata(data);
        }else{
            alert("error while retriving scholarship data");
        }
    }

    const retrivecoursedata = async () => {
        let headersList = {
            "Accept": "*/*"
        }
        let response = await fetch(`${process.env.REACT_APP_API_URL}/courses`, {
            method: "GET",
            headers: headersList
        });

        if (response.ok) {
            let data = await response.text();
            data = JSON.parse(data);
            console.log(data);
            setcoursedata(data);
        } else {
            alert("while retriving course data");
        }
    }


    useEffect(() => {
        retrivescholarshipdata();
        retrivecoursedata();
    }, [])
    return (
        <>

            <h1 class="flex items-center text-5xl font-extrabold my-10 w-[20%] mx-auto">Scholarships<span class="bg-blue-100 text-blue-700 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded ml-2">PRO</span></h1>
            <div className="container p-4 sm:p-4 border rounded-xl mx-auto">
                <h2 className="mb-4 text-xl font-semibold leading-tight">List : </h2>
                <div className="overflow-x-auto mx-auto">
                    <table className="min-w-full text-sm mx-auto text-center">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="">
                            <tr className="">
                                <th className="p-3">Scholarship Name</th>
                                <th className="p-3">Price</th>
                                <th className='p-3'>Start time*</th>
                                <th className='p-3'>End time*</th>
                                <th className="p-3">Link</th>
                            </tr>
                        </thead>
                        <tbody>


                            {
                                scholarshipdata.map((item, idx) => {
                                    return (
                                        <tr className="border-b border-opacity-20">
                                            <td className="p-3">
                                                <p>{item.scholarship_name}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{item.price_money}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{item.start_time}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{item.end_time}</p>
                                            </td>
                                            <td className="p-3">
                                                <span className="px-3 hover:cursor-pointer py-1 font-semibold rounded-md dark:bg-violet-400">
                                                    <a href={item.link}>View</a>
                                                </span>
                                            </td>
                                        </tr>

                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <small className='text-[0.7rem]'>* All data are shown from official reports</small>
                </div>
            </div>

            <div className="max-w-[100vw] md:p-8 flex flex-col md:flex-row md:justify-between mt-8 mb-8">
                <div className="md:w-[100vw] order-2 md:order-2 content my-auto">
                    <h1 className='text-3xl font-bold md:pl-5 md:pr-5 text-center md:text-left specialfont'>Courses</h1>
                    <p className="md:w-[30vw] w-[100vw] md:pt-[5vh] text-center md:text-left md:pl-5">
                        Discover a world of opportunities through our Courses and Scholarship section, where students can explore a diverse range of educational programs and funding options.
                        Top management courses focus on the principles of management, such as planning, organizing, leading, and controlling. Top science courses focus on the natural world, such as physics, chemistry, biology, and mathematics. There are many great courses available in both management and science, so be sure to do your research and find the one that is right for you.
                    </p>
                </div>
                <div className="md:max-w-[50vw] order-1 md:order-1 md:justify-end h-auto md:flex">
                    <img src={img6} alt="" className="h-[100%] md:z-50 md:transform-img" />
                </div>
            </div>


            <h1 class="flex items-center text-5xl font-extrabold my-10 w-[20%] mx-auto">Courses<span class="bg-blue-100 text-blue-700 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded ml-2">PRO</span></h1>
            <div className="container p-4 sm:p-4 border rounded-xl mx-auto">
                <h2 className="mb-4 text-xl font-semibold leading-tight">List : </h2>
                <div className="overflow-x-auto mx-auto">
                    <table className="min-w-full text-sm mx-auto text-center">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="">
                            <tr className="">
                                <th className="p-3">Course Name</th>
                                <th className='p-3'>Details</th>
                                <th className="p-3">Links</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                coursedata.map((item, idx) => {
                                    return (
                                        <tr className="border-b border-opacity-20">
                                            <td className="p-3">
                                                <p>{item.course_name}</p>
                                            </td>
                                            <td className="p-3">
                                                <span className="px-3 bg-blue-500 text-white hover:cursor-pointer py-1 font-semibold rounded-md">
                                                    <Link to={`/course/${item.course_name}`} >View</Link>
                                                </span>
                                            </td>
                                            <td className="p-3">
                                                <span className="px-3 hover:cursor-pointer py-1 font-semibold rounded-md dark:bg-violet-400">
                                                    <a href={item.course_link}>View</a>
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <small className='text-[0.7rem]'>* All data are shown from official reports</small>
                </div>
            </div>
        </>
    );
};

export default ScholarshipTables;