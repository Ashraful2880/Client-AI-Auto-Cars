import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import OurBlogs from '../OurBlogs/OurBlogs';
import OurSuccess from '../OurSuccess/OurSuccess';
import Testomonial from '../Testomonial/Testomonial';
import FeatureCars from './FeatureCars/FeatureCars';
const Home = () => {
    return (
        <div>
            <Banner/>
            <FeatureCars/>
            <About/>
            <OurSuccess/>
            <Testomonial/>
            <OurBlogs/>
        </div>
    );
};

export default Home;