import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import './Testimonial.css';

const Testimonial = () => {
    const [ratings, setRatings] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_KEY}/userRating`)
            .then(res => res.json())
            .then(data => setRatings(data))
    }, [])
    return (
        <div className="testimonial-container pb-5">
            <div className="pb-5 ">
                <i className="fas fa-quote-right mt-5 text-danger fw-bold fs-1"></i>
                <h2 className="fw-bold text-light">Testimonials</h2>
                <h4 className="mb-3 text-danger">What Clients Say About Us</h4>
            </div>
            {ratings?.length > 0 ?
                <div className="container row mx-auto">
                    {
                        ratings.map(rating =>
                            <div key={rating._id} className="col-lg-4 col-md-12 col-sm-12 text-light" data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                <div className="item mb-5 mx-auto">
                                    <div className="view w-100 front-view d-flex flex-column justify-content-center align-items-center">
                                        <img src={rating.url} alt="userImage" className="profile" />
                                        <h5 className="pt-3 text-uppercase"> {rating.name}</h5>
                                        <Rating
                                            className="text-warning"
                                            readonly
                                            emptySymbol="far fa-star"
                                            fullSymbol="fas fa-star"
                                            initialRating={rating.star}>
                                        </Rating>
                                    </div>
                                    <div className="view back-view d-flex flex-column justify-content-center align-items-center text-center">
                                        <span className="fas fa-quote-left mb-3"></span>
                                        <div className="fs-5"> {rating.comment}</div>
                                        <span className="fas fa-quote-right"></span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div> :
                <div className="d-flex justify-content-center align-items-center pb-5">
                    <div className="spinner-border text-danger text-center d-block" role="status">
                    </div>
                </div>
            }
            <i className="fas fa-quote-right text-danger fs-1"></i>
        </div>
    );
};

export default Testimonial;