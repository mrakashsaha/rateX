import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import errorImg from "../assets/error.png"

const ErrorPage = () => {
    return (
        <>
            <Helmet>
                <title>RateX | Error</title>
            </Helmet>
            <main className="flex flex-col items-center justify-center min-h-screen">
                <div className='hidden' >
                <ThemeToggle></ThemeToggle>
                </div>
                <div className="text-center">
                    <div className='max-w-xs mx-auto p-4'>
                        <img src={errorImg} alt="error" />
                    </div>
                    <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-[#04B2B2] sm:text-7xl">
                        Page not found
                    </h1>
                    <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                        Sorry, we couldn’t find the page you’re looking for.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link to={"/"}
                            className="rounded-md bg-[#04B2B2] px-3.5 py-2.5 text-sm font-semibold text-white dark:text-base-300 shadow-sm hover:bg-[#04b2b2eb]"
                        >
                            Go back home
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
};

export default ErrorPage;