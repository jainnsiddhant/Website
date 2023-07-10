import React from 'react';
import "./ScholarshipIntro.css"
import { AiOutlineSearch } from 'react-icons/ai'
const ScholarshipIntro = () => {
  return (
    <>
      <div className="py-16 min-w-[100vw] bg-white">
        <div className=" mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="https://www.ssims.edu.in/wp-content/uploads/2020/03/ssit-students-scholarship-loans.jpg"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Scholarships
              </h2>
              <p className="mt-6 text-gray-600">
                Scholarships are financial awards or grants given to students to help them pursue their education. They are typically based on various criteria such as academic achievement, athletic abilities, community involvement, or specific demographic backgrounds. Scholarships can be offered by universities, colleges, private organizations, government institutions, or individuals.
              </p>
              <p className="mt-4 text-gray-600">
                {" "}
                It's important to note that scholarship availability, eligibility criteria, and application processes vary widely. It's advisable to research and carefully review the requirements and deadlines for each scholarship opportunity to increase your chances of success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScholarshipIntro;