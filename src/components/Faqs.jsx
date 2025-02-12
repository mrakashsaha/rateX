import React from 'react';
import { Helmet } from 'react-helmet';
import bg5 from "../assets/backgrounds/bg5.webp"

const Faqs = () => {
    return (
        <div>
            <Helmet>
                <title>RateX | Faqs</title>
            </Helmet>
            <div className="relative h-52 lg:h-60 bg-cover" style={{ backgroundImage: `url(${bg5})` }}>
                <div className="absolute inset-0 bg-black/10 flex flex-col justify-center p-16 text-white">
                    <div className='mx-auto container'>
                        <p className="text-sm font-light p-2">RateX / Faqs</p>
                        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
                    </div>
                </div>
            </div>
            <div className="mt-10 mb-20 md:mb-28 p-2">
                <div className='container mx-auto flex gap-20'>
                    <div className=''>
                        <div>
                            <h2 className='font-bold text-2xl'>General Questions</h2>
                        </div>
                        <div className="join join-vertical w-full">
                            <div className="collapse rounded-none collapse-arrow join-item border-base-300 border-b">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-lg font-semibold">1. What is Rate-X?</div>
                                <div className="collapse-content text-lg">
                                    <p>Rate-X is a review platform where users can rate and review services added by sellers. It helps customers make informed decisions based on real feedback.</p>
                                </div>
                            </div>
                            <div className="collapse rounded-none collapse-arrow join-item border-base-300 border-b">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-lg font-semibold">2. How does Rate-X work?</div>
                                <div className="collapse-content text-lg">
                                    <p>Sellers list their services on Rate-X, and customers who have used those services can leave ratings and reviews. This ensures transparency and builds trust between buyers and service providers.</p>
                                </div>
                            </div>

                            <div className="collapse rounded-none collapse-arrow join-item border-base-300 border-b">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-lg font-semibold">3. Is Rate-X free to use?</div>
                                <div className="collapse-content text-lg">
                                    <p>Yes, Rate-X is free for customers who want to read and post reviews. However, sellers may have premium options for enhanced visibility.</p>
                                </div>
                            </div>

                            <div className='pt-8'>
                                <h2 className='font-bold text-2xl'>For Customer</h2>
                            </div>

                            {/* For Customers */}
                            <div className="collapse rounded-none collapse-arrow join-item border-base-300 border-b">
                                <input type="radio" name="my-accordion-5" />
                                <div className="collapse-title text-lg font-semibold">1. How do I write a review?</div>
                                <div className="collapse-content text-lg">
                                    <p>To write a review, simply search for the service you used, click on it, and leave a rating along with your feedback.</p>
                                </div>
                            </div>

                            <div className="collapse rounded-none collapse-arrow join-item border-base-300 border-b">
                                <input type="radio" name="my-accordion-5" />
                                <div className="collapse-title text-lg font-semibold">2. Can I edit or delete my review?</div>
                                <div className="collapse-content text-lg">
                                    <p>Yes, you can edit or delete your review from your account dashboard under "My Reviews."</p>
                                </div>
                            </div>

                            <div className="collapse rounded-none collapse-arrow join-item border-base-300 border-b">
                                <input type="radio" name="my-accordion-5" />
                                <div className="collapse-title text-lg font-semibold">3. How can I report a fake review?</div>
                                <div className="collapse-content text-lg">
                                    <p>If you come across a suspicious review, you can report it using the “Report” button. Our moderation team will review it.</p>
                                </div>
                            </div>


                            {/* For Sellers */}
                            <div className="collapse rounded-none collapse-arrow join-item border-base-300 border-b mt-4">
                                <input type="radio" name="my-accordion-6" />
                                <div className="collapse-title text-lg font-semibold">1. How can I add my service to Rate-X?</div>
                                <div className="collapse-content text-lg">
                                    <p>You can sign up as a seller and submit your service details. Once verified, it will be listed on Rate-X.</p>
                                </div>
                            </div>

                            <div className="collapse rounded-none collapse-arrow join-item border-base-300 border-b">
                                <input type="radio" name="my-accordion-6" />
                                <div className="collapse-title text-lg font-semibold">2. Can I respond to customer reviews?</div>
                                <div className="collapse-content text-lg">
                                    <p>Yes, sellers can reply to reviews to address concerns and engage with customers.</p>
                                </div>
                            </div>

                            <div className="collapse rounded-none collapse-arrow join-item border-base-300 border-b">
                                <input type="radio" name="my-accordion-6" />
                                <div className="collapse-title text-lg font-semibold">3. How can I improve my ratings?</div>
                                <div className="collapse-content text-lg">
                                    <p>Providing excellent service and engaging with customer feedback positively can help improve your ratings.</p>
                                </div>
                            </div>

                            {/* Account & Security */}
                            <div className="collapse rounded-none collapse-arrow join-item border-base-300 border-b mt-4">
                                <input type="radio" name="my-accordion-7" />
                                <div className="collapse-title text-lg font-semibold">1. How do I create an account?</div>
                                <div className="collapse-content text-lg">
                                    <p>Click on "Sign Up" and register with your email or social media accounts.</p>
                                </div>
                            </div>

                            <div className="collapse rounded-none collapse-arrow join-item border-base-300 border-b">
                                <input type="radio" name="my-accordion-7" />
                                <div className="collapse-title text-lg font-semibold">2. I forgot my password. How can I reset it?</div>
                                <div className="collapse-content text-lg">
                                    <p>Go to the login page, click on "Forgot Password," and follow the instructions to reset it.</p>
                                </div>
                            </div>

                            <div className="collapse rounded-none collapse-arrow join-item border-base-300 border-b">
                                <input type="radio" name="my-accordion-7" />
                                <div className="collapse-title text-lg font-semibold">3. How can I delete my account?</div>
                                <div className="collapse-content text-lg">
                                    <p>You can request account deletion from the settings page or contact our support team for assistance.</p>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div>
                        This is form
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faqs;