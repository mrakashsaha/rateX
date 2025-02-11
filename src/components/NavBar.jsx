import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const NavBar = () => {
    const navigate = useNavigate();
    const { signOutUser, user, loading } = useContext(AuthContext);

    const handleLogout = () => {
        signOutUser()
            .then(() => {
                navigate("/login")

            }).catch((error) => {
                console.log(error);
            });
    }





    const menu =
        <>
            <li className='text-lg font-medium'><NavLink to={"/"}>Home</NavLink></li>
            <li className='text-lg font-medium'><NavLink to={"/services"}>Services</NavLink></li>
            {
                user && <>
                    <li className='text-lg font-medium'><NavLink to={"/addServices"}>Add Service</NavLink></li>
                    <li className='text-lg font-medium'><NavLink to={"/myReviews"}>My Reviews</NavLink></li>
                    <li className='text-lg font-medium'><NavLink to={"/myServices"}>My Services</NavLink></li>
                </>
            }
        </>
    return (
        <div className='bg-base-100 sticky opacity-95 -top-1 drop-shadow-sm w-full z-50'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu space-y-2 menu-md dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                menu
                            }
                        </ul>
                    </div>
                    <Link to={"/"} className="btn btn-ghost text-2xl font-semibold">RateX</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        {
                            menu
                        }
                    </ul>
                </div>
                <div className="navbar-end space-x-3">
                    {
                        loading ? <span className="loading loading-ring loading-lg"></span>
                            : user ?
                                <>
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="avatar"
                                                src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <button onClick={handleLogout} className="btn text-base px-4 bg-[#04B2B2] hover:bg-[#038787] text-white">Logout</button>
                                </>
                                :
                                <>
                                    <Link to={"/login"} className="btn text-base px-4 bg-[#04B2B2] hover:bg-[#038787] text-white">Login</Link>
                                    <Link to={"/register"} className="btn text-base px-4">Register</Link>
                                </>
                    }



                </div>
            </div>
        </div>
    );
};

export default NavBar;