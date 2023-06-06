import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
const About = () => {
    return (
        <>
            <Navbar />
            <div className="py-16 bg-white">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-5/12">
                            <img
                                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                                alt="image"
                                loading="lazy"
                                width=""
                                height=""
                            />
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                                Nuxt development is carried out by passionate developers
                            </h2>
                            <p className="mt-6 text-gray-600">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis
                                voluptatem accusantium nemo perspiciatis delectus atque autem!
                                Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur!
                                Officiis id consequatur atque doloremque!
                            </p>
                            <p className="mt-4 text-gray-600">
                                {" "}
                                Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
                                expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur
                                quam mollitia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>







            <>
                {/* component */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                    <div className="text-center pb-12">
                        <h2 className="text-base font-bold text-indigo-600">
                            We have the best equipment
                        </h2>
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                            Check our awesome team members
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <img
                                    className="object-center object-cover rounded-full h-36 w-36"
                                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                                    alt="photo"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                                <p className="text-base text-gray-400 font-normal">
                                    Software Engineer
                                </p>
                            </div>
                        </div>
                        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <img
                                    className="object-center object-cover rounded-full h-36 w-36"
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                                    alt="photo"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                                <p className="text-base text-gray-400 font-normal">
                                    Graphic Designer
                                </p>
                            </div>
                        </div>
                        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <img
                                    className="object-center object-cover rounded-full h-36 w-36"
                                    src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
                                    alt="photo"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                                <p className="text-base text-gray-400 font-normal">Dev Ops</p>
                            </div>
                        </div>
                        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <img
                                    className="object-center object-cover rounded-full h-36 w-36"
                                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                                    alt="photo"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                                <p className="text-base text-gray-400 font-normal">
                                    Software Engineer
                                </p>
                            </div>
                        </div>
                        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <img
                                    className="object-center object-cover rounded-full h-36 w-36"
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                                    alt="photo"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                                <p className="text-base text-gray-400 font-normal">
                                    Graphic Designer
                                </p>
                            </div>
                        </div>
                        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <img
                                    className="object-center object-cover rounded-full h-36 w-36"
                                    src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
                                    alt="photo"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                                <p className="text-base text-gray-400 font-normal">Dev Ops</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>

            <Footer />
        </>
    )
}

export default About