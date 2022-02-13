import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer-container py-5">
            <div className="row container mx-auto">
                <div className="col-lg-3 col-md-6 col-sm-12 text-start text-white">
                    <Link className="text-decoration-none" to="/home">
                        <h2 className="text-danger fst-italic mb-3">Mr. Automative</h2>
                    </Link>
                    <p>Company of Cars also celebrates the diversity of our community. We strive to be good corporate citizens and give back wherever we can. We recognize the multiplicity of ethnic backgrounds that make up the fabric of Canadian society</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 text-start text-white">
                    <h5 className="mb-4 text-danger">Support</h5>
                    <p>Customer Support</p>
                    <p>Privacy & policy</p>
                    <p>Contact Channel</p>
                    <div className="mb-3">
                        <Link className="text-white me-3 pe-2 border-3 border-end" to="/home">Home</Link>
                        <Link className="text-white me-3 pe-2 border-3 border-end" to="/signup">Signup</Link>
                        <Link className="text-white me-3 pe-2" to="/signin">Signin</Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 text-start text-white">
                        <h5 className="mb-4 text-danger ">About Us</h5>
                        <p>Our Success Story</p>
                        <p>Tips for New Customer</p>
                        <p>Career With Us</p>
                        <p>Be our Partner</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 text-start text-white">
                    <h5 className="mb-4 text-danger">Contact Information</h5>
                    <h5> <i className="fas fa-phone-alt me-2 text-danger"> </i>+880-<span className="text-danger">1974238487</span> </h5>
                    <p> <i className="fas fa-envelope me-2 text-danger"> </i> contact.ashraful1@gmail.com</p>
                    <p> <i className="fas fa-map-marker-alt me-2 text-danger"> </i> ABC Road, XYZ City, New York</p>
                </div>
                <hr className="text-white" />
                <div className="social-area mb-4">
                    <i className="text-white bg-danger mx-1 rounded-circle fs-5 fab fa-facebook"> </i>
                    <i className="text-white bg-danger mx-1 rounded-circle fs-5 fab fa-twitter"> </i>
                    <i className="text-white bg-danger mx-1 rounded-circle fs-5 fab fa-instagram"> </i>
                </div>
                <hr className="text-white" />
            </div>
                <div>
                    <p className="text-white">Copyright &copy; 2021-All Rights Reserved- <a  className="text-danger" href="http://ashrafulislambd.com/">ashrafulislambd.com</a></p>
                </div>
        </div>
    );
};

export default Footer;