import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from '../../../Hooks/UseAuth';
import AddProduct from '../AddProduct/AddProduct';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import RateUs from '../RateUs/RateUs';
import './Dashboard.css';

const Dashboard = () => {
    const [admin, setAdmin] = useState(false);
    let { path, url } = useRouteMatch();
    const { user, handleSignOut } = useAuth();
    //<----------------- Load Admin Data From Database --------------->
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_KEY}/user/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email]);

    const myFunction = () => {
        const toggleButton = document.getElementById("toogleDiv");
        if (toggleButton.style.display === "none") {
            toggleButton.style.display = "block";
        } else {
            toggleButton.style.display = "none";
        }
    }

    return (
        <div className="pt-4" style={{ minHeight: "100vh" }}>
            <button onClick={myFunction} className="border-0 d-flex toggle-container">
                <i className="fas fa-bars btn btn-danger toggle-button mt-2"></i>
            </button>
            <div className="row mx-auto" >
                <div className="col-md-12 col-lg-2 col-sm-12 px-0" id="toogleDiv">
                    <div className="card leftCard h-100 w-100 border-0 px-3">
                        <Link to="/home" className="text-decoration-none">
                            <div className="d-flex flex-row align-items-center justify-content-center mt-4">
                                <img className="rounded-circle w-25 text-light ms-2 border border-danger" src={user?.photoURL} alt="User-Profile" />
                                <span className="text-light ms-3 fs-5">{user?.displayName}</span>
                            </div>
                        </Link>
                        <hr className="text-light" />
                        <div className="d-flex flex-column align-items-center me-3">
                            <Link to={`${url}`} className="w-100 border-0 rounded-3 btn subMenu">
                                <button className="w-100 border-0 rounded-3 btn text-light">
                                    Dashboard
                                </button>
                            </Link>
                            <Link to={`${url}/myOrders`} className="w-100 border-0 rounded-3 btn subMenu">
                                <button className="w-100 border-0 rounded-3 btn text-light">
                                    My Orders
                                </button>
                            </Link>
                            <Link to={`${url}/addRating`} className="w-100 border-0 rounded-3 btn subMenu">
                                <button className="w-100 border-0 rounded-3 btn text-light">
                                    Rate Us
                                </button>
                            </Link>
                            {admin &&
                                <>
                                    <Link to={`${url}/manageOrders`} className="w-100 border-0 rounded-3 btn subMenu">
                                        <button className="w-100 border-0 rounded-3 btn text-light">
                                            Manage Orders
                                        </button>
                                    </Link>
                                    <Link to={`${url}/addProducts`} className="w-100 border-0 rounded-3 btn subMenu">
                                        <button className="w-100 border-0 rounded-3 btn text-light">
                                            Add product
                                        </button>
                                    </Link>
                                    <Link to={`${url}/manageProducts`} className="w-100 border-0 rounded-3 btn subMenu">
                                        <button className="w-100 border-0 rounded-3 btn text-light">
                                            Manage Product
                                        </button>
                                    </Link>
                                    <Link to={`${url}/makeAdmin`} className="w-100 border-0 rounded-3 btn subMenu">
                                        <button className="w-100 border-0 rounded-3 btn text-light">
                                            Make Admin
                                        </button>
                                    </Link>
                                </>
                            }
                            <Link onClick={handleSignOut} to="/home" className="w-100 border-0 rounded-3 btn subMenu">
                                <button className="w-100 border-0 rounded-3 btn text-light">
                                    Log Out
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-10 col-sm-12 px-0">
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome />
                        </Route>
                        <Route path={`${path}/myOrders`}>
                            <MyOrders />
                        </Route>
                        <Route path={`${path}/addRating`}>
                            <RateUs />
                        </Route>
                        <Route path={`${path}/manageOrders`}>
                            <ManageOrders />
                        </Route>
                        <Route path={`${path}/addProducts`}>
                            <AddProduct />
                        </Route>
                        <Route path={`${path}/manageProducts`}>
                            <ManageProducts />
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;