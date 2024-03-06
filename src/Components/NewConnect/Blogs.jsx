import React from "react";
import { motion } from 'framer-motion';
import harvard from "../../images/harvard.jpg"
import GoldmanSachs from "../../images/GoldmanSachs.jpg" 
import Blog1 from "../../images/Language-Cafe.png" 
import Blog2 from "../../images/Intercultural-Competence.png" 
import Blog3 from "../../images/public-speaking-blog.png" 
import Blog4 from "../../images/skills_enrichment_800x450.png"

const Blog = () => {
    return(
        <>
            <section id="featuredblogs" className="mt-10">
                <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h2 data-aos='fade-right' className='mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
                        Features Blogs
                    </h2>
                    <p className="mb-3 text-lg font-normal text-gray-500">
                    Unlock Your Path: Essential Guidance for Navigating Life in the UK.
                    </p>
                </div>

                <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0 mt-5 w-[80%] mx-auto">

                  <motion.div
                  whileHover={
                    {
                      scale: 1.5
                    }
                  }>
                   <div className="max-w-xs bg-white">
                     <a href="#instructions">
                       <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover" src={Blog1} alt="https://blogs.bath.ac.uk/academic-and-employability-skills/2024/02/26/how-to-liven-up-your-degree-with-languages/" />
                     </a>
                     <div className="p-4">
                       <a href="#instructions">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">How to liven up your degree with languages?</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">After learning Japanese and French with the Skills Centre, final year MChem student Hannah Glover decided to carry on with German to liven up her degree even further. Find out how Hannah manages it all... <a className="underline text-blue-400" target="_blank" href="https://blogs.bath.ac.uk/academic-and-employability-skills/2024/02/26/how-to-liven-up-your-degree-with-languages/">read more</a></p>
                     </div>
                   </div>
                   </motion.div>

                  <motion.div
                  whileHover={
                    {
                      scale: 1.5
                    }
                  }>
                   <div className="max-w-xs bg-white">
                     <a href="#savemoney">
                       <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover" src={Blog2} alt="https://blogs.bath.ac.uk/academic-and-employability-skills/2024/02/12/why-is-intercultural-competence-a-great-addition-to-your-cv/" />
                     </a>
                     <div className="p-4">
                       <a href="#savemoney">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Why is intercultural competence a great addition to your CV?</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">In today's interconnected world, where diversity is not just a buzzword but a lived reality, intercultural competence has become essentia....... <a className="text-blue-500 underline" href="https://blogs.bath.ac.uk/academic-and-employability-skills/2024/02/12/why-is-intercultural-competence-a-great-addition-to-your-cv/" target="_blank">read more</a></p>
                     </div>
                   </div>
                   </motion.div>

                  <motion.div
                  whileHover={
                    {
                      scale: 1.5
                    }
                  }>
                   <div className="max-w-xs bg-white">
                     <a href="#instructions">
                       <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover" src={Blog3} alt="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/11/07/your-road-to-successful-public-speaking/" />
                     </a>
                     <div className="p-4">
                       <a href="#instructions">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Your road to successful public speaking</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">Do you feel anxious at the thought of giving a speech, presenting at a conference, completing a viva, or attending an interview? If so, you’re not alone. <a className="text-blue-600 underline" href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/11/07/your-road-to-successful-public-speaking/" target="_blank">read more</a></p>
                     </div>
                   </div>
                   </motion.div>

                  <motion.div
                  whileHover={
                    {
                      scale: 1.5
                    }
                  }>
                   <div className="max-w-xs bg-white">
                     <a href="#savemoney">
                       <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover" src={Blog4} alt="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/10/04/meet-the-skills-enrichment-team/" />
                     </a>
                     <div className="p-4">
                       <a href="#savemoney">
                         <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Meet the skills enrichment team</h5>
                       </a>
                       <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">As the Skills Centre’s programme of academic and employability skills workshops gets underway, we introduce our friendly team of teachers... <a className="text-blue-600 underline" href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/11/07/your-road-to-successful-public-speaking/" target="_blank">read more</a></p>
                     </div>
                   </div>
                   </motion.div>

                </div>
            </section>
        </>
    )
}

export default Blog;
