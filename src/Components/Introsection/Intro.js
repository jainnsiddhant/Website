import React, { useEffect, useState } from "react";
import img1 from "../../images/6180780.jpg";
import img2 from "../../images/7449742.jpg";
import img3 from "../../images/4261198.jpg";
import img4 from "../../images/4204968.jpg";
import img5 from "../../images/4133580.jpg";
import img6 from "../../images/5_communication01.jpg";
import { Link } from "react-router-dom";
const Intro = () => {
  const [selectedtab, setselectedtab] = useState(0);
  const [Managementdata, setManagementdata] = useState([]);
  const [Sciencedata, setSciencedata] = useState([]);
  const [loading, setloading] = useState(true);
  const retriveuniversitydata = async () => {
    setloading(true);
    let headersList = {
      Accept: "*/*",
    };

    let response = await fetch(`${process.env.REACT_APP_API_URL}/university`, {
      method: "GET",
      headers: headersList,
    });

    if (response.ok) {
      let data = await response.text();
      data = JSON.parse(data);
      const management = data.filter((item) => {
        return item.courses.some((course) => course.CourseTag === "Management");
      });
      const science = data.filter((item) => {
        return item.courses.some((course) => course.CourseTag === "Science");
      });

      science.sort((a, b) => {
        const qsRankA = parseInt(a.rankings.qs_ranking);
        const qsRankB = parseInt(b.rankings.qs_ranking);

        if (qsRankA === qsRankB) {
          const guardianRankA = parseInt(a.rankings.guardian_ranking);
          const guardianRankB = parseInt(b.rankings.guardian_ranking);
          return guardianRankA - guardianRankB;
        } else {
          return qsRankA - qsRankB;
        }
      });
      management.sort((a, b) => {
        const qsRankA = parseInt(a.rankings.qs_ranking);
        const qsRankB = parseInt(b.rankings.qs_ranking);

        if (qsRankA === qsRankB) {
          const guardianRankA = parseInt(a.rankings.guardian_ranking);
          const guardianRankB = parseInt(b.rankings.guardian_ranking);
          return guardianRankA - guardianRankB;
        } else {
          return qsRankA - qsRankB;
        }
      });
      setManagementdata(management);
      setSciencedata(science);
      setloading(false);
    } else {
      alert("Error while retriving data");
    }
  };
  useEffect(() => {
    retriveuniversitydata();
  }, []);
  return (
    <>
      <div className="">
        <div className="max-w-[100vw] md:p-8 flex justify-between">
          <div className="md:w-[100vw] content">
            <h1 className="md:text-7xl font-bold md:pl-5 md:pr-5 hidden md:block specialfont">
              Discover <br /> Colleges, Courses <br />{" "}
              <em className="mytext">& Scholarships</em>
              <br />
            </h1>
            <h1 className="text-4xl md:hidden md:w-[100vw] h-[30vh]  items-center text-center flex blinkingcursor mytext specialfont">
              Discover Colleges, Courses & Scholarships{" "}
            </h1>
            <p className="md:w-[30vw] w-[100vw]  md:pt-[5vh] text-center md:text-left md:pl-5">
              The Next Generation Way to find The Best College and Course at one
              place.
            </p>
            {/* <div className="flex space-x-5 md:justify-start justify-center pt-[5vh] md:pl-5">
              <button className='bg-black hover:text-black hover:bg-white text-white text-2xl rounded-full pl-3 pr-3 border-2 transition duration-300 border-black'>Explore</button>
              <button className='border-[1px] border-white rounded-full text-xl pl-3 pr-3'>Colleges</button>
            </div> */}
          </div>
          <div className="max-w-[50vw] justify-end hidden h-auto md:flex">
            {/* <div className="w-[18vw]">
              <div className="h-[70%] rounded-2xl">
                <img src={img1} alt="" className="h-[100%] z-50 transform-img" />
              </div>
              <div className="h-[30%] w-[20vw] mt-[-3rem] rounded-2xl glasseffect">
              </div>
            </div>
            <div className="w-[14vw]">
              <div className="h-[50%] w-[20vw] rounded-2xl glasseffect">
              </div>
              <div className="h-[60%] rounded-2xl">
                <img src={img2} alt="" className="h-[100%] transform-img z-[50] mt-[-5rem]" />
              </div>
            </div>
            <div className="w-[18vw]">
              <div className="h-[60%] rounded-2xl ">
                <img src={img3} alt="" className="h-[100%] transform-img z-[100]" />
              </div>
              <div className="h-[40%] rounded-2xl glasseffect mt-[-5rem]">
              </div>
            </div> */}
            <img src={img1} alt="" className="h-[100%] z-50 transform-img" />
          </div>
        </div>
        <div className="UniversityRankings  md:w-[80vw] mx-auto">
          <section className="rounded-xl">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="mb-8 lg:mb-16">
                <h2 className="mb-4 text-center text-3xl tracking-tight font-bold text-gray-900">
                  University Rankings
                </h2>
                <p className="text-lg text-center md:text-left">
                  University rankings order institutions in higher education
                  based on factors that vary depending on the ranking. Some
                  rankings evaluate institutions within a single country, while
                  others assess institutions worldwide. Rankings are typically
                  conducted by magazines, newspapers, websites, governments, or
                  academics.
                </p>
                <p className="text-xl font-bold mt-4 mb-4 text-center md:text-left">
                  Major international rankings
                </p>
                <ul className="text-center md:text-left">
                  <div className="m-2">
                    <li className="font-semibold">
                      <a
                        href="https://www.qs.com/"
                        target="_blank"
                        className="text-blue-500"
                      >
                        QS World University Rankings
                      </a>
                    </li>
                    <p className="m-4">
                      The QS World University Rankings are a ranking of the
                      world's top universities produced by Quacquarelli Symonds
                      published annually since 2004.These rankings use some of
                      the same criteria as the World University Rankings but
                      they use other measures, such as incoming and outgoing
                      exchange students as well. As the criteria and their
                      weightings are different, the QS World university rankings
                      and the QS Asian University rankings released in the same
                      academic year are different. QS published global
                      universities ranking by different major in different
                      countries, which has special reference value for
                      international students, like Statistics & Operational
                      Research program in China.
                    </p>
                  </div>
                  <div className="m-1">
                    <li className="font-semibold">
                      <a
                        href="https://www.theguardian.com/international"
                        target="_blank"
                        className="text-blue-500"
                      >
                        The Guardian
                      </a>
                    </li>
                    <p className="m-4">
                      The Guardian's ranking uses nine different criteria, each
                      weighted between 5 and 15 per cent. Unlike other annual
                      rankings of British universities, the criteria do not
                      include a measure of research output. A "value-added"
                      factor is included which compares students' degree results
                      with their entry qualifications, described by the
                      newspaper as being "based upon a sophisticated indexing
                      methodology that tracks students from enrolment to
                      graduation, qualifications upon entry are compared with
                      the award that a student receives at the end of their
                      studies".Tables are drawn up for subjects, with the
                      overall ranking being based on an average across the
                      subjects rather than on institutional level statistics.
                    </p>
                  </div>
                </ul>

                <p className="text-gray-500 sm:text-xl dark:text-gray-400 text-center">
                  <label
                    for="Toggle3"
                    className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800"
                  >
                    <input
                      id="Toggle3"
                      type="checkbox"
                      className="hidden peer"
                    />
                    <span
                      onClick={() => {
                        setselectedtab(0);
                      }}
                      className="px-4 py-2 rounded-l-md dark:bg-violet-400 peer-checked:dark:bg-gray-300"
                    >
                      Management
                    </span>
                    <span
                      onClick={() => {
                        setselectedtab(1);
                      }}
                      className="px-4 py-2 rounded-r-md dark:bg-gray-300 peer-checked:dark:bg-violet-400"
                    >
                      Science
                    </span>
                  </label>
                </p>
              </div>
              <div className="container p-4 sm:p-4 border rounded-xl">
                <h2 className="mb-4 text-xl font-semibold leading-tight">
                  List :{" "}
                </h2>
                <div className="overflow-x-auto mx-auto">
                  {loading === true ? (
                    <div className="flex justify-center" role="status">
                      <svg
                        aria-hidden="true"
                        className="mx-auto w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="">Loading...</span>
                    </div>
                  ) : (
                    <table className="min-w-full text-sm mx-auto text-right">
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
                          <th className="p-3">Qs Ranking</th>
                          <th className="p-3">Guardian Rank</th>
                          <th className="p-3">University Name</th>
                          <th className="p-3">Link</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(selectedtab === 0 ? Managementdata : Sciencedata).map(
                          (item, idx) => {
                            return (
                              <tr
                                key={idx}
                                className="border-b border-opacity-20"
                              >
                                <td className="p-3">
                                  <p>{item.rankings.qs_ranking}</p>
                                </td>
                                <td className="p-3">
                                  <p>{item.rankings.guardian_ranking}</p>
                                </td>
                                <td className="p-3">
                                  <p>{item.university_name}</p>
                                </td>
                                <td className="p-3">
                                  <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400">
                                    <a href={item.university_website}>View</a>
                                  </span>
                                </td>
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                    </table>
                  )}
                  <small className="text-[0.7rem]">
                    * All rakings are shown from official reports
                  </small>
                </div>
              </div>
            </div>
          </section>

          <div className="max-w-[100vw] md:p-8 flex flex-col md:flex-row md:justify-between mt-8 mb-8">
            <div className="md:w-[100vw] order-2 md:order-1 content my-auto">
              <h1 className="text-3xl font-bold md:pl-5 md:pr-5 text-center md:text-left specialfont">
                Courses and Scholarship
              </h1>
              <p className="md:w-[30vw] w-[100vw]  md:pt-[5vh] text-center md:text-left md:pl-5">
                Discover a world of opportunities through our Courses and
                Scholarship section, where students can explore a diverse range
                of educational programs and funding options.
              </p>
              <div className="flex space-x-5 md:justify-start justify-center pt-[5vh] md:pl-5">
                <button className="bg-black hover:text-black hover:bg-white text-white text-2xl rounded-full pl-3 pr-3 border-2 transition duration-300 border-black">
                  <Link to={"/scholarship"}>
                    Explore<em className="font-bold">↗</em>
                  </Link>
                </button>
              </div>
            </div>
            <div className="md:max-w-[50vw] order-1 md:order-2 md:justify-end h-auto md:flex">
              <img
                src={img6}
                alt=""
                className="h-[100%] md:z-50 md:transform-img"
              />
            </div>
          </div>

          <div className="max-w-[100vw] md:p-8 flex flex-col md:flex-row md:justify-between mt-8 mb-8">
            <div className="md:w-[100vw] order-2 md:order-2 content my-auto">
              <h1 className="text-3xl font-bold md:pl-5 md:pr-5 text-center md:text-left specialfont">
                Want to Settel in UK
              </h1>
              <p className="md:w-[30vw] w-[100vw]  md:pt-[5vh] text-center md:text-left md:pl-5">
                Find your perfect accommodation with our curated list of trusted
                housing websites, ensuring a comfortable and hassle-free stay.
                Additionally, discover the top banks in the UK for convenient
                financial services, along with a comprehensive packing list to
                ensure you're well-prepared for your relocation. Don't forget to
                check our recommended forex card list for efficient currency
                exchange during your stay
              </p>
              <div className="flex space-x-5 md:justify-start justify-center pt-[5vh] md:pl-5">
                <button className="bg-black hover:text-black hover:bg-white text-white text-2xl rounded-full pl-3 pr-3 border-2 transition duration-300 border-black">
                  <Link to={"/Page4"}>
                    Explore<em className="font-bold">↗</em>
                  </Link>
                </button>
              </div>
            </div>
            <div className="md:max-w-[50vw] order-1 md:order-1 md:justify-end h-auto md:flex">
              <img
                src={img5}
                alt=""
                className="h-[100%] md:z-50 md:transform-img"
              />
            </div>
          </div>

          <div className="max-w-[100vw] md:p-8 flex flex-col md:flex-row md:justify-between mt-8 mb-8">
            <div className="md:w-[100vw] order-2 md:order-1 content my-auto">
              <h1 className="text-3xl font-bold md:pl-5 md:pr-5 text-center md:text-left specialfont">
                Already in UK
              </h1>
              <p className="md:w-[30vw] w-[100vw]  md:pt-[5vh] text-center md:text-left md:pl-5">
                Comprehensive list of reliable WiFi providers, ensuring you have
                fast and reliable internet access wherever you go. Discover
                smart ways to save money with our expert tips and advice,Explore
                our recommended job agencies.Stay on top of your tax obligations
                with our user-friendly tax calculator
              </p>
              <div className="flex space-x-5 md:justify-start justify-center pt-[5vh] md:pl-5">
                <button className="bg-black hover:text-black hover:bg-white text-white text-2xl rounded-full pl-3 pr-3 border-2 transition duration-300 border-black">
                  <Link to={"/Page5"}>
                    Explore<em className="font-bold">↗</em>
                  </Link>
                </button>
              </div>
            </div>
            <div className="md:max-w-[50vw] order-1 md:order-2 md:justify-end h-auto md:flex">
              <img
                src={img2}
                alt=""
                className="h-[100%] md:z-50 md:transform-img"
              />
            </div>
          </div>

          <div className="max-w-[100vw] md:p-8 flex flex-col md:flex-row md:justify-between mt-8 mb-8">
            <div className="md:w-[100vw] order-2 md:order-2 content my-auto">
              <h1 className="text-3xl font-bold md:pl-5 md:pr-5 text-center md:text-left specialfont">
                Buid Your Resume
              </h1>
              <p className="md:w-[30vw] w-[100vw]  md:pt-[5vh] text-center md:text-left md:pl-5">
                Your one-stop destination for crafting a professional and
                impactful resume,Discover our comprehensive collection of resume
                templates, designed to suit various industries and career
                levels. and developed your skills exploring some courses
              </p>
              <div className="flex space-x-5 md:justify-start justify-center pt-[5vh] md:pl-5">
                <button className="bg-black hover:text-black hover:bg-white text-white text-2xl rounded-full pl-3 pr-3 border-2 transition duration-300 border-black">
                  <Link to={"/resume"}>
                    Explore<em className="font-bold">↗</em>
                  </Link>
                </button>
              </div>
            </div>
            <div className="md:max-w-[50vw] order-1 md:order-1 md:justify-end h-auto md:flex">
              <img
                src={img3}
                alt=""
                className="h-[100%] md:z-50 md:transform-img"
              />
            </div>
          </div>

          <div className="max-w-[100vw] md:p-8 flex flex-col md:flex-row md:justify-between mt-8 mb-8">
            <div className="md:w-[100vw] order-2 md:order-1 content my-auto">
              <h1 className="text-3xl font-bold md:pl-5 md:pr-5 text-center md:text-left specialfont">
                Connect With Peoples
              </h1>
              <p className="md:w-[30vw] w-[100vw]  md:pt-[5vh] text-center md:text-left md:pl-5">
                Your gateway to building connections and accessing support in
                your university journey, connect university ambassadors who are
                experienced students and have already been through the admission
                process and are eager to share their knowledge and expertise
              </p>
              <div className="flex space-x-5 md:justify-start justify-center pt-[5vh] md:pl-5">
                <button className="bg-black hover:text-black hover:bg-white text-white text-2xl rounded-full pl-3 pr-3 border-2 transition duration-300 border-black">
                  <Link to={"/blog"}>
                    Explore<em className="font-bold">↗</em>
                  </Link>
                </button>
              </div>
            </div>
            <div className="md:max-w-[50vw] order-1 md:order-2 md:justify-end h-auto md:flex">
              <img
                src={img4}
                alt=""
                className="h-[100%] md:z-50 md:transform-img"
              />
            </div>
          </div>
        </div>

        {/* <div className='features mt-10 md:w-[80vw] mx-auto'>
          <section className="rounded-xl">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="mb-8 lg:mb-16">
                <h2 className="mb-4 text-center text-2xl tracking-tight font-bold text-gray-900">
                  Why Choose Us?
                </h2>
                <p className="text-gray-500 sm:text-xl dark:text-gray-400 text-center">
                  A New way to find best college for you
                </p>
              </div>
              <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <motion.div
                  whileHover={
                    {
                      scale: 0.75
                    }
                  }
                  className='px-5 py-6 rounded-xl bg-blue-600  shadow-xl shadow-gray-800'>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <FaUnlockAlt className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">Explore Collges</h3>
                  <p className="text-gray-500 dark:text-gray-400">

                  </p>
                </motion.div>
                <motion.div
                  whileHover={
                    {
                      scale: 0.75
                    }
                  }
                  className='px-5 py-6 rounded-xl bg-white shadow-xl shadow-gray-800'>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <RiNodeTree className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-black">Explore Scholarships</h3>
                  <p className="text-gray-500 dark:text-gray-400">

                  </p>
                </motion.div>
                <motion.div
                  whileHover={
                    {
                      scale: 0.75
                    }
                  }
                  className='px-5 py-6 rounded-xl bg-blue-600 shadow-xl shadow-gray-800'>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <SiHiveBlockchain className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Decentralized
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">

                  </p>
                </motion.div>
                <motion.div
                  whileHover={
                    {
                      scale: 0.75
                    }
                  }
                  className='px-5 py-6 rounded-xl bg-white shadow-xl shadow-gray-800'>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <AiOutlineSafetyCertificate className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-black">Resume Building</h3>
                  <p className="text-gray-500 dark:text-gray-400">

                  </p>
                </motion.div>
                <motion.div
                  whileHover={
                    {
                      scale: 0.75
                    }
                  }
                  className='px-5 py-6 rounded-xl bg-blue-600 shadow-xl shadow-gray-800'>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <FaHandHoldingUsd className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Easy to Use
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">

                  </p>
                </motion.div>
                <motion.div
                  whileHover={
                    {
                      scale: 0.75
                    }
                  }
                  className='px-5 py-6 rounded-xl bg-white shadow-xl shadow-gray-800'>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <HiClipboardDocumentCheck className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-black">Best Courses</h3>
                  <p className="text-gray-500 dark:text-gray-400">

                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </div> */}
      </div>
    </>
  );
};

export default Intro;
