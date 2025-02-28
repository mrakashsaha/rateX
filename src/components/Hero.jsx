import React from 'react';
import slider1 from '../assets/sliders/slider_1.png'
import slider2 from '../assets/sliders/slider_2.png'
import slider3 from '../assets/sliders/slider_3.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper">

                <SwiperSlide>
                    <div
                        className="hero"
                        style={{
                            backgroundImage: `url(${slider1})`,
                        }}>
                        <div className="hero-overlay bg-opacity-40 dark:bg-opacity-0 md:bg-opacity-0"></div>
                        <div className='container mx-auto'>
                            <div>
                                <div className='w-11/12 lg:w-1/2 py-40 px-6'>
                                    <h2 className='text-white dark:text-base-300 text-3xl md:text-4xl lg:text-5xl font-semibold lg:leading-snug'>Find the Right Service for Your Needs, Anytime</h2>
                                    <p className='text-white dark:text-base-300 py-4'>Explore a wide range of trusted services, read reviews & rating, and make informed decisions effortlessly!</p>
                                    <div className='dark:bg-base-200 bg-white p-4 rounded-md  flex flex-col md:flex-row gap-6 my-6'>
                                        <label className="input grow flex items-center gap-2">
                                            <input type="text" className="grow" placeholder="Service Title / Keywords..." />
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                                className="h-4 w-4 opacity-70">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                                    clipRule="evenodd" />
                                            </svg>
                                        </label>
                                        <Link to={"/services"} className='btn btn-md bg-[#04B2B2] hover:bg-[#038787] text-white dark:text-base-300 border-none rounded-md px-7'>Search</Link>
                                    </div>
                                    <div className='font-medium flex items-center gap-x-6 mt-10'>
                                        <h4 className='text-white dark:text-base-300'>Top Services:</h4>
                                        <div className='gap-2 flex flex-wrap'>
                                            <button className='btn btn-sm btn-outline border-base-200 hover:border-none text-white dark:text-base-300 px-3 rounded-md hover:bg-[#038787]'>Graphics</button>
                                            <button className='btn btn-sm btn-outline border-base-200 hover:border-none text-white dark:text-base-300 px-3 rounded-md hover:bg-[#038787]'>Website</button>
                                            <button className='btn btn-sm btn-outline border-base-200 hover:border-none text-white dark:text-base-300 px-3 rounded-md hover:bg-[#038787]'>IOT</button>
                                            <button className='btn btn-sm btn-outline border-base-200 hover:border-none text-white dark:text-base-300 px-3 rounded-md hover:bg-[#038787]'>Robotics</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero"
                        style={{
                            backgroundImage: `url(${slider2})`,
                        }}>
                        <div className="hero-overlay bg-opacity-40 md:bg-opacity-0"></div>
                        <div className='container mx-auto'>
                            <div>
                                <div className='w-11/12 lg:w-1/2 py-40 px-6'>
                                    <h2 className='text-[#151515] text-3xl md:text-4xl lg:text-5xl font-semibold lg:leading-snug'>Feedback Shapes Better Service Community</h2>
                                    <p className='text-[#151515] py-4'>Share your experiences, post reviews, and help others for getting connected with the best service providers.</p>
                                    <div className='bg-white dark:bg-base-200 p-4 rounded-md flex flex-col md:flex-row gap-6 my-6'>
                                        <label className="input grow flex items-center gap-2">
                                            <input type="text" className="grow" placeholder="Service Title / Keywords..." />
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                                className="h-4 w-4 opacity-70">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                                    clipRule="evenodd" />
                                            </svg>
                                        </label>
                                        <Link to={"/services"} className='btn btn-md bg-[#04B2B2] hover:bg-[#038787] text-white dark:text-base-300 border-none rounded-md px-7'>Search</Link>
                                    </div>
                                    <div className='font-medium flex items-center gap-x-6 mt-10'>
                                        <h4 className='text-[#151515]'>Top Services:</h4>
                                        <div className='gap-2 flex flex-wrap'>
                                            <button className='btn btn-sm btn-outline border-[#151515]/50 hover:border-none text-[#151515] px-3 rounded-md hover:bg-[#038787]'>Graphics</button>
                                            <button className='btn btn-sm btn-outline border-[#151515]/50 hover:border-none text-[#151515] px-3 rounded-md hover:bg-[#038787]'>Website</button>
                                            <button className='btn btn-sm btn-outline border-[#151515]/50 hover:border-none text-[#151515] px-3 rounded-md hover:bg-[#038787]'>IOT</button>
                                            <button className='btn btn-sm btn-outline border-[#151515]/50 hover:border-none text-[#151515] px-3 rounded-md hover:bg-[#038787]'>Robotics</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero"
                        style={{
                            backgroundImage: `url(${slider3})`,
                        }}>
                        <div className="hero-overlay bg-opacity-40 md:bg-opacity-0"></div>
                        <div className='container mx-auto'>
                            <div>
                                <div className='w-11/12 lg:w-1/2 py-40 px-6'>
                                    <h2 className='text-[#151515] text-3xl md:text-4xl lg:text-5xl font-semibold  lg:leading-snug'>Discover, Review, and Get Reliable Services</h2>
                                    <p className='text-[#151515] py-4'>Gain insights from genuine reviews and make confident choices for any kind of service requirement.</p>
                                    <div className='bg-white dark:bg-base-200 p-4 rounded-md  flex flex-col md:flex-row gap-6 my-6'>
                                        <label className="input grow flex items-center gap-2">
                                            <input type="text" className="grow" placeholder="Service Title / Keywords..." />
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                                className="h-4 w-4 opacity-70">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                                    clipRule="evenodd" />
                                            </svg>
                                        </label>
                                        <Link to={"/services"} className='btn btn-md bg-[#04B2B2] hover:bg-[#038787] text-white dark:text-base-300 border-none rounded-md px-7'>Search</Link>
                                    </div>
                                    <div className='font-medium flex items-center gap-x-6 mt-10'>
                                        <h4 className='text-[#151515]'>Top Services:</h4>
                                        <div className='gap-2 flex flex-wrap'>
                                            <button className='btn btn-sm btn-outline border-[#151515]/50 hover:border-none text-[#151515] px-3 rounded-md hover:bg-[#038787]'>Graphics</button>
                                            <button className='btn btn-sm btn-outline border-[#151515]/50 hover:border-none text-[#151515] px-3 rounded-md hover:bg-[#038787]'>Website</button>
                                            <button className='btn btn-sm btn-outline border-[#151515]/50 hover:border-none text-[#151515] px-3 rounded-md hover:bg-[#038787]'>IOT</button>
                                            <button className='btn btn-sm btn-outline border-[#151515]/50 hover:border-none text-[#151515] px-3 rounded-md hover:bg-[#038787]'>Robotics</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;