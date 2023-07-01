import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { useParams } from 'react-router-dom'
const Editscholarship = () => {
    let { name } = useParams();
    const [Scholarship, setScholarship] = useState(name);
    const [ScholarshipLink, setScholarshiplink] = useState();
    const [details, setdetails] = useState();
    const [price, setprice] = useState();
    const [starttime, setstarttime] = useState();
    const [endtime, setendtime] = useState();

    const handelsavedetails = async () => {

        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "scholarship_name": Scholarship,
            "price_money": price,
            "details": details,
            "link": ScholarshipLink,
            "start_time": starttime,
            "end_time": endtime
        });


        let response = await fetch(`${process.env.REACT_APP_API_URL}/scholarship/${Scholarship}`, {
            method: "PUT",
            body: bodyContent,
            headers: headersList
        });


        if (response.ok) {
            let data = await response.text();
            alert(data);
        } else {
            alert("Something Went Wrong");
        }
    }


    const retrivedatascholarship = async () => {
        console.log("retriving data");
        let headersList = {
            "Accept": "*/*",
        }

        let response = await fetch(`${process.env.REACT_APP_API_URL}/scholarship/${Scholarship}`, {
            method: "GET",
            headers: headersList
        });

        let data = await response.text();
        data = JSON.parse(data);
        setScholarship(data.scholarship_name);
        setScholarshiplink(data.link);
        setdetails(data.details);
        setendtime(data.end_time);
        setstarttime(data.start_time);
        setprice(data.price_money)
    }





    useEffect(() => {

        retrivedatascholarship();
    }, [])
    return (
        <>
            <Navbar />
            <div className="bg-white mb-14">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 md:max-w-[60vw] xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Edit details of Scholarship
                            </h1>
                            <form className="space-y-2" action="#">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Scholarship Name
                                    </label>
                                    <input
                                        onChange={(e) => {
                                            setScholarship(e.target.value);
                                        }}
                                        type="text" value={Scholarship} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter Name" required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Scholarship Website Link
                                    </label>
                                    <input
                                        onChange={(e) => {
                                            setScholarshiplink(e.target.value);
                                        }}
                                        type="url" name="" value={ScholarshipLink} id="" placeholder="Link" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Details
                                    </label>
                                    <textarea
                                        onChange={(e) => {
                                            setdetails(e.target.value);
                                        }}
                                        type="text" value={details} placeholder="Enter details" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                                </div>
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Price
                                    </label>
                                    <input
                                        onChange={(e) => {
                                            setprice(e.target.value);
                                        }}
                                        type="text" value={price} placeholder="Enter price" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                                </div>
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Start time
                                    </label>
                                    <input
                                        onChange={(e) => {
                                            setstarttime(e.target.value)
                                        }}
                                        type="month" id="start" name="start"
                                        min="2023-03" value={starttime} />
                                </div>
                                <div className="">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        End time
                                    </label>
                                    <input
                                        onChange={(e) => {
                                            setendtime(e.target.value)
                                        }}
                                        type="month" id="start" name="start"
                                        min="2023-03" value={endtime} />
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handelsavedetails();
                                    }}
                                    type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    Save details
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Editscholarship