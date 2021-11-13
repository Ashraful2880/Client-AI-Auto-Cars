import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import './Testomonial.css';

const Testomonial = () => {
    const[ratings,setRatings]=useState([]);
    useEffect(()=>{
        fetch('https://serene-coast-79100.herokuapp.com/userRating')
        .then(res=>res.json())
        .then(data=>setRatings(data))
    },[])
    return (
        <div className="testimonial-container pb-5">
            <div className="pb-5 ">
                <h1 className="text-danger mt-5"><i className="fas fa-quote-right mt-5"></i></h1>
                <h2 className="fw-bold text-light">Testimonials</h2>
                <h4 className="mb-5 text-danger">What Clients Say About Us</h4>
            </div>
            <div className="container row mx-auto">
            {
                ratings.map(rating=>
                    <div key={rating._id} className="col-lg-4 col-md-12 col-sm-12 text-light">
                        <div className="item mb-5 mx-auto">
                            <div className="view w-100 front-view d-flex flex-column justify-content-center align-items-center"> 
                                <img src={rating.url} alt="userImage" className="profile"/>
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
                                <span className="fas fa-quote-right mt-3"></span>
                            </div>
                        </div>
                    </div>
                )
            }
            </div>
            <h1 className="text-danger"><i className="fas fa-quote-right mt-5"></i></h1>
        </div>
    );
};

export default Testomonial;