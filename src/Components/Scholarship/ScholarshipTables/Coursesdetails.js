import React from 'react'
import Navbar from '../../Navbar/Navbar'
import { Footer } from '../../Footer/Footer'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Coursesdetails = () => {
    const { name } = useParams();
    const [coursedata, setcoursedata] = useState([1]);

    const retrivecoursedata = async () => {
        let headersList = {
            "Accept": "*/*"
        }

        let response = await fetch(`${process.env.REACT_APP_API_URL}/courses/${name}`, {
            method: "GET",
            headers: headersList
        });

        if (response.ok) {
            let data = await response.text();
            data = JSON.parse(data);
            setcoursedata(data.course_list);
            console.log(data.course_list);
        }
    }
    useEffect(() => {
        retrivecoursedata();
    }, [])
    return (
        <>
            <Navbar />
            <h1 class="text-5xl font-extrabold my-10 mx-auto text-center">Courses</h1>
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
                                <th className="p-3">University Name</th>
                                <th className="p-3">Average fees</th>
                                <th className="p-3">Qs Rank</th>
                                <th className="p-3">Gaurdian Rank</th>
                                <th className='p-3'>Course Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                coursedata.map((item, idx) => {
                                    return (
                                        <tr className="border-b border-opacity-20">
                                            <td className="p-3">
                                                <p>{item.UnivName}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{`${item.Avgfees}${item.currency}`}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{item.Qs_rank}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{item.Gaurdian_rank}</p>
                                            </td>
                                            <td className="p-3">
                                                <span className="px-3 bg-blue-600 text-white hover:cursor-pointer py-1 font-semibold rounded-md">
                                                    <a href={item.Link}>View</a>
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <button className="text-white mt-5 rounded-2xl bg-blue-500 hover:bg-blue-800 px-4 py-1">
                        <Link to={"/scholarship"}>Back</Link>
                    </button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Coursesdetails