import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';


const NavBar = () => {
    const navigate = useNavigate();
    const { signOutUser, user, loading } = useContext(AuthContext);

    const handleLogout = () => {
        signOutUser()
            .then(() => {
                console.log('signout sucessfull');
                navigate("/login")

            }).catch((error) => {
                console.log(error);
            });
    }





    const menu =
        <>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/services"}>Services</NavLink></li>
            <li><NavLink to={"/addServices"}>Add Service</NavLink></li>
            <li><NavLink to={"/myReviews"}>My Reviews</NavLink></li>
            <li><NavLink to={"/myServices"}>My Services</NavLink></li>
        </>
    return (
        <div className='mx-auto container'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                menu
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">RateX</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
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
                                            alt="Tailwind CSS Navbar component"
                                            src={user?.photoURL} />
                                    </div>
                                </div>
                                <button onClick={handleLogout} className="btn">Logout</button>
                            </>
                            :
                            <>
                                <Link to={"/login"} className="btn">Login</Link>
                                <Link to={"/register"} className="btn">Register</Link>
                            </>
                    }



                </div>
            </div>
        </div>
    );
};

export default NavBar;