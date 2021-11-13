import React, { useEffect, useState } from 'react';
import useFirebase from '../../../Hooks/UseFirebase';
import MyOrder from '../MyOrder/MyOrder';
import '../MyOrder/MyOrder.css';


const MyOrders = () => {
    const {user}=useFirebase();
    const [orders,setOrders]=useState([]);
    
    useEffect(()=>{
        const url=`http://localhost:5000/myOrders/${user.email}`;
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