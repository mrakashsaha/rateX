import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogin from '../components/GoogleLogin';
import { AuthContext } from '../context/AuthProvider';
import { auth } from '../firebase/firebase.init';
import axiosAPI from '../axios/axiosAPI';

const Register = () => {
    const navigate = useNavigate();
    const { createAccountWithEmail, updateProfileByEmail, user, setLoading } = useContext(AuthContext);

    const [visiable, setVisiable] = useState(false);
    const [error, seterror] = useState('');
    console.log(user);

    const handleSignUpWithEmail = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);

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
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
            });


    }

    return (
        <div>
            <div>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col">
                        <h1 className="text-2xl font-bold  mx-auto">Sign Up Today!</h1>
                        <div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
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
                                        <input name='photo' type="text" placeholder="Enter Photo URL" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control relative">
                                        <label className="label">
                                            <span className="">Password</span>
                                        </label>
                                        <input name='password' type={visiable ? "text" : "password"} placeholder="Enter Password" className="input input-bordered" required />
                                        <a onClick={() => setVisiable(!visiable)} className='btn btn-sm btn-circle absolute right-2 top-12' > {visiable ? <IoEyeOff className='text-lg'></IoEyeOff> : <IoEye className='text-lg'></IoEye>}  </a>
                                    </div>

                                    {
                                        error && <p className='text-[#EA4335] text-sm pt-2'>Error: Password must contain uppercase, lowercase and at least 6 characters long.</p>
                                    }
                                    <div className="form-control mt-4">
                                        <button className="btn btn-primary text-white border-none hover:bg-[#ff8900] bg-[#04335E]">Sign Up</button>
                                    </div>
                                </form>
                                <div className='border-t border-1 border-blue-600 border-dotted mt-4'></div>
                                <GoogleLogin></GoogleLogin>
                                <label className="label">
                                    <p>Already have an Account? <Link to={'/login'} className='underline text-[#EA4335]'>Login</Link> </p>
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