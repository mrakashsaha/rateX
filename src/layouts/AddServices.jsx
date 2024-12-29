import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import axiosAPI from '../axios/axiosAPI';
import moment from 'moment';

const AddServices = () => {
    const { user } = useContext(AuthContext);
    const handleAddService = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        
        // Preparing Data For Post into MongoDB Through API
        const {imageURL,title, companyName, companyURL, description, category, price} = initialData;
        const userEmail = user.email;
        const date = moment().toISOString();

        const serviceDoc = {
            imageURL,title, companyName, companyURL, description, category, price, userEmail, date
        }
        axiosAPI.post ("/services", serviceDoc)
        .then (res=> {
            console.log (res.data);
            if (res.data.insertedId) {
                alert ('Data Inserted Sucessfully');
            }
        })
        .catch (error => console.log (error.message));
    }

    return (
        <div>
            <div className="my-10">
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
                            placeholder="Enter Price"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="form-control py-2">
                        <input className='btn btn-primary' type="submit" value="Add Service" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddServices;