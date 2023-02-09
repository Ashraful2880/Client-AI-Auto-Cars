import React from 'react';
import discount from "../../../Image/discount.png";

const Discount = () => {
    return (
        <div className="container mx-auto">
            <div className="row align-items-center">
                <div className="col">
                    <img src={discount} alt="Discount_Image" />
                </div>
                <div className="col">
                    <h1 className="text-start fw-bold">HAVE A SPECIAL</h1>
                    <h1 className="text-start mb-5 text-danger fw-bold">DISCOUNT</h1>
                    <div className="input-container">
                        <input type="text" className="input-form" placeholder="Enter Your Email" />
                        <button className="submit-btn">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;