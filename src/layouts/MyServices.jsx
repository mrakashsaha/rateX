import React, { useContext, useEffect, useState } from 'react';
import axiosAPI from '../axios/axiosAPI';
import { AuthContext } from '../context/AuthProvider';
import MyServicesTableRow from '../components/MyServicesTableRow';
import moment from 'moment';

const MyServices = () => {
    const { user } = useContext(AuthContext);
    const [displayMyServices, setDisplayMyServices] = useState([]);
    const [modalFormValue, setModalFormValue] = useState({});
    const [reFetch, setReFetch] = useState(false);

    useEffect(() => {
        axiosAPI.get(`/myServices?email=${user?.email}`)
            .then(res => {

                setDisplayMyServices(res.data);
            });
    }, [user, reFetch])


    const handleUpdate = (id) => {
        console.log(id);
        document.getElementById('my_modal_5').showModal();
        axiosAPI.get(`/services/${id}`)
            .then(res => setModalFormValue(res.data));
    }

    const handleUpdateService = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());

        // Preparing Data For Post into MongoDB Through API
        const { imageURL, title, companyName, companyURL, description, category, price } = initialData;
        const userEmail = user.email;
        const date = moment().format('DD-MM-YYYY, hh:mm  a');

        const updateServiceDoc = {
            imageURL, title, companyName, companyURL, description, category, price, userEmail, date
        }

        axiosAPI.put(`/updateService/${modalFormValue._id}`, updateServiceDoc)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    setReFetch((alter) => !alter);
                    document.getElementById('my_modal_5').close();
                }
            })
            .catch(error => console.log(error))
    }


    const handleDelete = (id) => {

        axiosAPI.delete(`/myServices/${id}`)
            .then(res => {
                console.log(res.data);
                setReFetch((alter) => !alter);
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='container p-2 mx-auto'>
            <h2 className='text-3xl text-center font-bold pb-10'>My Services</h2>
            <div className='bg-base-100 shadow-inherit border'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Services Info</th>
                                <th>Company Name</th>
                                <th>Published Date</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                displayMyServices?.map((myService, idx) => <MyServicesTableRow key={idx} idx={idx + 1} myService={myService} handleDelete={handleDelete} handleUpdate={handleUpdate}></MyServicesTableRow>)
                            }
                        </tbody>
                    </table>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <div>
                                <div className="card-body bg-base-100 drop-shadow-lg max-w-xl mx-auto">
                                    <form onSubmit={handleUpdateService}>
                                        <div>
                                            <h3 className="font-bold text-lg text-center">Update Service!</h3>
                                        </div>
                                        {/* Service Image */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Service Image</span>
                                            </label>
                                            <input
                                                defaultValue={modalFormValue.imageURL}
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
                                                defaultValue={modalFormValue.title}
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
                                                defaultValue={modalFormValue.companyName}
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
                                                defaultValue={modalFormValue.companyURL}
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
                                                defaultValue={modalFormValue.description}
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
                                            <select required name='category' defaultValue={modalFormValue.category} className="select select-bordered rounded-md">
                                                <option disabled>-- Select Category --</option>
                                                <option value="Cleaning">Cleaning</option>
                                                <option value="IT Services">IT Services</option>
                                                <option value="Fitness">Fitness</option>
                                                <option value="Education">Education</option>
                                                <option value="Healthcare">Healthcare</option>
                                                <option value="Others">Others</option>
                                            </select>
                                        </div>

                                        {/* Price */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Price</span>
                                            </label>
                                            <input
                                                defaultValue={modalFormValue.price}
                                                name='price'
                                                type="number"
                                                className="input input-bordered rounded-md"
                                                placeholder="Enter Price"
                                                required
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <div className="form-control py-1 mt-2">
                                            <input className='btn btn-primary' type="submit" value="Update Service" />
                                        </div>
                                    </form>

                                    <div className="modal-action m-0 form-control">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="w-full btn">Cancel</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default MyServices;