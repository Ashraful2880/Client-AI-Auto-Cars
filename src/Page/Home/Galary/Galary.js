import React from 'react';
import Slider from "react-slick";
import './Galary.css';

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
                        <img src="https://i.ibb.co/80HZQ06/galary1.jpg" alt="Galary-1" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/KLVRFvk/galary2.jpg" alt="Galary-1" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/80HZQ06/galary1.jpg" alt="Galary-1" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/MnkLgVX/galary4.jpg" alt="Galary-1" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/VSL0TgH/galary6.jpg" alt="Galary-1" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/80HZQ06/galary1.jpg" alt="Galary-1" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/KLVRFvk/galary2.jpg" alt="Galary-1" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/80HZQ06/galary1.jpg" alt="Galary-1" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/MnkLgVX/galary4.jpg" alt="Galary-1" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/VSL0TgH/galary6.jpg" alt="Galary-1" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Galary;