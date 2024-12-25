import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import Test from '../components/Test';


const Home = () => { 
    return (
        <div>
            This is home page
            {/* <Test></Test> */}
            {/* <ServiceDetails></ServiceDetails> */}
        </div>
    );
};

export default Home;