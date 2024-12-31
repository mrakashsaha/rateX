import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

// Patners logo
import googleCloud from '../assets/patnersLogo/icons8-google-cloud-50.svg'
import microsoft from '../assets/patnersLogo/icons8-azure-50.svg'
import github from '../assets/patnersLogo/icons8-github-50.svg'
import slack from '../assets/patnersLogo/icons8-slack-50.svg'
import aws from '../assets/patnersLogo/icons8-amazon-web-services-50.svg'
import atlassian from '../assets/patnersLogo/icons8-confluence-50.svg'
import adobe from '../assets/patnersLogo/icons8-adobe-50.svg'
import stripe from '../assets/patnersLogo/icons8-stripe-50.svg'
import salesforce from '../assets/patnersLogo/icons8-salesforce-50.svg'

const Meet = () => {

    const partners1 = [
        {
            name: "Google Cloud",
            logo: googleCloud,
            role: "Cloud Solutions",
            description: "Empowering businesses with cutting-edge cloud solutions, data analytics, and AI-powered services to scale globally and securely."
        },
        {
            name: "Microsoft Azure",
            logo: microsoft,
            role: "Cloud Computing",
            description: "Providing comprehensive cloud computing services, enabling seamless deployment and management of applications."
        },
        {
            name: "GitHub",
            logo: github,
            role: "Version Control",
            description: "The world’s leading platform for version control and collaboration, enabling developers to build and share projects effortlessly."
        }
    ];

    const partners2 = [
        {
            name: "Slack",
            logo: slack,
            role: "Team Collaboration",
            description: "Revolutionizing team collaboration and communication with intuitive and productive tools."
        },
        {
            name: "AWS",
            logo: aws,
            role: "Cloud Infrastructure",
            description: "Delivering reliable and scalable cloud infrastructure services to businesses of all sizes worldwide."
        },
        {
            name: "Atlassian",
            logo: atlassian,
            role: "Team Productivity",
            description: "Supporting teams with innovative tools like Jira and Trello to optimize workflows and achieve goals efficiently."
        }
    ];

    const partners3 = [
        {
            name: "Adobe",
            logo: adobe,
            role: "Creative Solutions",
            description: "Providing industry-leading creative tools for design, marketing, and digital media solutions."
        },
        {
            name: "Salesforce",
            logo: salesforce,
            role: "Customer Relationship",
            description: "The world’s #1 CRM platform, enabling businesses to connect with customers and grow relationships."
        },
        {
            name: "Stripe",
            logo: stripe,
            role: "Online Payments",
            description: "Enabling secure and seamless online payments for businesses of all sizes."
        }
    ];

    return (
        <div className='mx-auto container'>
            <div className='mt-20 mb-10 text-center'>
                <h2 className='text-4xl font-semibold'>Meet Our Partners</h2>
                <h5 className='text-lg my-3'>Partnering with industry leaders for excellence...</h5>
            </div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                spaceBetween={25}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className='pb-8'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2 md:p-0'>
                        {partners1.map((patner, idx) => (
                            <div key={idx} className="bg-white border border-[#F5F7F9] shadow-md rounded-lg p-10 flex flex-col">
                                <p className="text-lg">
                                    {patner.description}
                                </p>
                                <hr className="my-4" />
                                <div className="flex items-center mt-auto">
                                    <img
                                        className="w-12 h-12 rounded-full"
                                        src={patner.logo}
                                        alt="User profile"
                                    />
                                    <div className="ml-4">
                                        <h3 className=" text-lg font-semibold">{patner.name}</h3>
                                        <p className="">{patner.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </SwiperSlide>
                <SwiperSlide className='pb-8'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2 md:p-0'>
                        {partners2.map((patner, idx) => (
                            <div key={idx} className="bg-white border border-[#F5F7F9] shadow-md rounded-lg p-10 flex flex-col">
                                <p className="text-lg">
                                    {patner.description}
                                </p>
                                <hr className="my-4" />
                                <div className="flex items-center mt-auto">
                                    <img
                                        className="w-12 h-12 rounded-full"
                                        src={patner.logo}
                                        alt="User profile"
                                    />
                                    <div className="ml-4">
                                        <h3 className=" text-lg font-semibold">{patner.name}</h3>
                                        <p className="">{patner.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </SwiperSlide>
                <SwiperSlide className='pb-8'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2 md:p-0'>
                        {partners3.map((patner, idx) => (
                            <div key={idx} className="bg-white border border-[#F5F7F9] shadow-md rounded-lg p-10 flex flex-col">
                                <p className="text-lg">
                                    {patner.description}
                                </p>
                                <hr className="my-4" />
                                <div className="flex items-center mt-auto">
                                    <img
                                        className="w-12 h-12 rounded-full"
                                        src={patner.logo}
                                        alt="User profile"
                                    />
                                    <div className="ml-4">
                                        <h3 className=" text-lg font-semibold">{patner.name}</h3>
                                        <p className="">{patner.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Meet;