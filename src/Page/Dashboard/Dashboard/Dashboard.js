import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {Switch,Route,Link,useRouteMatch} from "react-router-dom";
import useAuth from '../../../Hooks/UseAuth';
import AddProduct from '../AddProduct/AddProduct';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import RateUs from '../RateUs/RateUs';
import './Dashboard.css';

const Dashboard = () => {
    const[admin,setAdmin]=useState(false);
    let { path, url } = useRouteMatch();
    const {user,handleSignOut}=useAuth();
//<----------------- Load Admin Data From Database --------------->
    useEffect(()=>{
        fetch(`https://serene-coast-79100.herokuapp.com/user/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.admin))
    },[user.email]);

   const myFunction=()=>{
       const toggleButton=document.getElementById("toogleDiv");
       if (toggleButton.style.display === "none") {
        toggleButton.style.display = "block";
      } else {
        toggleButton.style.display = "none";
      }
   }

    return (
        <div>
            <button onClick={myFunction} className="border-0 d-flex "><i className="fas fa-bars btn btn-danger toggle-button"></i></button>
            <div className="row mx-auto" >
                <div className="col-md-12 col-lg-2 col-sm-12 px-0" id="toogleDiv">
                    <div className="card leftCard h-100 w-100 border-0 px-3">
                        <div className="d-flex flex-row align-items-center">
                            <img className="rounded-circle h-50 text-light" src={user?.photoURL} alt="User-Profile"/>
                            <span className="text-light ms-5 fs-5">{user?.displayName}</span>
                        </div>
                        <hr className="text-light"/>

                        <div className="d-flex flex-column align-items-center me-3">
                            <button className="w-100 border-0 rounded-3 btn subMenu">
                                <Link to={ `${url}`}><span>Dashboard</span></Link>
                            </button>
                            <button className="subMenu btn mt-3 w-100 border-0 rounded-3">
                                <Link to={ `${url}/payment`}><span>Pay</span></Link>
                            </button>
                            <button className="subMenu btn mt-3 w-100 border-0 rounded-3">
                                <i className="fas fa-shopping-cart text-light"></i>
                                <Link to={ `${url}/myOrders`}><span>My Orders</span></Link>
                            </button>
                            <button className="subMenu btn mt-3 w-100 border-0 rounded-3">
                                <Link to={ `${url}/userRating`}><span>Rate Us</span></Link>
                            </button>
                        {admin&& 
                        <>
                            <button className="subMenu btn mt-3 w-100 border-0 rounded-3">
                                <Link to={ `${url}/manageOrders`}><span>Manage Orders</span></Link>
                            </button>
                            <button className="subMenu btn mt-3 w-100 border-0 rounded-3">
                                <Link to={ `${url}/addProducts`}><span>Add Product</span></Link>
                            </button>
                            <button className="subMenu btn mt-3 w-100 border-0 rounded-3">
                                <Link to={ `${url}/manageProducts`}><span>Manage Product</span></Link>
                            </button>
                            <button className="subMenu btn mt-3 w-100 border-0 rounded-3">
                                <Link to={ `${url}/makeAdmin`}><span>Make Admin</span></Link>
                            </button>
                        </>
                        }
                                <span className="mt-4 text-secondary">Others</span>
                            <button className="subMenu btn mt-3 w-100 border-0 rounded-3">
                                <Link onClick={handleSignOut} className="nav-link text-white fs-5" to="/home">
                                    <span>Logout</span>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-10 col-sm-12 px-0">
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome/>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment/>
                        </Route>
                        <Route path={`${path}/myOrders`}>
                            <MyOrders/>
                        </Route>
                        <Route path={`${path}/userRating`}>
                            <RateUs/>
                        </Route>
                        <Route path={`${path}/manageOrders`}>
                            <ManageOrders/>
                        </Route>
                        <Route path={`${path}/addProducts`}>
                            <AddProduct/>
                        </Route>
                        <Route path={`${path}/manageProducts`}>
                            <ManageProducts/>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;