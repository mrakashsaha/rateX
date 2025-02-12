import React, { useContext, useEffect, useState } from 'react';
import axiosAPI from '../axios/axiosAPI';
import ServiceCard from '../components/ServiceCard';
import { FiFilter } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import bg1 from '../assets/backgrounds/bg1.jpg'
import NoDataInSearch from '../components/NoDataInSearch';
import Spinner from '../components/Spinner';
import { FaArrowDownShortWide, FaArrowUpShortWide } from 'react-icons/fa6';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import { RxCaretSort } from 'react-icons/rx';

const Services = () => {
    const [loading, setLoaing] = useState(true);
    const [ascending, setAscending] = useState(null);
    const [services, setServices] = useState([]);
    const [refetech, setReFetch] = useState(false);
    const [displayCategoryName, setDisplayCategoryName] = useState("All");

    useEffect(() => {
        axiosAPI.get("/services")
            .then(res => {
                setServices(res.data);
                setDisplayCategoryName("All");
                setLoaing(false);
            })
            .catch(error => {
                console.log(error);
                setLoaing(false);
            });
    }, [refetech])

    const handleCategory = (categoryName) => {
        axiosAPI.get(`/category?name=${categoryName}`)
            .then(res => {
                setServices(res.data);
                setDisplayCategoryName(categoryName);
                setLoaing(false);

            })
            .catch(error => {
                console.log(error)
                setLoaing(false);
            })
    }


    const handleSearch = (e) => {
        e.preventDefault();
        setDisplayCategoryName("All");
        const keyWords = e.target.keyWords.value;
        axiosAPI.get(`/search?keywords=${keyWords}`)
            .then(res => {
                setServices(res.data);
                setLoaing(false);

            })
            .catch(error => {
                console.log(error);
                setLoaing(false);
            })
    }

    const handleSortbyPrice = () => {
        if (ascending === null) {
            setAscending(true);
            const sortinAscending = services.sort((a, b) => a.price - b.price);
            setServices(sortinAscending);

        }

        if (ascending === true) {
            setAscending(false);
            const sortinDescending = services.sort((a, b) =>b.price - a.price );
            setServices(sortinDescending);
        }

        if (ascending === false) {
            setAscending(true);
            const sortinAscending = services.sort((a, b) => a.price - b.price);
            setServices(sortinAscending);
        }

    }


    if (loading) {
        return <Spinner></Spinner>
    }

    return (
        <div className='mb-28'>
            <Helmet>
                <title>RateX | Services</title>
            </Helmet>
            <div className="relative h-52 lg:h-60 bg-cover" style={{ backgroundImage: `url(${bg1})` }}>
                <div className="absolute inset-0 bg-black/10 flex flex-col justify-center p-16 text-white">
                    <div className='mx-auto container'>
                        <p className="text-sm font-light p-2">RateX / Services</p>
                        <h1 className="text-4xl font-bold">All Services</h1>
                    </div>
                </div>
            </div>
            <div className='container mx-auto px-2'>
                <div className='flex flex-col md:flex-row justify-between gap-4 items-center my-10'>
                    <form onSubmit={handleSearch}>
                        <div className="join">
                            <div>
                                <div className=''>
                                    <input name='keyWords' className="input input-bordered join-item" placeholder="Search" />
                                </div>
                            </div>
                            <div className="indicator">
                                <button className="btn join-item bg-[#04B2B2] hover:bg-[#038787] text-white">Search</button>
                            </div>
                        </div>
                    </form>
                    <div className='flex gap-x-4 items-center'>
                        <div>
                            <button onClick={handleSortbyPrice} className='btn border-2 border-[#04B2B2] hover:border-none hover:bg-[#038787] btn-outline'>Sort By Price{ascending === false ? <FaSortAmountUp></FaSortAmountUp> : ascending === true ? <FaSortAmountDown></FaSortAmountDown> : <RxCaretSort className='text-xl'></RxCaretSort>} </button>
                        </div>
                        <div>
                            <div className="dropdown dropdown-bottom dropdown-end">
                                <div tabIndex={0} role="button" className="btn m-1 bg-[#04B2B2] hover:bg-[#038787] text-white"> <FiFilter className='hidden sm:block'></FiFilter> Category : {displayCategoryName} </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow">
                                    <li><button onClick={() => setReFetch((alter) => !alter)} >All</button> </li>
                                    <li><button onClick={() => handleCategory("Cleaning")} >Cleaning</button> </li>
                                    <li><button onClick={() => handleCategory("Education")} >Education</button> </li>
                                    <li><button onClick={() => handleCategory("Fitness")} >Fitness</button> </li>
                                    <li><button onClick={() => handleCategory("Healthcare")} >Healthcare</button> </li>
                                    <li><button onClick={() => handleCategory("IT Services")} >IT Services</button> </li>
                                    <li><button onClick={() => handleCategory("Transport")} >Transport</button> </li>
                                    <li><button onClick={() => handleCategory("Others")} >Others</button> </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        services.map((service, idx) => <ServiceCard key={idx} service={service}></ServiceCard>)
                    }
                </div>
                {
                    services.length === 0 && <NoDataInSearch></NoDataInSearch>
                }
            </div>
        </div>
    );
};

export default Services;