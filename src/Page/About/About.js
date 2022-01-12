import React from 'react';
import aboutCar from '../../Image/regFeature.jpg';
import './About.css';
const About = () => {
    return (
        <>
            <div className="container-fluid row mx-auto about-container">
                <div className="mt-4 mb-3 text-white">
                    <h2>Who We Are</h2>
                    <h5>Few Words About Us</h5>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 mx-auto" data-aos="fade-right"
     data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <img className="p-5 w-100" src={aboutCar} alt="aboutImage" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 about-text text-start"  data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <h2 className=" text-danger">Mr Automative</h2>
                    <hr className="text-white mb-5" />
                    <p className="mb-3">
                        <strong>Mr Automative</strong> is a leading digital marketplace and solutions provider for the automotive industry that connects car shoppers with sellers. Launched in 1998 and headquartered in Chicago, the Company empowers shoppers with the data, resources and digital tools needed to make informed buying decisions and seamlessly connect with automotive retailers.
                    </p>
                    <br />
                    <p className="mb-3">
                        We opened the doors of the first Company of Cars retail location in 2014 after more than ten years mixing it up in the hyper competitive automotive wholesale business. Originally located on the corner of Broadway and Quebec just outside downtown Vancouver, we moved our store in 2018 to a new larger space at 2000 Boundary Road on the NewYork.
                    </p>
                    <br />
                    <p className="mb-3">
                        We believe that our sales and service staff should be informed, and helpful, without being pushy or overbearing. We want you to be our customer for life and we work hard to earn your business each and every time we interact with you.
                    </p>
                    <div className="row text-light">
                        <div className="col-sm-12 col-md-6 col-lg-6 text-start">
                            <div className="d-inline">
                                <i className="fas fa-check border border-3 border-danger p-2 mt-4 rounded-circle"></i>
                                <h5 className="d-inline ms-3">First Class Service</h5>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 text-start">
                            <div className="d-inline">
                                <i className="fas fa-check border border-3 border-danger p-2 mt-4 rounded-circle"></i>
                                <h5 className="d-inline ms-3">Fully Secured</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row text-light">
                        <div className="col-sm-12 col-md-6 col-lg-6 text-start">
                            <div className="d-inline">
                                <i className="fas fa-check border border-3 border-danger p-2 mt-4 rounded-circle"></i>
                                <h5 className="d-inline ms-3">Premium Products</h5>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 text-start">
                            <div className="d-inline">
                                <i className="fas fa-check border border-3 border-danger p-2 mt-4 rounded-circle"></i>
                                <h5 className="d-inline ms-3">Awesome Services</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row text-light">
                        <div className="col-sm-12 col-md-6 col-lg-6 text-start">
                            <div className="d-inline">
                                <i className="fas fa-check border border-3 border-danger p-2 mt-4 rounded-circle"></i>
                                <h5 className="d-inline ms-3">5 Year Warranty</h5>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 text-start">
                            <div className="d-inline">
                                <i className="fas fa-check border border-3 border-danger p-2 rounded-circle mt-4"></i>
                                <h5 className="d-inline ms-3">10+ Years Experience</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row text-light">
                        <div className="col-sm-12 col-md-6 col-lg-6 text-start">
                            <div className="d-inline">
                                <i className="fas fa-check border border-3 border-danger p-2 mt-4 rounded-circle"></i>
                                <h5 className="d-inline ms-3">Wide Range Brands</h5>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 text-start">
                            <div className="d-inline">
                                <i className="fas fa-check border border-3 border-danger p-2 rounded-circle mt-4"></i>
                                <h5 className="d-inline ms-3">Trusted By Clients</h5>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 text-start">
                            <div className="d-inline">
                                <i className="fas fa-check border border-3 border-danger p-2 rounded-circle mt-4"></i>
                                <h5 className="d-inline ms-3">Qualified Salesman</h5>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 text-start">
                            <div className="d-inline">
                                <i className="fas fa-check border border-3 border-danger p-2 rounded-circle mt-4"></i>
                                <h5 className="d-inline ms-3">After Sales Support</h5>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 text-start">
                            <div className="d-inline">
                                <i className="fas fa-check border border-3 border-danger p-2 rounded-circle mt-4"></i>
                                <h5 className="d-inline ms-3">Easy Payment</h5>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 text-start">
                            <div className="d-inline">
                                <i className="fas fa-check border border-3 border-danger p-2 rounded-circle mt-4"></i>
                                <h5 className="d-inline ms-3">Premium Services</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;