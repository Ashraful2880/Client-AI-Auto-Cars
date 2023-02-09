import React from 'react';
import Slider from "react-slick";
import './Galary.css';

const Galary = () => {
    let settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
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
        <div className="galary-container testimonial-container pb-5">
            <div className="container">
                <div className="text-light mb-5 pt-5">
                    <h2>Our Galary</h2>
                    <h5>View The Product Quality</h5>
                </div>
                <div className="pb-5 pt-3">
                    <Slider {...settings}>
                        <div className="px-2">
                            <img src="https://i.ibb.co/80HZQ06/galary1.jpg" alt="Galary-1" />
                        </div>
                        <div className="px-2">
                            <img src="https://i.ibb.co/KLVRFvk/galary2.jpg" alt="Galary-1" />
                        </div>
                        <div className="px-2">
                            <img src="https://i.ibb.co/80HZQ06/galary1.jpg" alt="Galary-1" />
                        </div>
                        <div className="px-2">
                            <img src="https://i.ibb.co/MnkLgVX/galary4.jpg" alt="Galary-1" />
                        </div>
                        <div className="px-2">
                            <img src="https://i.ibb.co/VSL0TgH/galary6.jpg" alt="Galary-1" />
                        </div>
                        <div className="px-2">
                            <img src="https://i.ibb.co/80HZQ06/galary1.jpg" alt="Galary-1" />
                        </div>
                        <div className="px-2">
                            <img src="https://i.ibb.co/KLVRFvk/galary2.jpg" alt="Galary-1" />
                        </div>
                        <div className="px-2">
                            <img src="https://i.ibb.co/80HZQ06/galary1.jpg" alt="Galary-1" />
                        </div>
                        <div className="px-2">
                            <img src="https://i.ibb.co/MnkLgVX/galary4.jpg" alt="Galary-1" />
                        </div>
                        <div className="px-2">
                            <img src="https://i.ibb.co/VSL0TgH/galary6.jpg" alt="Galary-1" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Galary;