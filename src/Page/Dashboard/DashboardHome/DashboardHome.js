import React from 'react';
import useAuth from '../../../Hooks/UseAuth';
import '../Dashboard/Dashboard.css';

const DashboardHome = () => {
    const {user}=useAuth();
    return (
        <div className="card dashborad-home">
            <div className="d-flex justify-content-center mt-5">
                <div className="col-md-12 col-sm-12 col-lg-4">
                    <div className="card p-2">
                        <div>
                             <img src={user?.photoURL} height="90" width="90" className="rounded-circle" alt="User"/>
                        </div>
                        <div className="mt-4">
                            <h4>Hello  <span className="text-danger">{user.displayName}</span> </h4>
                            <h5 className="mt-1 mb-5">Welcome to Mr Automative <span className="fw-bold">Dashboard</span> </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;