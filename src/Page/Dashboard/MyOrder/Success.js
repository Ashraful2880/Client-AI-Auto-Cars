import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div className="rate-container pt-5 text-light">
            <h1>Payment Successfull</h1>
            <h3>Please Confirm Your Order</h3>
            <Link to="/dashboard">
                <button className="btn btn-success px-5 fs-5 mt-4">Confirm</button>
            </Link>
        </div>
    );
};

export default Success;