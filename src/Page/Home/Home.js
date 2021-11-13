import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Explore from '../Explore/Explore';
import OurBlogs from '../OurBlogs/OurBlogs';
import OurSuccess from '../OurSuccess/OurSuccess';
import Testomonial from '../Testomonial/Testomonial';
const Home = () => {
    return (
        <div>
            <Banner/>
            <Explore/>
            <About/>
            <OurSuccess/>
            <Testomonial/>
            <OurBlogs/>
        </div>
    );
};

export default Home;