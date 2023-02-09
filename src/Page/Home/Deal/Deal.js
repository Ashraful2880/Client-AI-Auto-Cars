import React from 'react';
import deal from "../../../Image/Deal.png";

const Deal = () => {
    return (
        <div className="container mx-auto">
            <div className="row align-items-center">
                <div className="col">
                    <h1 className="text-start fw-bold">DEAL OF THE DAY</h1>
                    <h3 className="text-start mb-5 text-danger">
                        HOT DEAL ! SALE UP TO 30% OFF
                    </h3>
                    <div className="d-flex">
                        <div className="mx-2 border rounded" style={{ width: "15%" }}>
                            <span className="fw-bold pt-4 pb-2 d-inline-block fs-4">
                                21
                            </span>
                            <p>Days</p>
                        </div>
                        <div className="mx-2 border rounded" style={{ width: "15%" }}>
                            <span className="fw-bold pt-4 pb-2 d-inline-block fs-4">
                                20
                            </span>
                            <p>Hrs</p>
                        </div>
                        <div className="mx-2 border rounded" style={{ width: "15%" }}>
                            <span className="fw-bold pt-4 pb-2 d-inline-block fs-4">
                                09
                            </span>
                            <p>Mins</p>
                        </div>
                        <div className="mx-2 border rounded" style={{ width: "15%" }}>
                            <span className="fw-bold pt-4 pb-2 d-inline-block fs-4">
                                16
                            </span>
                            <p>Secs</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <img src={deal} alt="Discount_Image" />
                </div>
            </div>
        </div>
    );
};

export default Deal;