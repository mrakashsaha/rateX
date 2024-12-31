import React, { useContext, useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogin from '../components/GoogleLogin';
import { AuthContext } from '../context/AuthProvider';
import { auth } from '../firebase/firebase.init';
import axiosAPI from '../axios/axiosAPI';
import { Helmet } from 'react-helmet';
import registerAnimate from '../assets/lottie/registerAnimate.json'
import Lottie from 'lottie-react';

const Register = () => {
    const navigate = useNavigate();
    const { createAccountWithEmail, updateProfileByEmail, user, setLoading } = useContext(AuthContext);

    const [visiable, setVisiable] = useState(false);
    const [formError, setFormError] = useState("");
    console.log(user);

    const handleSignUpWithEmail = (e) => {
        e.preventDefault();
        setFormError("");
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);

        const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        if (!regex.test(initialData.password)) {
            setFormError("Password must contain uppercase, lowercase and at least 6 characters long");
            return;
        }

        const { name, email, password, photo } = initialData;


        createAccountWithEmail(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                updateProfileByEmail(name, photo)
                    .then(() => {
                        console.log(auth.currentUser);
                        const userProfile = {
                            email: auth?.currentUser?.email,
                            photoURL: auth?.currentUser?.photoURL,
                            displayName: auth?.currentUser?.displayName,
                        }
                        axiosAPI.put("/users", { userProfile })
                            .then(res => {
                                if (res.data.acknowledged) {
                                    navigate("/")
                                }
                            })
                    }).catch((error) => {
                        console.log(error);
                        setLoading(false);
                    })
            })
            .catch((error) => {
                setFormError(error.code);
                setLoading(false)
            });


    }

    return (
        <div>
            <Helmet>
                <title>RateX | Register</title>
            </Helmet>
            <div>
                <div className="hero bg-[#eef7f7] min-h-screen py-10">
                    <div className="hero-content flex-col md:gap-28 md:flex-row">
                        <div>
                            <div className='max-w-xs md:max-w-md'>
                                <Lottie animationData={registerAnimate}></Lottie>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-96 sm:w-[425px] md:w-[480px] shrink-0 shadow-2xl">
                            <h1 className="text-2xl text-center font-bold  mx-auto pt-8">Sign Up Today!</h1>
                            <div className='card-body'>
                                <form onSubmit={handleSignUpWithEmail}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="">Name</span>
                                        </label>
                                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="">Email</span>
                                        </label>
                                        <input name='email' type="email" placeholder="Enter Email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="">Photo URL</span>
                                        </label>
                                        <input name='photo' type="url" placeholder="Enter Photo URL" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control relative">
                                        <label className="label">
                                            <span className="">Password</span>
                                        </label>
                                        <input name='password' type={visiable ? "text" : "password"} placeholder="Create Password" className="input input-bordered" required />
                                        <a onClick={() => setVisiable(!visiable)} className='btn btn-sm btn-circle absolute right-2 top-12' > {visiable ? <IoEyeOff className='text-lg'></IoEyeOff> : <IoEye className='text-lg'></IoEye>}  </a>
                                    </div>

                                    {
                                        formError && <p className='text-[#EA4335] text-base pt-2'>Error: {formError} </p>
                                    }
                                    <div className="form-control mt-4">
                                        <button className="btn bg-[#04B2B2] hover:bg-[#038787] text-white">Sign Up</button>
                                    </div>
                                </form>
                                <div className='border-t border-1 border-blue-600 border-dotted mt-4'></div>
                                <GoogleLogin></GoogleLogin>
                                <label className="label">
                                    <p>Already have an Account? <Link to={'/login'} className='underline text-[#04B2B2] font-semibold'>Login</Link> </p>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;