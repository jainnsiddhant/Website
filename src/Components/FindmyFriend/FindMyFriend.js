import React, { useRef } from "react";
import { motion } from "framer-motion";
import { textAnimation } from "../Animation/Animation";
import form from '../../images/form.jpg';
import payment from '../../images/pay.avif';
import info from '../../images/info.jpg';
import data from "../../constants/data_fmf";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../App.css'

import left from '../../images/left.png'
import right from '../../images/right.png'

import arrow1 from "../../images/arrow1.jpg";



const FindMyFriend = () => {
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    vertical:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const sliderRef = useRef(null);

  const goToNext = () => {
    sliderRef.current.slickNext(); // Call slickNext() method to go to the next slide
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev(); // Call slickPrev() method to go to the previous slide
  };

  

  return (
    <>
      <motion.div
        variants={textAnimation}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <section className="items-center justify-center">
          <div className="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h2
              data-aos="fade-right"
              className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
            >
              FindMyFriend
            </h2>
            <p className="mb-0 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
              Connect with Your Community: FindMyFriend, Your Local Link!
            </p>
          </div>

          {/* STEPS */}

          {/* <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-y-0 mt-2 w-[80%] mx-auto">
            <motion.div
              whileHover={{
                scale: 1.15,
              }}
            >
              <div className="max-w-xs bg-white justify-center items-center mx-auto">
                <div style={{textAlign: 'center'}}>
                  <span className="justify center text-2xl" style={{fontStyle: 'bold', backgroundImage: 'linear-gradient(to right, #6c5b7b, #355c7d)', WebkitBackgroundClip: 'text', color: 'transparent' , fontSize:30}}>STEP 1</span>
                </div>
                <a href="#form">
                  <img
                    className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover h-60 w-80"
                    src={form}
                    alt=""
                  />
                </a>
                <div className="p-4">
                  <a href="#form">
                    <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
                      Fill the form
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
                    Register for events with ease! Fill out our form to secure your spot and join the excitement. Quick, simple, and hassle-free!
                  </p>
                </div>
              </div>
            </motion.div>
<div>
  <img src={arrow1} />
</div>
            <motion.div
              whileHover={{
                scale: 1.15,
              }}
            >
              <div className="max-w-xs bg-white justify-center items-center mx-auto">
                <div style={{textAlign: 'center'}}>
                  <span className="justify center text-2xl" style={{fontStyle: 'bold', backgroundImage: 'linear-gradient(to right, #6c5b7b, #355c7d', WebkitBackgroundClip: 'text', color: 'transparent' , fontSize:30}}>STEP 2</span>
                </div>
                <a href="#payment">
                  <img
                    className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover h-60 w-80"
                    src={payment}
                    alt=""
                  />
                </a>
                <div className="p-4">
                  <a href="#payment">
                    <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
                      Make the payment
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
                    Complete your event registration by making payment. Secure your spot now and get ready for an unforgettable experience!
                  </p>
                </div>
              </div>
            </motion.div>
<div>
  <img src={arrow1} />
</div>
            <motion.div
              whileHover={{
                scale: 1.15,
              }}
            >
              <div className="max-w-xs bg-white justify-center items-center mx-auto">
                <div style={{textAlign: 'center'}}>
                  <span className="justify center text-2xl" style={{fontStyle: 'bold', backgroundImage: 'linear-gradient(to right, #6c5b7b, #355c7d', WebkitBackgroundClip: 'text', color: 'transparent' , fontSize:30}}>STEP 3</span>
                </div>
                <a href="#information">
                  <img
                    className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover h-60 w-80"
                    src={info}
                    alt=""
                  />
                </a>
                <div className="p-4">
                  <a href="#information">
                    <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
                      Grab the information
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
                    After payment confirmation, access all event details instantly. Get ready to dive into a world of excitement and make unforgettable memories!
                  </p>
                </div>
              </div>
            </motion.div>
          </div> */}
          <div className="space-y-6 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-0 md:space-y-0 mt-2 w-[90%] mx-auto">
  <motion.div
    whileHover={{
      scale: 1.15,
    }}
  >
    <div className="max-w-xs bg-white justify-center items-center mx-auto">
      <div style={{textAlign: 'center'}}>
        <span className="justify center text-2xl" style={{fontStyle: 'bold', backgroundImage: 'linear-gradient(to right, #6c5b7b, #355c7d)', WebkitBackgroundClip: 'text', color: 'transparent' , fontSize:30}}>STEP 1</span>
      </div>
      <a href="#form">
        <img
          className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover h-60 w-80"
          src={form}
          alt=""
        />
      </a>
      <div className="p-4">
        <a href="#form">
          <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
            Fill the form
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
          Register for events with ease! Fill out our form to secure your spot and join the excitement. Quick, simple, and hassle-free!
        </p>
      </div>
    </div>
  </motion.div>
  <div className="flex items-center justify-center">
    <img src={arrow1} className="h-20 w-20 rotate-90 md:rotate-0" alt="Arrow" />
  </div>
  <motion.div
    whileHover={{
      scale: 1.15,
    }}
  >
    <div className="max-w-xs bg-white justify-center items-center mx-auto">
      <div style={{textAlign: 'center'}}>
        <span className="justify center text-2xl" style={{fontStyle: 'bold', backgroundImage: 'linear-gradient(to right, #6c5b7b, #355c7d', WebkitBackgroundClip: 'text', color: 'transparent' , fontSize:30}}>STEP 2</span>
      </div>
      <a href="#payment">
        <img
          className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover h-60 w-80"
          src={payment}
          alt=""
        />
      </a>
      <div className="p-4">
        <a href="#payment">
          <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
            Make the payment
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
          Complete your event registration by making payment. Secure your spot now and get ready for an unforgettable experience!
        </p>
      </div>
    </div>
  </motion.div>
  <div className="flex items-center justify-center">
    <img src={arrow1} className="h-20 w-20 rotate-90 md:rotate-0" alt="Arrow" />
  </div>
  <motion.div
    whileHover={{
      scale: 1.15,
    }}
  >
    <div className="max-w-xs bg-white justify-center items-center mx-auto">
      <div style={{textAlign: 'center'}}>
        <span className="justify center text-2xl" style={{fontStyle: 'bold', backgroundImage: 'linear-gradient(to right, #6c5b7b, #355c7d', WebkitBackgroundClip: 'text', color: 'transparent' , fontSize:30}}>STEP 3</span>
      </div>
      <a href="#information">
        <img
          className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2 object-cover h-60 w-80"
          src={info}
          alt=""
        />
      </a>
      <div className="p-4">
        <a href="#information">
          <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
            Grab the information
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
          After payment confirmation, access all event details instantly. Get ready to dive into a world of excitement and make unforgettable memories!
        </p>
      </div>
    </div>
  </motion.div>
</div>

        

        </section>
      </motion.div>

      <section className="text-center mb-28 mt-16">
        <h1 className="text-2xl justify-center">
          <span className="justify center text-2xl" style={{fontStyle: 'bold', backgroundImage: 'linear-gradient(to right, #6c5b7b, #355c7d', WebkitBackgroundClip: 'text', color: 'transparent' , fontSize:30}}>NOTICE:</span><p>The amount ranges from 10Rs. to 1000Rs.</p>
        </h1>
      </section>


      {/* CAROUSEL */}

      <section className="text-center mb-23 mt-16">
        <h1 className="text-2xl justify-center underline text-bold">
          <span className="justify center text-2xl " style={{ fontStyle: 'bold', backgroundImage: 'linear-gradient(to right, #6c5b7b, #355c7d)', WebkitBackgroundClip: 'text', color: 'transparent' , fontSize:30}} >EVENTS HAPPENING</span>
        </h1>

        

        <div className="w-3/4 m-auto">
          <div className="mt-16 flex justify-center">
          <Slider {...settings} className="carousel-slider" ref={sliderRef}>
  {data.map((item, index) => (
    <div key={index} className="carousel-item p-4">
      <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
        <img
          className="w-full h-96 object-cover"
          src={item.image}
          alt={`Card ${index}`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6">
          <h2 className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-1">
            {item.eventtype}
          </h2>
          <h2 className="text-white text-base md:text-lg lg:text-xl mb-4 underline">
            {item.city}
          </h2>
          <p className="text-white text-sm md:text-base lg:text-lg">
            {item.description}
          </p>
          <p className="text-red-600 text-lg md:text-xl mt-4">{item.left}</p>
        </div>
      </div>
    </div>
  ))}
</Slider>


          </div>
          {/* Add next and previous buttons */}
          <div className="flex justify-center mt-4 gap-16 text-xl carousel_control">
          <button onClick={goToPrev} className="btn flex items-center">
  <img src={left} width={20} height={20} className="mr-2" alt="Left arrow" /> Previous
</button>

            <button onClick={goToNext} className="btn flex items-center">
  Next
  <img src={right} width={20} height={20} className="ml-2" alt="Right arrow" />
</button>

          </div>
        </div>

      </section>

      {/* FORM */}

      <section className="text-center mb-28 mt-16">
        <h2
          data-aos="fade-right"
          className="mb-3 text-3xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl underline"
        >
          FindMyFriend Form
        </h2>

        <div className="text-center">
  <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSdnqiZnclqptWVQsNccOHOX0HmAemDsxMgXUxUsX8sSrEvtiA/viewform?embedded=true"
    height="1655"
    frameBorder="0"
    marginHeight="0"
    marginWidth="0" 
    className="flex md:w-3/5 w-100 mx-auto mt-7"
    title="Google Form Survey"
    style={{backgroundColor: '#94D675'}} 
    allowfullscreen
    loading="lazy"
  >
    Loading…
  </iframe>
</div>


      </section>
    </>
  );
};

export default FindMyFriend;