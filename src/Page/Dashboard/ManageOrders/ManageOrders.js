import React, { useEffect, useState } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageOrders = () => {
    const [allOrders,setAllOrders]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/manageOrders')
        .then(res=>res.json())
        .then(data=>setAllOrders(data))
    },[])   
    return (
        <div>
            <div className="mt-3">
                <h2 className="fw-bold">Manage All Orders</h2>
                <h4 className="text-danger mb-5">Total Orders: {allOrders.length}</h4>
            </div>
            <div>
                {
                    allOrders.map(allOrder=><ManageOrder key={allOrder._id} allOrder={allOrder} />)
                }
            </div>
        </div>
    );
};

export default ManageOrders;