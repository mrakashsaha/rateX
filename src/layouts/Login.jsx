import React, { useContext, useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from '../components/GoogleLogin';
import { AuthContext } from '../context/AuthProvider';
import { Helmet } from 'react-helmet';
import loginAnimate from '../assets/lottie/loginAnimation.json'
import Lottie from 'lottie-react';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { signInToAccout, setLoading } = useContext(AuthContext);

    const [visiable, setVisiable] = useState(false);
    const [error, seterror] = useState('');

    const handleLoginWithEmail = (e) => {

        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        const { email, password } = initialData;

        signInToAccout(email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                // navigate("/")
                navigate(location?.state ? location.state : "/");

            })
            .catch((error) => {
                seterror('Error: ' + error.code);
                setLoading(false);
            })
    }

    return (
        <div>
            <Helmet>
                <title>RateX | Login</title>
            </Helmet>
            <div>
                <div className="hero bg-[#eef7f7]  dark:bg-base-300 min-h-screen">
                    <div className="hero-content flex-col md:flex-row md:gap-28 py-10">
                        <div className='max-w-xs md:max-w-md'>
                            <Lottie animationData={loginAnimate}></Lottie>
                        </div>
                        <div className="card bg-base-100 w-96 sm:w-[425px] md:w-[480px] shrink-0 shadow-2xl">
                        <h1 className="text-2xl text-center font-bold mx-auto pt-10">Welcome Back!</h1>
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
                                        <button className="btn bg-[#04B2B2] hover:bg-[#038787] dark:text-base-300 text-white">Login</button>
                                    </div>
                                </form>
                                <div className='border-t border-1 border-blue-600 border-dotted mt-4'></div>
                                <GoogleLogin></GoogleLogin>
                                <label className="label">
                                    <p>Don't have an account? <Link to={'/register'} className='link text-[#04B2B2] font-semibold'>Register</Link> </p>
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