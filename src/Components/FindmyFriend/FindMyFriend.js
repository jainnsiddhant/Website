import React, { useRef } from "react";
import { motion } from "framer-motion";
import { textAnimation } from "../Animation/Animation";
import form from '../../images/form.jpg';

import data from "../../constants/data_fmf";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './findmyfriend.css'
import left from '../../images/left.png'
import right from '../../images/right.png'

import arrow1 from "../../images/arrow1.jpg";
import party from '../../images/party.jpg'
import payment from '../../images/payment.jpg'



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
            Connecting Indian students across UK cities for epic events that break the ice and build community. Our gatherings are more than just parties—they're opportunities to forge lifelong friendships, grow your network, and create a supportive community in the UK
            </p>
          </div>

          
          <div className="space-y-6 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-0 md:space-y-0 mt-2 w-[90%] mx-auto ">
  <motion.div
    whileHover={{
      scale: 1.15,
    }}
  >
    <div className="max-w-xs bg-white justify-center items-center mx-auto">
      <div style={{textAlign: 'center'}}>
        <span className="justify center text-2xl font-bold" style={{fontStyle: 'bold', backgroundImage: 'linear-gradient(to right, #6c5b7b, #355c7d)', WebkitBackgroundClip: 'text', color: 'transparent' , fontSize:30}}>STEP 1</span>
      </div>
      <a href="#form">
        <img
          className="rounded-xl bg-white shadow-gray-800 border-2 object-cover h-70 w-80"
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
        Register with your details and preferences

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
        <span className="justify center text-2xl font-bold" style={{fontStyle: 'bold', backgroundImage: 'linear-gradient(to right, #6c5b7b, #355c7d', WebkitBackgroundClip: 'text', color: 'transparent' , fontSize:30}}>STEP 2</span>
      </div>
      <a href="#payment">
        <img
          className="rounded-xl bg-white shadow-gray-800 border-2 object-cover h-70 w-80"
          src={payment}
          alt=""
        />
      </a>
      <div className="p-4">
        <a href="#payment">
          <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
          Share Participant List & Pay

          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
        Once the 5-10 participant range is reached, make the payment (Platform or Booking fee) and receive the participant list.

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
        <span className="justify center text-2xl font-bold" style={{fontStyle: 'bold', backgroundImage: 'linear-gradient(to right, #6c5b7b, #355c7d', WebkitBackgroundClip: 'text', color: 'transparent' , fontSize:30}}>STEP 3</span>
      </div>
      <a href="#information">
        <img
          className="rounded-xl bg-white shadow-gray-800 border-2 object-cover h-70 w-80"
          src={party}
          alt=""
        />
      </a>
      <div className="p-4">
        <a href="#information">
          <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">
          Receive Confirmation & Meet

          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">
        Confirm and meet fellow Indian students in the UK.
        </p>
      </div>
    </div>
  </motion.div>
</div>

        

        </section>
      </motion.div><br></br>

      <section className="text-center w-3/4 m-auto ">
  <h1 className="text-2xl justify-center ml-2 w-2">
    <span className="justify center text-md font-bold" style={{fontStyle: 'bold', backgroundImage: 'linear-gradient(to right, #6c5b7b, #355c7d', WebkitBackgroundClip: 'text', color: 'transparent',fontSize: '20px'}}>NOTE</span>
  </h1><br></br>
  <ul className='flex flex-col justify-center text-sm' style={{ listStyleType: 'circle', fontSize: '15px', paddingLeft: 0, marginLeft: 'auto', marginRight: 'auto', maxWidth: '1200px' }}>
    <li style={{ display: 'flex', marginBottom: '1rem' }}>
      <span style={{ width: '30px', marginRight: '10px' }}>1.</span>
      The event will be scheduled to take place in a restaurant.
    </li>
    <li style={{ display: 'flex', marginBottom: '1rem' }}>
      <span style={{ width: '30px', marginRight: '10px' }}>2.</span>
      Please note that Free events do not include drinks or food.
    </li>
    <li style={{ display: 'flex', marginBottom: '1rem' }}>
      <span style={{ width: '30px', marginRight: '10px' }}>3.</span>
      Kindly also note that any booking or platform fees are separate from the event and do not cover food or drinks.
    </li>
    <li style={{ display: 'flex', marginBottom: '1rem' }}>
      <span style={{ width: '30px', marginRight: '10px' }}>4.</span>
      Should there be a need to cancel the event, rest assured that a full refund will be issued promptly.
    </li>
    <li style={{ display: 'flex', marginBottom: '1rem' }}>
      <span style={{ width: '30px', marginRight: '10px' }}>5.</span> Kindly be aware that refunds will not be possible in the event of individual cancellations or unavailability after booking.
    </li>
  </ul>
</section>






      {/* CAROUSEL */}

      <section className="text-center mb-23 mt-16">
        <h1 className="text-2xl justify-center text-bold">
          <span className="justify center text-2xl font-bold " style={{ fontStyle: 'bold', backgroundImage: 'linear-gradient(to right, #6c5b7b, #355c7d)', WebkitBackgroundClip: 'text', color: 'transparent' , fontSize:30}} >EVENTS AND STATUS</span>
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
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end items-start p-6">
  {/* <h2 className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-1">
    {item.eventtype}
  </h2> */}
  <h2 className="text-white text-3xl mb-2 uppercase">
    {item.city}
  </h2>
  {/* <p className="text-white text-sm md:text-base lg:text-lg">
    {item.description}
  </p> */}
  <p className="text-red-600 text-3xl mt-4 font-bold">{item.left}</p>
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
    className="mb-3 text-3xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl justify-center"
  >
    REGISTRATION FORM
  </h2>
  <h3 className="justify-center">Please sign in using your account in case form is not visible</h3>


  <div className="text-center">
    <iframe
    class="responsive-iframe"
      src="https://docs.google.com/forms/d/e/1FAIpQLSdnqiZnclqptWVQsNccOHOX0HmAemDsxMgXUxUsX8sSrEvtiA/viewform?embedded=true"
      height="2100"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0" 
      className="flex md:w-3/5 w-80 mx-auto mt-7"
      title="Google Form Survey"
      style={{ backgroundColor: '#94D675' }} 
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
