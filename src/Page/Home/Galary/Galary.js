import React from 'react';
import Slider from "react-slick";
import './Galary.css';

import slider1 from '../../../Image/galary/galary1.jpg'
import slider2 from '../../../Image/galary/galary2.jpg'
import slider3 from '../../../Image/galary/galary3.jpg'
import slider4 from '../../../Image/galary/galary4.jpg'
import slider5 from '../../../Image/galary/galary6.jpg'

const Galary = () => {
    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <div className="container-fluid galary-container testimonial-container">
            <div className="text-light mb-5">
                <h2>Our Galary</h2>
                <h5>View The Product Quality</h5>
            </div>
            <div className="pb-5 pt-3">
                <Slider {...settings}>
                    <div>
                        <img src={slider1} alt="Galary-1" />
                    </div>
                    <div>
                        <img src={slider2} alt="Galary-1" />
                    </div>
                    <div>
                        <img src={slider3} alt="Galary-1" />
                    </div>
                    <div>
                        <img src={slider4} alt="Galary-1" />
                    </div>
                    <div>
                        <img src={slider5} alt="Galary-1" />
                    </div>
                    <div>
                        <img src={slider1} alt="Galary-1" />
                    </div>
                    <div>
                        <img src={slider2} alt="Galary-1" />
                    </div>
                    <div>
                        <img src={slider3} alt="Galary-1" />
                    </div>
                    <div>
                        <img src={slider4} alt="Galary-1" />
                    </div>
                    <div>
                        <img src={slider5} alt="Galary-1" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Galary;