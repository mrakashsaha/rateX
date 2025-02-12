import React from 'react';
import Slider from '../components/Slider';
import FeaturedServices from '../components/FeaturedServices';
import Experience from '../components/Experience';
import Meet from '../components/Meet';
import Stats from '../components/Stats';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';





const Home = () => {
    return (
        <div>
            <Helmet>
                <title>RateX | Home</title>
            </Helmet>
            {/* <Slider></Slider> */}
            <Hero></Hero>
            <FeaturedServices></FeaturedServices>
            <Stats></Stats>
            <Experience></Experience>
            <Meet></Meet>

        </div>
    );
};

export default Home;