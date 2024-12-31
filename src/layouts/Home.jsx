import React from 'react';
import Slider from '../components/Slider';
import FeaturedServices from '../components/FeaturedServices';
import Experience from '../components/Experience';
import Meet from '../components/Meet';
import Stats from '../components/Stats';





const Home = () => { 
    return (
        <div>
            <Slider></Slider>
            <FeaturedServices></FeaturedServices>
            <Experience></Experience>
            <Meet></Meet>
            <Stats></Stats>
            
        </div>
    );
};

export default Home;