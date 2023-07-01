import React from 'react'
import Navbar from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { useEffect } from 'react';
import { useState } from 'react';
const AddCourses = () => {
    const [Course, setCourse] = useState();
    const [CourseTag, setCourseTag] = useState();
    const [details, setdetails] = useState();
    const [CourseLink, setCourseLink] = useState();
    const [inputFields, setInputFields] = useState([{
        UnivName: "",
        Avgfees: "",
        Link: "",
        Qs_rank: "",
        Gaurdian_rank: ""
    },]);

    const addInputField = () => {
        setInputFields([
            ...inputFields, {
                UnivName: "",
                Avgfees: "",
                Link: "",
                Qs_rank: "",
                Gaurdian_rank: ""
            },
        ]);
        console.log(inputFields);
    };


    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const list = [...inputFields];
        list[index][name] = value;
        setInputFields(list);
    };


    const removeInputFields = (index) => {
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
    };

    const handelsavedetails = async () => {
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "course_name": Course,
            "course_tag": CourseTag,
            "course_link": CourseLink,
            "course_list": inputFields,
            "course_details": details
        });

        let response = await fetch(`${process.env.REACT_APP_API_URL}/courses`, {
            method: "POST",
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

    useEffect(() => {

    }, [inputFields])
    return (
        <>
            <Navbar />
            <div className="bg-white mb-14">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 md:max-w-[60vw] xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Add details of Courses
                            </h1>
                            <form className="space-y-2" action="#">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Course Name
                                    </label>
                                    <input
                                        onChange={(e) => {
                                            setCourse(e.target.value);
                                        }}
                                        type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter Name" required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Course Tag
                                    </label>
                                    <select
                                        onChange={(evnt) => {
                                            setCourseTag(evnt.target.value);
                                        }}
                                        type="Text"
                                        name="CourseTag"
                                        value={CourseTag}
                                        placeholder="Enter Tag"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required=""
                                    >
                                        <option selected>Choose Option</option>
                                        <option value="Management">Management</option>
                                        <option value="Science">Science</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Course Link
                                    </label>
                                    <input
                                        onChange={(e) => {
                                            setCourseLink(e.target.value);
                                        }}
                                        type="url" name="" id="" placeholder="Link" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        details
                                    </label>
                                    <textarea
                                        onChange={(e) => {
                                            setdetails(e.target.value);
                                        }}
                                        type="text" placeholder="Enter rank" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                                </div>
                                <div style={
                                    {
                                        marginTop: "2rem",
                                        marginBottom: "2rem"
                                    }
                                }
                                    className="flex justify-between">
                                    <h1>Course Details :</h1>
                                    <div className="">
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            addInputField()
                                        }} className="bg-blue-500 text-white font-bold px-4 py-1 rounded-xl">
                                            Add
                                        </button>
                                    </div>
                                </div>
                                {
                                    inputFields.map((data, index) => {
                                        const { CourseName, CourseTag } = data;
                                        return (
                                            <div key={index} className='flex md:flex-row flex-col md:space-x-6'>
                                                <div className="mb-10">
                                                    <div className="flex justify-between">
                                                        <div className="">
                                                            <label
                                                                className="block mb-2 text-sm font-medium text-gray-900"
                                                            >
                                                                Univarsity Name
                                                            </label>
                                                            <input
                                                                onChange={(evnt) => handleChange(index, evnt)}
                                                                type="text"
                                                                name="UnivName"
                                                                placeholder="Enter Name"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                                required=""
                                                            />
                                                        </div>
                                                        <div className="">
                                                            <label
                                                                className="block mb-2 text-sm font-medium text-gray-900"
                                                            >

                                                                Avg fees
                                                            </label>
                                                            <input
                                                                onChange={(evnt) => handleChange(index, evnt)}
                                                                type="text"
                                                                name="Avgfees"
                                                                placeholder="Enter Name"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                                required=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <div className="">
                                                            <label
                                                                className="block mb-2 text-sm font-medium text-gray-900"
                                                            >

                                                                Univarsity Link
                                                            </label>
                                                            <input
                                                                onChange={(evnt) => handleChange(index, evnt)}
                                                                type="url"
                                                                name="Link"
                                                                placeholder="Enter Name"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                                required=""
                                                            />
                                                        </div>
                                                        <div className="">
                                                            <label
                                                                className="block mb-2 text-sm font-medium text-gray-900"
                                                            >

                                                                Qs_rank
                                                            </label>
                                                            <input
                                                                onChange={(evnt) => handleChange(index, evnt)}
                                                                type="number"
                                                                name="Qs_rank"
                                                                placeholder="Enter Tag"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                                required=""
                                                            >
                                                            </input>
                                                            <label
                                                                className="block mb-2 text-sm font-medium text-gray-900"
                                                            >

                                                                Guardian_rank
                                                            </label>
                                                            <input
                                                                onChange={(evnt) => handleChange(index, evnt)}
                                                                type="number"
                                                                name="Gaurdian_rank"
                                                                placeholder="Enter Tag"
                                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                                required=""
                                                            >
                                                            </input>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                </div>
                                                {(inputFields.length !== 1) ? <div onClick={() => {
                                                    console.log(index);
                                                    removeInputFields(index)
                                                }} className="border mt-4 md:mt-0 rounded-full bg-red-500 my-auto px-4 py-1 text-white text-center font-bold">X</div> : ''}
                                            </div>
                                        )
                                    })
                                }
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
    );
};
export default AddCourses