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
        <div className="mt-3 myOrder-container">
            <h2 className="fw-bold text-light pt-5">Manage All Orders</h2>
            <h4 className="text-danger">Total Orders: {allOrders.length}</h4>
            <hr className="text-light mb-5" />        
            {
                allOrders.map(allOrder=><ManageOrder key={allOrder._id} allOrder={allOrder} />)
            }
        </div>
    );
};

export default ManageOrders;