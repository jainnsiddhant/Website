import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import "./ScholarshipTables.css"
import img6 from "../../../images/5_communication01.jpg"
const ScholarshipTables = () => {

    const [scholarshipdata, setscholarshipdata] = useState([1]);
    const [loading1, setloading1] = useState(true);
    const [loading2, setloading2] = useState(true);
    const [Managementdata, setManagementdata] = useState([]);
    const [Sciencedata, setSciencedata] = useState([]);
    const [selectedtab, setselectedtab] = useState(0);

    const retrivescholarshipdata = async () => {
        setloading1(true);
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
            setloading1(false);
        } else {
            alert("error while retriving scholarship data");
        }
    }

    const retrivecoursedata = async () => {
        setloading2(true);
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
            const management = data.filter(item => {
                return item.course_tag === "Management"
            });
            const science = data.filter(item => {
                return item.course_tag === "Science"
            })
            setManagementdata(management);
            setSciencedata(science);
            setloading2(false);
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

            <h1 class="text-5xl font-extrabold my-10 mx-auto text-center">Scholarships<span class="bg-blue-100 text-blue-700 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded ml-2">PRO</span></h1>
            <div className="container p-4 sm:p-4 border rounded-xl mx-auto">
                <h2 className="mb-4 text-xl font-semibold leading-tight">List : </h2>
                <div className="overflow-x-auto mx-auto">
                    {
                        loading1 === true ?
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
                                                        <p>{`${item.price_money} ${item.currency}`}</p>
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
                    }
                    <small className='text-[0.7rem]'>* All data are shown from official reports</small>
                </div>
            </div>

            <div className="max-w-[100vw] md:p-8 flex flex-col md:flex-row md:justify-between mt-8 mb-8">
                <div className="md:w-[100vw] order-2 md:order-2 content my-auto">
                    <h1 className='text-5xl font-extrabold my-10 mx-auto text-center md:text-left'>Courses</h1>
                    <p className="md:w-[30vw] w-[100vw] md:pt-[5vh] text-center md:text-left md:pl-5">
                        Discover a world of opportunities through our Courses and Scholarship section, where students can explore a diverse range of educational programs and funding options.
                        Top management courses focus on the principles of management, such as planning, organizing, leading, and controlling. Top science courses focus on the natural world, such as physics, chemistry, biology, and mathematics. There are many great courses available in both management and science, so be sure to do your research and find the one that is right for you.
                    </p>
                </div>
                <div className="md:max-w-[50vw] order-1 md:order-1 md:justify-end h-auto md:flex">
                    <img src={img6} alt="" className="h-[100%] md:z-50 md:transform-img" />
                </div>
            </div>

            {/* <h1 class="text-5xl font-extrabold my-10 mx-auto text-center">Courses<span class="bg-blue-100 text-blue-700 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded ml-2">PRO</span></h1> */}
            <p className="text-gray-500 sm:text-xl dark:text-gray-400 text-center">
                <label for="Toggle3" className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800">
                    <input id="Toggle3" type="checkbox" className="hidden peer" />
                    <span onClick={() => {
                        setselectedtab(0);
                    }} className="px-4 py-2 rounded-l-md dark:bg-violet-400 peer-checked:dark:bg-gray-300">Management</span>
                    <span onClick={() => {
                        setselectedtab(1);
                    }} className="px-4 py-2 rounded-r-md dark:bg-gray-300 peer-checked:dark:bg-violet-400">Science</span>
                </label>
            </p>
            <div className="container p-4 sm:p-4 border rounded-xl mx-auto">
                <h2 className="mb-4 text-xl font-semibold leading-tight">List : </h2>
                <div className="overflow-x-auto mx-auto">
                    {
                        loading2 === true ?
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
                                        <th className="p-3">Course Name</th>
                                        <th className='p-3'>Details</th>
                                        <th className="p-3">Links</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (selectedtab === 0 ? Managementdata : Sciencedata).map((item, idx) => {
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
                    }
                    <small className='text-[0.7rem]'>* All data are shown from official reports</small>
                </div>
            </div>
        </>
    );
};

export default ScholarshipTables;



// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import "./ScholarshipTables.css";
// import img6 from '../../../images/5_communication01.jpg';

// const ScholarshipTables = () => {
//   const [scholarshipdata, setscholarshipdata] = useState([]);
//   const [coursedata, setcoursedata] = useState([]);

//   const retrivescholarshipdata = async () => {
//     try {
//       const response = await fetch(`${process.env.REACT_APP_API_URL}/scholarship`);
//       if (response.ok) {
//         const data = await response.json();
//         setscholarshipdata(data);
//       } else {
//         throw new Error('Error while retrieving scholarship data');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('Error while retrieving scholarship data');
//     }
//   };

//   const retrivecoursedata = async () => {
//     try {
//       const response = await fetch(`${process.env.REACT_APP_API_URL}/courses`);
//       if (response.ok) {
//         const data = await response.json();
//         setcoursedata(data);
//       } else {
//         throw new Error('Error while retrieving course data');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('Error while retrieving course data');
//     }
//   };

//   useEffect(() => {
//     retrivescholarshipdata();
//     retrivecoursedata();
//   }, []);

//   return (
//     <>
//       <h1 className="text-5xl font-extrabold my-10 mx-auto text-center">
//         Scholarships
//         <span className="bg-blue-100 text-blue-700 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded ml-2">
//           PRO
//         </span>
//       </h1>
//       <div className="container p-4 sm:p-4 border rounded-xl mx-auto">
//         <h2 className="mb-4 text-xl font-semibold leading-tight text-center">List:</h2>
//         <div className="overflow-x-auto mx-auto">
//           <table className="min-w-full text-sm mx-auto text-center">
//             <colgroup>
//               <col />
//               <col />
//               <col />
//               <col />
//               <col />
//               <col className="w-24" />
//             </colgroup>
//             <thead>
//               <tr>
//                 <th className="p-3">Scholarship Name</th>
//                 <th className="p-3">Price</th>
//                 <th className="p-3">Start time*</th>
//                 <th className="p-3">End time*</th>
//                 <th className="p-3">Link</th>
//               </tr>
//             </thead>
//             <tbody>
//               {scholarshipdata.map((item, idx) => (
//                 <tr key={idx} className="border-b border-opacity-20">
//                   <td className="p-3">{item.scholarship_name}</td>
//                   <td className="p-3">{item.price_money}</td>
//                   <td className="p-3">{item.start_time}</td>
//                   <td className="p-3">{item.end_time}</td>
//                   <td className="p-3">
//                     <span className="px-3 hover:cursor-pointer py-1 font-semibold rounded-md dark:bg-violet-400">
//                       <a href={item.link} target="_blank" rel="noopener noreferrer">
//                         View
//                       </a>
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <small className="text-[0.7rem] block text-center mt-2">
//             * All data are shown from official reports
//           </small>
//         </div>
//       </div>

//       <div className="max-w-full md:p-8 flex flex-col md:flex-row md:justify-between mt-8 mb-8">
//         <div className="md:w-[100vw] order-2 md:order-2 content my-auto">
//           <h1 className="text-3xl font-bold md:pl-5 md:pr-5 text-center md:text-center specialfont">
//             Courses
//           </h1>
//           <p className="md:w-[30vw] w-[100vw] md:pt-[5vh] text-center md:text-center md:pl-5">
//             Discover a world of opportunities through our Courses and Scholarship section, where
//             students can explore a diverse range of educational programs and funding options. Top
//             management courses focus on the principles of management, such as planning, organizing,
//             leading, and controlling. Top science courses focus on the natural world, such as
//             physics, chemistry, biology, and mathematics. There are many great courses available in
//             both management and science, so be sure to do your research and find the one that is
//             right for you.
//           </p>
//         </div>
//         <div className="md:max-w-[50vw] order-1 md:order-1 md:justify-end h-auto md:flex">
//           <img src={img6} alt="" className="h-[100%] md:z-50 md:transform-img" />
//         </div>
//       </div>

//       <h1 className="text-5xl font-extrabold my-10 mx-auto text-center">
//         Courses
//         <span className="bg-blue-100 text-blue-700 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded ml-2">
//           PRO
//         </span>
//       </h1>
//       <div className="container p-4 sm:p-4 border rounded-xl mx-auto">
//         <h2 className="mb-4 text-xl font-semibold leading-tight text-center">List:</h2>
//         <div className="overflow-x-auto mx-auto">
//           <table className="min-w-full text-sm mx-auto text-center">
//             <colgroup>
//               <col />
//               <col />
//               <col />
//               <col />
//               <col />
//               <col className="w-24" />
//             </colgroup>
//             <thead>
//               <tr>
//                 <th className="p-3">Course Name</th>
//                 <th className="p-3">Details</th>
//                 <th className="p-3">Links</th>
//               </tr>
//             </thead>
//             <tbody>
//               {coursedata.map((item, idx) => (
//                 <tr key={idx} className="border-b border-opacity-20">
//                   <td className="p-3">{item.course_name}</td>
//                   <td className="p-3">
//                     <span className="px-3 bg-blue-500 text-white hover:cursor-pointer py-1 font-semibold rounded-md">
//                       <Link to={`/course/${item.course_name}`}>View</Link>
//                     </span>
//                   </td>
//                   <td className="p-3">
//                     <span className="px-3 hover:cursor-pointer py-1 font-semibold rounded-md dark:bg-violet-400">
//                       <a href={item.course_link} target="_blank" rel="noopener noreferrer">
//                         View
//                       </a>
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <small className="text-[0.7rem] block text-center mt-2">
//             * All data are shown from official reports
//           </small>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ScholarshipTables;
