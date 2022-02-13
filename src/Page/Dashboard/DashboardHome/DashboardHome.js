import React from 'react';
import useAuth from '../../../Hooks/UseAuth';
import '../Dashboard/Dashboard.css';

const DashboardHome = () => {
    const {user}=useAuth();
    return (
        <div className="card dashborad-home">
            <div className="d-flex justify-content-center mt-5">
                <div className="col-md-12 col-sm-12 col-lg-4 mt-5">
                    <div>
                         <img src={user?.photoURL} height="40%" width="40%" className="rounded-circle" alt="User"/>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-light">Hello  <span className="text-danger">{user.displayName}</span> </h1>
                        <h2 className="mt-1 mb-5 text-light">Welcome to Mr Automative <span className="fw-bold">Dashboard</span> </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;