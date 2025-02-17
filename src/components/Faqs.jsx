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
                <div className="absolute inset-0 bg-black/10 flex flex-col justify-center p-16 text-white dark:text-base-200">
                    <div className='mx-auto container'>
                        <p className="text-sm font-light p-2">RateX / Faqs</p>
                        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
                    </div>
                </div>
            </div>
            <div className="mt-10 mb-20 md:mb-28 p-2">
                <div className='container mx-auto flex flex-col md:flex-row gap-10'>
                    <div className='w-full md:w-1/2 lg:w-4/6'>
                        <div>
                            <h2 className='font-bold text-xl md:text-2xl mb-2 p-2'>General Questions</h2>
                            <div className="collapse collapse-arrow border  border-base-300">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-lg md:text-xl font-medium">1. What is Rate-X?</div>
                                <div className="collapse-content">
                                    <p>Rate-X is a service review platform where users can add services, share their experiences through reviews, and explore reviews from other users.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow border  border-base-300">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-lg md:text-xl font-medium">2. Who can use Rate-X?</div>
                                <div className="collapse-content">
                                    <p>Anyone can browse services, but you need to create an account to add services, write reviews, and manage them.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow border  border-base-300">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-lg md:text-xl font-medium">3. Is Rate-X free to use?</div>
                                <div className="collapse-content">
                                    <p>Yes! Rate-X is completely free for users to add services and share their reviews.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow border  border-base-300">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-lg md:text-xl font-medium">4. How do I contact Rate-X support?</div>
                                <div className="collapse-content">
                                    <p>You can reach out to our support team via email at support@rate-x.com or use the contact form on our website.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className='font-bold text-xl md:text-2xl mt-8 mb-2 p-2'>Account & Authentication</h2>
                            <div className="collapse collapse-arrow border  border-base-300">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-lg md:text-xl font-medium">1. How do I create an account on Rate-X?</div>
                                <div className="collapse-content">
                                    <p>Click the "Register" button, fill in your name, email, photo URL, and password, and then submit the form.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow border  border-base-300">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-lg md:text-xl font-medium">2. What authentication methods does Rate-X support?</div>
                                <div className="collapse-content">
                                    <p>You can log in using email & password or through Google authentication.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow border  border-base-300">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-lg md:text-xl font-medium">3. I forgot my password. How can I reset it?</div>
                                <div className="collapse-content">
                                    <p>Currently, we do not support password recovery. However, you can register a new account with a different email.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow border  border-base-300">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-lg md:text-xl font-medium">4. Why am I getting an error when trying to log in?</div>
                                <div className="collapse-content">
                                    <p>Ensure that your email and password are correct. Also, make sure your password meets our security requirements.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className='font-bold text-xl md:text-2xl mt-8 mb-2 p-2'>Services & Reviews</h2>
                            <div className="collapse collapse-arrow border  border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-lg md:text-xl font-medium">1. How do I add a service to Rate-X?</div>
                                <div className="collapse-content">
                                    <p>After logging in, navigate to the "Add Service" page and fill in the required details, including title, description, price, and category.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow border  border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-lg md:text-xl font-medium">2. Can I edit or delete a service I’ve added?</div>
                                <div className="collapse-content">
                                    <p>Yes, you can manage your added services from the "My Services" page. You can update details or remove a service.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow border  border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-lg md:text-xl font-medium">3. How can I leave a review on a service?</div>
                                <div className="collapse-content">
                                    <p>Visit the service details page, enter your rating, write your feedback, and submit your review.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow border  border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-lg md:text-xl font-medium">4. Can I edit or delete my reviews?</div>
                                <div className="collapse-content">
                                    <p>Yes, you can update or delete your reviews from the "My Reviews" page.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="grow">
                        <div className="mb-2 p-2 text-center">
                            <h2 className='font-bold text-xl md:text-2xl'>Ask Your Question</h2>
                            <p>Ask Anything, We're Here to Help</p>
                        </div>
                        <div className="card  bg-base-100 w-full shadow-md">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="name" placeholder="Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Your Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea type="text" placeholder="Your Message" className="textarea-bordered textarea h-24" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#04B2B2] hover:bg-[#038787] text-white dark:text-base-300">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faqs;