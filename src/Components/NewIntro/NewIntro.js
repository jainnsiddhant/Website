import React from "react";
import homebg from "../../images/homebg.jpg";
import harvard from "../../images/harvard.jpg";
import oxford from "../../images/oxford.jpg";
import goldmansachs from "../../images/GoldmanSachs.jpg";
import princeton from "../../images/princeton.jpg";
import interview from "../../images/interview.jpg";
import resume from "../../images/resume.jpg";
import essay from "../../images/essay.jpg";
import profile from "../../images/profile.jpg";
import resumebuilder from "../../images/resumebuilder.jpg";
import scho from "../../images/scho.jpg";
import uk from "../../images/uk.jpg";
import { Link } from "react-router-dom";
const NewIntro = () => {
  return (
    <>
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-200 to-purple-500" />
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-400" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="block max-w-sm rounded-lg bg-white bg-cover p-6 shadow-lg ">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
              Card title
            </h5>
            <p className="mb-4 text-base text-neutral-600">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              type="button"
              className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewIntro;
