import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/UseAuth';
import MyOrder from '../MyOrder/MyOrder';
import '../MyOrder/MyOrder.css';


const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_KEY}/myOrders/${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user, orders]);

    return (
        <div className="myOrder-container text-light h-100 pt-5" style={{ minHeight: "100vh" }}>
            {orders?.length > 0 ?
                <div>
                    <h4 className="pb-4">All Current Orders: <span className="text-danger">
                        {orders.length}</span>
                    </h4>
                    <div className="container row mx-auto mb-4">
                        {
                            orders?.map(order => <MyOrder key={order._id} order={order} />)
                        }
                    </div>
                </div> :
                <div className="d-flex justify-content-center align-items-center pb-5">
                    <div className="spinner-border text-danger text-center d-block" role="status">
                    </div>
                </div>
            }
        </div>
    );
};

export default MyOrders;