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
        <div>
            <div className="myOrder-container mb-5">
                <h2 className="text-light pt-5">Your All Orders Here</h2>
                <h3 className="text-danger pb-5">Recent Orders: {orders.length}</h3>
            {
                orders.map(order=><MyOrder key={order._id} order={order}/>)
            }
            </div>
        </div>
    );
};

export default MyOrders;