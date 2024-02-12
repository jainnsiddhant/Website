import React from 'react'
import homebg from '../../images/homebg.jpg'
 import harvard from '../../images/harvard.jpg'
 import oxford from '../../images/oxford.jpg'
 import goldmansachs from '../../images/GoldmanSachs.jpg'
import interview from '../../images/interview.jpg'

const NewIntro = () => {
    return (
        <>
        <section className='relative'>
  {/* Enlarged Image */}
  <img src={homebg} alt="background" className="inset-0 w-[90%] h-[80%] m-auto object-cover rounded-lg shadow-lg" />

  {/* Content */}
  <div className="absolute top-0 text-white inset-0 flex flex-col justify-center items-center z-10">
    <h1 className="text-5xl font-bold mb-4">Welcome Page</h1>
    <p className="text-lg md:text-xl mb-8">Find your university, connect with ambassadors and settle abroad.</p>
    
    {/* Search Bar */}
    <div className="max-w-lg mx-auto">
      <input type="text" placeholder="Search..." className="w-full py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring focus:border-primaryColor" />
    </div>
  </div>
</section>


      

      <section className='w-[90%] m-auto'>
      <div>
      <h2 data-aos='fade-right' className='relative w-max mt-10 mb-4 z-2 text-3xl'>
                    Top 5 Universities
                </h2>
                <h4>choose fromt the top 5 universitties in the world that teach the best education and experience.</h4>
      </div>

      <button type="button" class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none mt-4">View all Universities</button>

      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0 mt-5">

  <div className="max-w-xs bg-white">
    <a href="#">
      <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2" src={harvard} alt="" />
    </a>
    <div className="p-4">
      <a href="#">
        <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Harvard</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">United States</p>
    </div>
  </div>

  <div className="max-w-xs bg-white">
    <a href="#">
      <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2" src={harvard} alt="" />
    </a>
    <div className="p-4">
      <a href="#">
        <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Harvard</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">United States</p>
    </div>
  </div>
  
  <div className="max-w-xs bg-white">
    <a href="#">
      <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2" src={harvard} alt="" />
    </a>
    <div className="p-4">
      <a href="#">
        <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Harvard</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">United States</p>
    </div>
  </div>

  <div className="max-w-xs bg-white">
    <a href="#">
      <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2" src={harvard} alt="" />
    </a>
    <div className="p-4">
      <a href="#">
        <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Harvard</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">United States</p>
    </div>
  </div>
  {/* Repeat the above card structure for other cards */}
</div>


      </section>


      <section className='w-[90%] m-auto'>
      <div>
      <h2 data-aos='fade-right' className='relative w-max mt-10 mb-4 z-2 text-3xl'>
                    Improve Your Resume
                </h2>
                <h4>Get professional help to improve your resume , ace your interviews and more .</h4>
      </div>

      <button type="button" class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none mt-4">Learn More</button>

      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0 mt-5">

  <div className="max-w-xs bg-white">
    <a href="#">
      <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2" src={interview} alt="" />
    </a>
    <div className="p-4">
      <a href="#">
        <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Interview</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">Get ready for your big day.</p>
    </div>
  </div>

  <div className="max-w-xs bg-white">
    <a href="#">
      <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2" src={interview} alt="" />
    </a>
    <div className="p-4">
      <a href="#">
        <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Interview</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">Get ready for your big day.</p>
    </div>
  </div>
  
  <div className="max-w-xs bg-white">
    <a href="#">
      <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2" src={interview} alt="" />
    </a>
    <div className="p-4">
      <a href="#">
        <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Interview</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">Get ready for your big day.</p>
    </div>
  </div>

  <div className="max-w-xs bg-white">
    <a href="#">
      <img className="px-5 py-6 rounded-xl bg-white shadow-gray-800 border-2" src={interview} alt="" />
    </a>
    <div className="p-4">
      <a href="#">
        <h5 className="mb-2 text-lg lg:text-xl font-bold text-gray-900">Interview</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base">Get ready for your big day.</p>
    </div>
  </div>
  {/* Repeat the above card structure for other cards */}
</div>


      </section>
</>
    )
}

export default NewIntro