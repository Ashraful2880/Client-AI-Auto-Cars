import React from 'react';
import About from '../../About/About';
import Banner from '../../Banner/Banner';
import OurBlogs from '../../OurBlogs/OurBlogs';
import OurSuccess from '../OurSuccess/OurSuccess';
import Testimonial from '../Testimonial/Testimonial'
import FeatureCars from '../FeatureCars/FeatureCars';
import Galary from '../Galary/Galary';
const Home = () => {
    return (
        <div>
            <Banner/>
            <FeatureCars/>
            <Galary/>
            <About/>
            <OurSuccess/>
            <Testimonial/>
            <OurBlogs/>
        </div>
    );
};

export default Home;