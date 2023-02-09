import React from 'react';
import About from '../../About/About';
import Banner from '../../Banner/Banner';
import OurBlogs from '../../OurBlogs/OurBlogs';
import OurSuccess from '../OurSuccess/OurSuccess';
import Testimonial from '../Testimonial/Testimonial'
import FeatureCars from '../FeatureCars/FeatureCars';
import Galary from '../Galary/Galary';
import Discount from '../Discount/Discount';
import Deal from '../Deal/Deal';
const Home = () => {
    return (
        <div>
            <Banner />
            <FeatureCars />
            <About />
            <Galary />
            <Discount />
            <OurSuccess />
            <Deal />
            <Testimonial />
            <OurBlogs />
        </div>
    );
};

export default Home;