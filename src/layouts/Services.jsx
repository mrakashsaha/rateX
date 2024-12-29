import React, { useContext, useEffect, useState } from 'react';
import axiosAPI from '../axios/axiosAPI';
import ServiceCard from '../components/ServiceCard';
import { FiFilter } from 'react-icons/fi';

const Services = () => {

    const [services, setServices] = useState([]);
    const [refetech, setReFetch] = useState(false);
    const [displayCategoryName, setDisplayCategoryName] = useState("All");

    useEffect(() => {
        axiosAPI.get("/services")
            .then(res => {
                setServices(res.data)
                setDisplayCategoryName("All")
            })
            .catch(error => console.log(error));
    }, [refetech])

    const handleCategory = (categoryName) => {
        axiosAPI.get(`/category?name=${categoryName}`)
            .then(res => {
                setServices(res.data);
                setDisplayCategoryName(categoryName);

            })
            .catch(error => console.log(error))
    }


    const handleSearch = (e)=> {
        e.preventDefault();
        setDisplayCategoryName("All");
        const keyWords = e.target.keyWords.value;
        console.log (keyWords)
        axiosAPI.get(`/search?keywords=${keyWords}`)
        .then (res=>setServices(res.data))
        .catch(error => console.log(error))
    }

    return (
        <div className='container mx-auto px-2'>
            <h2 className='text-3xl text-center'>Services Are Here</h2>
            <div className='flex justify-between items-center'>
                <form onSubmit={handleSearch}>
                    <div className="join">
                        <div>
                            <div>
                                <input name='keyWords' className="input input-bordered join-item" placeholder="Search" />
                            </div>
                        </div>
                        <div className="indicator">
                            <button className="btn join-item">Search</button>
                        </div>
                    </div>
                </form>
                <div>
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1"> <FiFilter></FiFilter> Category : {displayCategoryName} </div>
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
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map((service, idx) => <ServiceCard key={idx} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;