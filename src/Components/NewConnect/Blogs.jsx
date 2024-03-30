import React from "react";
import Blog1 from "../../images/Language-Cafe.png";
import Blog2 from "../../images/Intercultural-Competence.png";
import Blog3 from "../../images/public-speaking-blog.png";
import Blog4 from "../../images/skills_enrichment_800x450.png";
import Blog5 from "../../images/Blog5.png";
import Blog6 from "../../images/Blog6.png";
import Blog7 from "../../images/Blog7.png";
import Blog8 from "../../images/Blog8.jpg";
import { Carousel } from "flowbite-react"; 
import { FaArrowLeft } from "react-icons/fa"; 
import { FaArrowRight } from "react-icons/fa";
const Blog = () => {
  return (
    <>
      <section id="featuredblogs" className="mt-10">
        <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h2
            data-aos="fade-right"
            className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
          >
            Featured Blogs
          </h2>
          <p className="mb-3 text-lg font-normal text-gray-500">
          Discover students’ insights and perspectives so that you feel more confident
          </p>
        </div>
        <div className="">
          <Carousel 
           slideInterval={2000}
            leftControl={"<<"}
            rightControl={">>"}
            className="w-[50%]  mx-auto"
          >
            <>
              <div 
              className="" 
              >
                <a
                  href="https://blogs.bath.ac.uk/academic-and-employability-skills/2024/02/26/how-to-liven-up-your-degree-with-languages/"
                  target="_blank"
                >
                  <div className="md:min-w-[50vw] min-w-[80vw] bg-white">
                    <a
                      href="https://blogs.bath.ac.uk/academic-and-employability-skills/2024/02/26/how-to-liven-up-your-degree-with-languages/"
                      target="_blank"
                    >
                      <img
                        className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover"
                        src={Blog1}
                        alt="https://blogs.bath.ac.uk/academic-and-employability-skills/2024/02/26/how-to-liven-up-your-degree-with-languages/"
                      />
                    </a>
                    <div className="p-4">
                      <a
                        href="https://blogs.bath.ac.uk/academic-and-employability-skills/2024/02/26/how-to-liven-up-your-degree-with-languages/"
                        target="_blank"
                      >
                        <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
                          How to liven up your degree with languages?
                        </h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
                        After learning Japanese and French with the Skills
                        Centre, final year MChem student Hannah Glover decided
                        to carry on with German to liven up her degree even
                        further. Find out how Hannah manages it all...{" "}
                        <a
                          className="underline text-blue-400"
                          target="_blank"
                          href="https://blogs.bath.ac.uk/academic-and-employability-skills/2024/02/26/how-to-liven-up-your-degree-with-languages/"
                        >
                          read more
                        </a>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </>
            <>
              <div>
                <a
                  href="https://blogs.bath.ac.uk/academic-and-employability-skills/2024/02/12/why-is-intercultural-competence-a-great-addition-to-your-cv/"
                  target="_blank"
                >
                  <div className="min-w-[50vw] bg-white">
                    <a
                      href="https://blogs.bath.ac.uk/academic-and-employability-skills/2024/02/12/why-is-intercultural-competence-a-great-addition-to-your-cv/"
                      target="_blank"
                    >
                      <img
                        className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover"
                        src={Blog2}
                        alt="https://blogs.bath.ac.uk/academic-and-employability-skills/2024/02/12/why-is-intercultural-competence-a-great-addition-to-your-cv/"
                      />
                    </a>
                    <div className="p-4">
                      <a
                        href="https://blogs.bath.ac.uk/academic-and-employability-skills/2024/02/12/why-is-intercultural-competence-a-great-addition-to-your-cv/"
                        target="_blank"
                      >
                        <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
                          Why is intercultural competence a great addition to
                          your CV?
                        </h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
                        In today's interconnected world, where diversity is not
                        just a buzzword but a lived reality, intercultural
                        competence has become essentia.......{" "}
                        <a
                          className="text-blue-500 underline"
                          href="https://blogs.bath.ac.uk/academic-and-employability-skills/2024/02/12/why-is-intercultural-competence-a-great-addition-to-your-cv/"
                          target="_blank"
                        >
                          read more
                        </a>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </>
            <>
              <div>
                <a
                  href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/11/07/your-road-to-successful-public-speaking/"
                  target="_blank"
                >
                  <div className="min-w-[50vw] bg-white">
                    <a
                      href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/11/07/your-road-to-successful-public-speaking/"
                      target="_blank"
                    >
                      <img
                        className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover"
                        src={Blog3}
                        alt="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/11/07/your-road-to-successful-public-speaking/"
                      />
                    </a>
                    <div className="p-4">
                      <a
                        href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/11/07/your-road-to-successful-public-speaking/"
                        target="_blank"
                      >
                        <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
                          Your road to successful public speaking
                        </h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
                        Do you feel anxious at the thought of giving a speech,
                        presenting at a conference, completing a viva, or
                        attending an interview? If so, you’re not alone.{" "}
                        <a
                          className="text-blue-600 underline"
                          href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/11/07/your-road-to-successful-public-speaking/"
                          target="_blank"
                        >
                          read more
                        </a>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </>
            <>
              <div>
                <a
                  href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/11/07/your-road-to-successful-public-speaking/"
                  target="_blank"
                >
                  <div className="min-w-[50vw] bg-white">
                    <a
                      href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/11/07/your-road-to-successful-public-speaking/"
                      target="_blank"
                    >
                      <img
                        className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover"
                        src={Blog4}
                        alt="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/10/04/meet-the-skills-enrichment-team/"
                      />
                    </a>
                    <div className="p-4">
                      <a
                        href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/11/07/your-road-to-successful-public-speaking/"
                        target="_blank"
                      >
                        <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
                          Meet the skills enrichment team
                        </h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
                        As the Skills Centre’s programme of academic and
                        employability skills workshops gets underway, we
                        introduce our friendly team of teachers...{" "}
                        <a
                          className="text-blue-600 underline"
                          href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/11/07/your-road-to-successful-public-speaking/"
                          target="_blank"
                        >
                          read more
                        </a>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </>
            <>
              <div>
                <a
                  href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/12/12/learn-to-sign-for-inclusivity-and-employability/"
                  target="_blank"
                >
                  <div className="min-w-[50vw] bg-white">
                    <a
                      href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/12/12/learn-to-sign-for-inclusivity-and-employability/"
                      target="_blank"
                    >
                      <img
                        className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover"
                        src={Blog5}
                        alt="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/10/04/meet-the-skills-enrichment-team/"
                      />
                    </a>
                    <div className="p-4">
                      <a
                        href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/12/12/learn-to-sign-for-inclusivity-and-employability/"
                        target="_blank"
                      >
                        <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
                          Learn to sign for inclusivity and employability
                        </h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
                        Learning to sign is a great way to demonstrate your
                        commitment to inclusivity and to make a positive
                        difference in our community...{" "}
                        <a
                          className="text-blue-600 underline"
                          href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/12/12/learn-to-sign-for-inclusivity-and-employability/"
                          target="_blank"
                        >
                          read more
                        </a>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </>
            <>
              <div>
                <a
                  href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/12/06/skills-journal-what-i-learned-from-placement/"
                  target="_blank"
                >
                  <div className="min-w-[50vw] bg-white">
                    <a
                      href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/12/06/skills-journal-what-i-learned-from-placement/"
                      target="_blank"
                    >
                      <img
                        className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover"
                        src={Blog6}
                        alt="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/10/04/meet-the-skills-enrichment-team/"
                      />
                    </a>
                    <div className="p-4">
                      <a
                        href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/12/06/skills-journal-what-i-learned-from-placement/"
                        target="_blank"
                      >
                        <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
                          Skills journal: what I learned from placement
                        </h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
                        Like many, I recently completed an industrial placement
                        as part of my degree. It was a great learning
                        experience...{" "}
                        <a
                          className="text-blue-600 underline"
                          href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/12/06/skills-journal-what-i-learned-from-placement/"
                          target="_blank"
                        >
                          read more
                        </a>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </>
            <>
              <div>
                <a
                  href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/11/29/how-skills-enrichment-workshops-have-helped-me-improve-my-work/"
                  target="_blank"
                >
                  <div className="min-w-[50vw] bg-white">
                    <a
                      href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/11/29/how-skills-enrichment-workshops-have-helped-me-improve-my-work/"
                      target="_blank"
                    >
                      <img
                        className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover"
                        src={Blog7}
                        alt="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/10/04/meet-the-skills-enrichment-team/"
                      />
                    </a>
                    <div className="p-4">
                      <a
                        href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/11/29/how-skills-enrichment-workshops-have-helped-me-improve-my-work/"
                        target="_blank"
                      >
                        <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
                          How skills enrichment workshops have helped me improve
                          my work
                        </h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
                        My motivation was driven by my feedback and wanting to
                        improve in the areas that I personally thought I needed
                        to develop, like writing....{" "}
                        <a
                          className="text-blue-600 underline"
                          href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/11/29/how-skills-enrichment-workshops-have-helped-me-improve-my-work/"
                          target="_blank"
                        >
                          read more
                        </a>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </>
            <>
              <div>
                <a
                  href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/10/02/my-final-year-survival-guide/"
                  target="_blank"
                >
                  <div className="min-w-[50vw] bg-white">
                    <a
                      href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/10/02/my-final-year-survival-guide/"
                      target="_blank"
                    >
                      <img
                        className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover"
                        src={Blog8}
                        alt="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/10/04/meet-the-skills-enrichment-team/"
                      />
                    </a>
                    <div className="p-4">
                      <a
                        href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/10/02/my-final-year-survival-guide/"
                        target="_blank"
                      >
                        <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
                          My final year survival guide
                        </h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
                        My final year has recently come to an end, and as much
                        as I would like to say I wouldn’t have done it any
                        differently, there are some things that I’d change if I
                        could do it all over again...{" "}
                        <a
                          className="text-blue-600 underline"
                          href="https://blogs.bath.ac.uk/academic-and-employability-skills/2023/10/02/my-final-year-survival-guide/"
                          target="_blank"
                        >
                          read more
                        </a>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Blog;
