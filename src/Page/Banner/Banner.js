import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/swiper.min.css";
import './Banner.css';
import bannar1 from "../../Image/1.png";
import bannar2 from "../../Image/2.png";

const Banner = () => {
    SwiperCore.use([Autoplay, Pagination]);
    return (
        <div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide style={{ position: "relative" }}>
                    <img src={bannar1} alt="Slider Bannar" className="slider-image" />
                    <div className="textPosition">
                        <h1>GET YOUR <span className="headingColor">DREAM</span> </h1>
                        <h1>CAR</h1>
                        <p>Nullam et interdum odio. Etiam laoreet ex id gravida volutpat.
                            Vestibulum pulvinar nisl quis lobortis bibendum.</p>
                        <Link to="/explore" className="my-3">
                            <button className="btn text-black px-4 py-2 fs-5 fw-semibold" style={{ background: "orange" }}>Buy Now</button>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannar2} alt="Slider Bannar" className="slider-image" />
                    <div className="textPosition">
                        <h1>GET YOUR <span className="headingColor">DREAM</span> </h1>
                        <h1>CAR</h1>
                        <p>Nullam et interdum odio. Etiam laoreet ex id gravida volutpat.
                            Vestibulum pulvinar nisl quis lobortis bibendum.</p>
                        <Link to="/explore" className="my-3">
                            <button className="btn text-black px-4 py-2 fs-5 fw-semibold" style={{ background: "orange" }}>Buy Now</button>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannar1} alt="Slider Bannar" className="slider-image" />
                    <div className="textPosition">
                        <h1>GET YOUR <span className="headingColor">DREAM</span> </h1>
                        <h1>CAR</h1>
                        <p>Nullam et interdum odio. Etiam laoreet ex id gravida volutpat.
                            Vestibulum pulvinar nisl quis lobortis bibendum.</p>
                        <Link to="/explore" className="my-3">
                            <button className="btn text-black px-4 py-2 fs-5 fw-semibold" style={{ background: "orange" }}>Buy Now</button>
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>


            {/* <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.ibb.co/pw4Cx92/Slider1.jpg" className="d-block w-100" alt="Slider" />
                        <div className="overlay"></div>
                        <div className="caption-text text-start">
                            <h1>FIND YOUR DREAM CAR</h1>
                            <h2>IN MR.AUTOMOTIVE</h2>
                            <p className="ms-2">When we say your vehicle's in the best hands possible, were not just saying what you want to hear. We're putting our money where our words are, doing exactly what your vehicle needs to protect you and your family.</p>
                            <Link to="/explore">
                                <button className="btn btn-warning ms-3 px-4 py-2 fs-5 fw-semibold">Buy Now</button>
                            </Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/dKXQ5th/Slider3.jpg" className="d-block w-100" alt="Slider" />
                        <div className="overlay"></div>
                        <div className="caption-text text-start">
                            <h1>BUY CAR WITH LOAN</h1>
                            <h2>IN MR.AUTOMOTIVE</h2>
                            <p className="ms-2">When we say your vehicle's in the best hands possible, were not just saying what you want to hear. We're putting our money where our words are, doing exactly what your vehicle needs to protect you and your family.</p>
                            <Link to="/explore">
                                <button className="btn btn-warning ms-3 px-4 py-2 fs-5 fw-semibold">Buy Now</button>
                            </Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/XDSPfr0/Slider2.jpg" className="d-block w-100" alt="Slider" />
                        <div className="overlay"></div>
                        <div className="caption-text text-start">
                            <h1>20% OFF TO BUY A CAR</h1>
                            <h2>IN MR.AUTOMOTIVE</h2>
                            <p className="ms-2">When we say your vehicle's in the best hands possible, were not just saying what you want to hear. We're putting our money where our words are, doing exactly what your vehicle needs to protect you and your family.</p>
                            <Link to="/explore">
                                <button className="btn btn-warning ms-3 px-4 py-2 fs-5 fw-semibold">Buy Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div> */}
        </div>
    );
};

export default Banner;