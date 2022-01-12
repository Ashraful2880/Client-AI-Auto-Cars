import React, { useEffect, useState } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageOrders = () => {
    const [allOrders,setAllOrders]=useState([]);
    useEffect(()=>{
        fetch('https://serene-coast-79100.herokuapp.com/manageOrders')
        .then(res=>res.json())
        .then(data=>setAllOrders(data))
    },[])   
    return (
        <div className="mt-3">
            <h2 className="fw-bold">Manage All Orders</h2>
            <h4 className="text-danger mb-5">Total Orders: {allOrders.length}</h4>
        
            {
                allOrders.map(allOrder=><ManageOrder key={allOrder._id} allOrder={allOrder} />)
            }
        </div>
    );
};

export default ManageOrders;