import React, { useContext, useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogin from '../components/GoogleLogin';
import { AuthContext } from '../context/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const navigate = useNavigate ();

    const { signInToAccout, setLoading } = useContext(AuthContext);

    const [visiable, setVisiable] = useState(false);
    const [error, seterror] = useState('');

    const handleLoginWithEmail = (e) => {

        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);
        const { email, password } = initialData;

        signInToAccout(email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                navigate("/")

            })
            .catch((error) => {
                seterror ('Error: '+ error.code);
                setLoading(false);
            })
    }

    return (
        <div>
            <div>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col">
                        <h1 className="text-2xl font-bold  mx-auto">Login to Continue!</h1>
                        <div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
                            <div className='card-body'>
                                <form onSubmit={handleLoginWithEmail}>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="">Email</span>
                                        </label>
                                        <input name='email' type="email" placeholder="Enter Email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control relative">
                                        <label className="label">
                                            <span className="">Password</span>
                                        </label>
                                        <input name='password' type={visiable ? "text" : "password"} placeholder="Enter Password" className="input input-bordered" required />
                                        <a onClick={() => setVisiable(!visiable)} className='btn btn-sm btn-circle absolute right-2 top-12' > {visiable ? <IoEyeOff className='text-lg'></IoEyeOff> : <IoEye className='text-lg'></IoEye>}  </a>
                                        {
                                            error && <p className='text-red-500 pt-3'>{error}</p>
                                        }
                                    </div>
                                    <div className="form-control mt-4">
                                        <button className="btn btn-primary text-white border-none hover:bg-[#ff8900] bg-[#04335E]">Login</button>
                                    </div>
                                </form>
                                <div className='border-t border-1 border-blue-600 border-dotted mt-4'></div>
                                <GoogleLogin></GoogleLogin>
                                <label className="label">
                                    <p>Don't have an account? <Link to={'/register'} className='link text-[#EA4335]'>Register</Link> </p>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;