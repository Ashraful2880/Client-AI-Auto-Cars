import React from 'react';
import '../Dashboard/Dashboard.css';

const DashboardHome = () => {
    return (
        <div className="card rightCard border-0 bg-light p-3 w-100">
                        <div className="d-flex justify-content-center mt-5 gap-2 p-3">
                            <div className="col-md-6">
                                <div className="card p-2">
                                    <div className="profile1">
                                        <img src="https://i.imgur.com/NI5b1NX.jpg" height="90" width="90" className="rounded-circle" alt=""/>
                                    </div>
                                    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                                        <span className="name">Bess Wills</span>
                                        <span className="mt-1">Bracelet ID:SFG 38393</span>
                                        <span className="dummytext mt-3 p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Text elit more smtit.Kimto lee.
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <button className="btn btn-primary mb-5">Next Appoinment</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card p-2">
                                    <div className="profile1">
                                        <img src="https://i.imgur.com/YyoCGsa.jpg" height="90" width="90" className="rounded-circle" alt=""/>
                                    </div>
                                    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                                        <span className="name">Bess Wills</span>
                                        <span className="mt-1">Bracelet ID:SFG 38393</span>
                                        <span className="dummytext mt-3 p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Text elit more smtit.Kimto lee. </span>
                                        </div>
                                    <div className="d-flex justify-content-center align-items-center mt-3">
                                        <button className="btn btn-danger mb-5">Next Appoinment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    );
};

export default DashboardHome;