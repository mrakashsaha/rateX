import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import axiosAPI from '../axios/axiosAPI';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import bg3 from '../assets/backgrounds/bg3.jpg'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../axios/UseAxiosSecure';

const AddServices = () => {
    const navigate =  useNavigate();
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const handleAddService = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());

        // Preparing Data For Post into MongoDB Through API
        const { imageURL, title, companyName, companyURL, description, category, price } = initialData;
        const userEmail = user.email;
        const date = moment().toISOString();

        const serviceDoc = {
            imageURL, title, companyName, companyURL, description, category, price, userEmail, date
        }
        axiosSecure.post("/services", serviceDoc)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Service is Added Sucessfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/myServices");
                }
            })
            .catch(error => console.log(error.message));
    }

    return (
        <div>
            <Helmet>
                <title>RateX | Add Services</title>
            </Helmet>
            <div className="relative h-52 lg:h-60 bg-cover" style={{ backgroundImage: `url(${bg3})` }}>
                <div className="absolute inset-0 bg-black/10 flex flex-col justify-center p-16 text-white dark:text-base-300">
                    <div className='mx-auto container'>
                        <p className="text-sm font-light p-2">RateX / Add Service</p>
                        <h1 className="text-4xl font-bold">Add a New Service</h1>
                    </div>
                </div>
            </div>
            <div className="mt-10 mb-20 md:mb-28 p-2">
                <form onSubmit={handleAddService} className="card-body bg-base-100 drop-shadow-lg max-w-5xl mx-auto">
                    {/* Service Image */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Image</span>
                        </label>
                        <input
                            name='imageURL'
                            type="url"
                            className="input input-bordered rounded-md"
                            placeholder="Enter Service Image URL"
                            required
                        />
                    </div>

                    {/* Service Title */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Title</span>
                        </label>
                        <input
                            name='title'
                            type="text"
                            className="input input-bordered rounded-md"
                            placeholder="Enter Service Title"
                            required
                        />
                    </div>

                    {/* Company Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company Name</span>
                        </label>
                        <input
                            name='companyName'
                            type="text"
                            className="input input-bordered rounded-md"
                            placeholder="Enter Company Name"
                            required
                        />
                    </div>

                    {/* Website */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Website</span>
                        </label>
                        <input
                            name='companyURL'
                            type="url"
                            className="input input-bordered rounded-md"
                            placeholder="Enter Website URL"
                        />
                    </div>

                    {/* Description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            name='description'
                            className="textarea textarea-bordered rounded-md"
                            placeholder="Enter Description"
                            required
                        ></textarea>
                    </div>

                    {/* Category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select required name='category' defaultValue="-- Select Category --" className="select select-bordered rounded-md">
                            <option disabled>-- Select Category --</option>
                            <option value="Cleaning">Cleaning</option>
                            <option value="Education">Education</option>
                            <option value="Fitness">Fitness</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="IT Services">IT Services</option>
                            <option value="Transport">Transport</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    {/* Price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            name='price'
                            type="number"
                            className="input input-bordered rounded-md"
                            placeholder="Enter Price in USD"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="form-control py-2">
                        <input className='btn-md btn bg-[#04B2B2] hover:bg-[#038787] text-white dark:text-base-300' type="submit" value="Add Service" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddServices;