import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/UseAuth';
import MyOrder from '../MyOrder/MyOrder';
import '../MyOrder/MyOrder.css';


const MyOrders = () => {
    const {user}=useAuth();
    const [orders,setOrders]=useState([]);
    
    useEffect(()=>{
        const url=`https://serene-coast-79100.herokuapp.com/myOrders/${user.email}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[user]);
    return (
        <div className="myOrder-container text-light h-100">
            <h2 className="pt-4">Your All Orders</h2>
            <h4 className="pb-4">Current Orders: <span className="text-danger">{orders.length}</span> </h4>
        {
            orders.map(order=><MyOrder key={order._id} order={order}/>)
        }
        </div>
    );
};

export default MyOrders;