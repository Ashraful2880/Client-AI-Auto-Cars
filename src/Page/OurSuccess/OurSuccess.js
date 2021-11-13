import React from 'react';
import './OurSuccess.css';

const OurSuccess = () => {
    return (
        <div className="success-bg">
                <div className="row container mx-auto pt-4">
                    <div className="col-sm-12 col-md-3 col-lg-3 py-4 rounded-3 mx-auto mb-2 award-container">
                        <i className="fas fa-car text-danger fs-1 border border-2 rounded-circle p-2"></i>
                        <h3 className="text-light mt-3">1125</h3>
                        <h4 className="text-light">Total <span className="text-danger">Cars</span></h4>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3 py-4 rounded-3 mx-auto mb-2 award-container">
                        <i className="fas fa-user-tie text-danger fs-1 border border-2 rounded-circle p-2"></i>
                        <h3 className="text-light mt-3">1025</h3>
                        <h4 className="text-light">Happy <span className="text-danger">Client</span></h4>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3 py-4 rounded-3 mx-auto mb-2 award-container">
                        <i className="fas fa-award text-danger fs-1 border border-2 rounded-circle p-2"></i>
                        <h3 className="text-light mt-3">725</h3>
                        <h4 className="text-light">Award <span className="text-danger">Winning</span></h4>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3 py-4 rounded-3 mx-auto mb-2 award-container">
                        <i className="fas fa-thumbs-up text-danger fs-1 border border-2 rounded-circle p-2"></i>
                        <h3 className="text-light mt-3">975</h3>
                        <h4 className="text-light">Dealer <span className="text-danger">Reviews</span></h4>
                    </div>
                </div>
        </div>
    );
};

export default OurSuccess;