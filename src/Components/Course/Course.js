import React from "react";
import Cards from "./Cards";
import Sections from "./Sections";
import Table from "./Table";

const Course = () => {
    return (
        <>
            <section id="course">
                <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h2 data-aos='fade-right' className='mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
                        Top Course
                    </h2>
                    <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                        Explore the pinnacle of education with our top courses selection, meticulously curated to propel your knowledge and career to new heights.
                    </p>
                </div>
                <Cards />
                <Sections />
                <Table />
            </section>
        </>
    )
}

export default Course