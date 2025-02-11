import React, { useContext, useEffect, useState } from 'react';
import axiosAPI from '../axios/axiosAPI';
import { AuthContext } from '../context/AuthProvider';
import MyServicesTableRow from '../components/MyServicesTableRow';
import moment from 'moment';
import Spinner from '../components/Spinner'
import Lottie from 'lottie-react';
import noDataFoundLottie from '../assets/lottie/noDataFound.json'

import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import bg1 from '../assets/backgrounds/bg1.jpg'
import useAxiosSecure from '../axios/UseAxiosSecure';

const MyServices = () => {
    const { user, loading} = useContext(AuthContext);
    const [dataLoading, setDataLoaing] = useState(true);
    const [fetch, setFetch] = useState(true);
    const [displayMyServices, setDisplayMyServices] = useState([]);
    const [modalFormValue, setModalFormValue] = useState({});
    const [query, setQuery] = useState('');
    const [reFetch, setReFetch] = useState(false);
    const axiosSecure = useAxiosSecure();

    const filterdMyServices = displayMyServices.filter((displayMyService) => displayMyService.title.toLowerCase().includes(query) || displayMyService.category.toLowerCase().includes(query) || displayMyService.companyName.toLowerCase().includes(query));



    useEffect(() => {
        if (user) {
            setFetch(true);
            axiosSecure.get(`/myServices?email=${user?.email}`)
                .then(res => {

                    setDisplayMyServices(res.data);
                    setFetch(false);
                    setDataLoaing(false);
                });
        }
    }, [user, reFetch])


    const handleUpdate = (id) => {
        document.getElementById('my_modal_5').showModal();
        axiosAPI.get(`/services/${id}`)
            .then(res => {
                setModalFormValue(res.data)

            });
    }

    const handleUpdateService = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());

        // Preparing Data For Post into MongoDB Through API
        const { imageURL, title, companyName, companyURL, description, category, price } = initialData;
        const userEmail = user.email;
        const date = moment().toISOString();

        const updateServiceDoc = {
            imageURL, title, companyName, companyURL, description, category, price, userEmail, date
        }
        axiosSecure.put(`/updateService/${modalFormValue._id}`, updateServiceDoc)
            .then(res => {
                if (res.data.modifiedCount) {
                    setReFetch((alter) => !alter);
                    document.getElementById('my_modal_5').close();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Services updated successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => console.log(error))

    }


    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/myServices/${id}`)
                    .then(res => {
                        if (res.data) {
                            setReFetch((alter) => !alter);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(error => console.log(error))
            }
        });




    }

    if (loading || dataLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div className=''>
            <Helmet>
                <title>RateX | My Services</title>
            </Helmet>
            <div className="relative h-52 lg:h-60 bg-no-repeat object-fill" style={{ backgroundImage: `url(${bg1})` }}>
                <div className="absolute inset-0 bg-black/10 flex flex-col justify-center p-16 text-white">
                    <div className='mx-auto container'>
                        <p className="text-sm font-light p-2">RateX / My Services</p>
                        <h1 className="text-4xl font-bold">Services Added by You</h1>
                    </div>
                </div>
            </div>

            <div className='container p-2 mx-auto mb-28'>
                <div className='flex justify-between py-4 my-6'>
                    <div>
                        <h3 className='text-3xl'> Total Services: {displayMyServices.length}</h3>
                    </div>
                    <label className="input input-bordered flex items-center gap-2">
                        <input onChange={(e) => setQuery(e.target.value.toLowerCase())} type="text" className="grow" placeholder="Search" />
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
                </div>
                <div className='bg-base-100 shadow-inherit border'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-base'>
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
                                    filterdMyServices?.map((myService, idx) => <MyServicesTableRow key={idx} idx={idx + 1} myService={myService} handleDelete={handleDelete} handleUpdate={handleUpdate}></MyServicesTableRow>)
                                }
                            </tbody>
                        </table>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <div>
                                    <div className="card-body bg-base-100 drop-shadow-lg mx-auto">
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
                                                <input className='btn bg-[#04B2B2] hover:bg-[#038787] text-white' type="submit" value="Update Service" />
                                            </div>
                                        </form>

                                        <div className="modal-action m-0 form-control">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="w-full btn border-[#04B2B2] bg-[#eef7f7] text-[#151515] hover:bg-[#038787] hover:text-white">Cancel</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>


                {
                    !fetch && displayMyServices.length === 0 &&
                    <>
                        <div className='flex justify-center items-center'>
                            <div className='w-96 p-4'>
                                <Lottie animationData={noDataFoundLottie}></Lottie>
                            </div>
                        </div>
                    </>
                }
            </div>


        </div>
    );

};

export default MyServices;