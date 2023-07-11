import React from 'react'
import Navbar from '../../Navbar/Navbar'
import { Footer } from '../../Footer/Footer'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Coursesdetails = () => {
    const { name } = useParams();
    const [coursedata, setcoursedata] = useState([1]);
    const [loading, setloading] = useState(true);
    const retrivecoursedata = async () => {
        setloading(true);
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
            setloading(false);
        } else {
            alert("Error while retriving info");
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
                    {
                        loading === true ?
                            <div className='flex justify-center' role="status">
                                <svg aria-hidden="true" className="mx-auto w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="">Loading...</span>
                            </div>
                            :
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
                                                        <p>{`${item.Avgfees} ${item.currency}`}</p>
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
                    }
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