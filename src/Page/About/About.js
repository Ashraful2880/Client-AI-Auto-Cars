import React from 'react';
import aboutCar from '../../Image/about.png';
import './About.css';
const About = () => {
    return (
        <div className="pb-5">
            <div className="container-fluid row mx-auto about-container mt-5">
                <h1 className="mt-4 text-white fw-bold">Who We Are</h1>
                <h5 className=" mb-3 text-white">Few Words About Our Company</h5>
                <div className="col-sm-12 col-md-12 col-lg-6 mx-auto mt-5 pt-5 w-50">
                    <img className="mt-2 rounded-3 p-3 w-100" src={aboutCar} alt="aboutImage" />
                </div>
                <div className=" col-sm-12 col-md-12 col-lg-6 py-3 rounded-3 px-4 about-text">
                    <h2 className=" text-danger">AI Auto Cars</h2>
                    <hr className="text-white mb-5" />
                    <p className="mb-3 fs-5 text-start">
                    <strong>AI Auto Cars</strong> is a leading digital marketplace and solutions provider for the automotive industry that connects car shoppers with sellers. Launched in 1998 and headquartered in Chicago, the Company empowers shoppers with the data, resources and digital tools needed to make informed buying decisions and seamlessly connect with automotive retailers.
                    </p>
                    <br />
                    <p className="mb-3 fs-5 text-start">
                    We opened the doors of the first Company of Cars retail location in 2014 after more than ten years mixing it up in the hyper competitive automotive wholesale business. Originally located on the corner of Broadway and Quebec just outside downtown Vancouver, we moved our store in 2018 to a new larger space at 2000 Boundary Road on the NewYork.
                    </p>
                    <br />
                    <p className="mb-3 fs-5 text-start">
                    We believe that our sales and service staff should be informed, and helpful, without being pushy or overbearing. We want you to be our customer for life and we work hard to earn your business each and every time we interact with you.
                    </p>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="row container mx-auto mt-5">
                    <div className="col-lg-6 col-md-12 col-sm-12 mt-3 text-start">
                        <h1 className="fw-bold">Why Choose</h1>
                        <h3 className="text-danger fst-italic fw-bold pb-4">AI Auto Cars</h3>
                        <p className="fs-5 text-secondary">From new car detailing to wrapping classic cars, <strong>AI Auto Cars</strong> can do it all. We only use the best products on the market whilst also maintaining an impeccable level of service.</p>
                        <p className="fs-5 text-secondary"><strong>AI Auto Cars</strong> are certified by many leaading brands within our field, some of which include Gtechniq, SunTek, Kamikaze and many more.For More Query Please Visit our Office</p>
                        
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
                        <div className="row ms-5">
                            <div className="col-sm-12 col-md-6 col-lg-6 text-start">
                                <div className="d-inline">
                                    <i className="fas fa-check border border-3 border-danger p-2 mt-4 rounded-circle"></i>
                                    <h5 className="d-inline ms-3">First Class Service</h5>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 text-start">
                                <div className="d-inline">
                                    <i className="fas fa-check border border-3 border-danger p-2 mt-4 rounded-circle"></i>
                                    <h5 className="d-inline ms-3">Fully Secure & Insured</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row ms-5">
                            <div className="col-sm-12 col-md-6 col-lg-6 text-start">
                                <div className="d-inline">
                                    <i className="fas fa-check border border-3 border-danger p-2 mt-4 rounded-circle"></i>
                                    <h5 className="d-inline ms-3">Premium Products</h5>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 text-start">
                                <div className="d-inline">
                                    <i className="fas fa-check border border-3 border-danger p-2 mt-4 rounded-circle"></i>
                                    <h5 className="d-inline ms-3">Customizable Services</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row ms-5">
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
                        <div className="row ms-5">
                            <div className="col-sm-12 col-md-6 col-lg-6 text-start">
                                <div className="d-inline">
                                    <i className="fas fa-check border border-3 border-danger p-2 mt-4 rounded-circle"></i>
                                    <h5 className="d-inline ms-3">Wide range of brands</h5>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 text-start">
                                <div className="d-inline">
                                    <i className="fas fa-check border border-3 border-danger p-2 rounded-circle mt-4"></i>
                                    <h5 className="d-inline ms-3">Trusted by our clients</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container">
                <h1 className="text-danger mt-3 fw-bold">We are The Best</h1>    
                <h5 className="mb-5">Customer Satisfaction & Best Quality is our Commitment</h5>  
                <div className="container row pt-5 mx-auto">
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <i className="fab fa-get-pocket fs-1 text-danger border border-danger border-2 rounded-circle p-2"></i>
                        <h4 className="fw-bold mt-3">Highly Secured</h4>
                        <p className="text-secondary my-3">The automotive industry is undergoing an evolution towards connected and autonomous vehicles. Increasingly smart cars include added features that enhance users’ experience or improve smart car security.</p>
                        <button className="btn btn-outline-danger mb-5 mt-3">Read More..</button>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <i className="fas fa-handshake fs-1 text-danger border border-danger border-2 rounded-circle p-2"></i>
                        <h4 className="fw-bold mt-3">Trusted Customers</h4>
                        <p className="text-secondary my-3">We strive to be good corporate citizens and give back wherever we can. We recognize the multiplicity of ethnic backgrounds that make up the fabric of Canadian society.We recognize the multiplicity Of the country</p>
                        <button className="btn btn-outline-danger mb-5 mt-3">Read More..</button>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <i className="fas fa-dollar-sign fs-1 text-danger border border-danger border-2 rounded-circle p-2"></i>
                        <h4 className="fw-bold mt-3">Exclusive Offers</h4>
                        <p className="text-secondary my-3">Simple interest does not compound on interest, which generally saves a borrower money.However, simple interest does not mean that every time you make a payment on your Loan with lowest interest Only on <strong>AI Auto Cars</strong></p>
                        <button className="btn btn-outline-danger mb-5 mt-3">Read More..</button>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <i className="fas fa-hands-helping fs-1 text-danger border border-danger border-2 rounded-circle p-2"></i>
                        <h4 className="fw-bold mt-3 text-center">Unlimited Support</h4>
                        <p className="text-secondary my-3">There are plenty of ways for a dealer to add to the total cost of the vehicle completely at their own discretion. Many times these additional fees look like conveyance fees, dealer handling fee,of the vehicle at their own discretion</p>
                        <button className="btn btn-outline-danger mb-5 mt-3">Read More..</button>
                    </div>
                </div>  
            </div>            
        </div>
    );
};

export default About;