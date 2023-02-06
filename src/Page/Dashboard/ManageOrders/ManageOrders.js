import React, { useEffect, useState } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_KEY}/manageOrders`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    return (
        <div style={{ minHeight: "85vh" }}>
            {allOrders?.length > 0 ?
                <div className="myOrder-container">
                    <h2 className="fw-bold text-light pt-5">Manage All Orders</h2>
                    <h4 className="text-danger">Total Orders: {allOrders.length}</h4>
                    <hr className="text-light mb-5" />
                    {
                        allOrders.map(allOrder => <ManageOrder key={allOrder?._id} allOrder={allOrder} />)
                    }
                </div> :
                <div className="d-flex justify-content-center align-items-center pt-5">
                    <div className="spinner-border text-danger text-center d-block" role="status">
                    </div>
                </div>}
        </div>
    );
};

export default ManageOrders;