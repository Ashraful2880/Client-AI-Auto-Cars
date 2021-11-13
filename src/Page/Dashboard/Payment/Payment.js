import React from 'react';
import './Payment.css';
import gear from '../../../Image/gear.png';

const Payment = () => {
    return (
        <div className="payment-container">
            <h3 className="text-danger fw-bold pt-5">Payment Method Comming Soon</h3>
          <img src={gear} className="gear" alt="logo" />
      </div>
    );
};

export default Payment;