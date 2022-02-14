import React from 'react';
import useAuth from '../../../Hooks/UseAuth';
import './MyOrder.css';

const MyOrder = ({order}) => {
    const {name,url,model, details,price,_id}=order;
    const {user}=useAuth();

    //<-------------- Delete an Order By User ------------>

    const handleDelete=(id)=>{
        const proceed=window.confirm("Are You Sure ? Want To Delete ?");
        if (proceed){
            const url=`https://serene-coast-79100.herokuapp.com/deleteOrder/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    window.alert('Deleted Successfully')
                }
                window.location.reload(false);
        });
        }
    };

    //<---------- Function For Payment ----------->
    
    const purchase=()=>{
        const order={
            cus_name: user?.displayName,
            cus_email: user?.email,
            product_name:name,
            product_profile: details,
            product_image: url,
            total_amount: parseInt(price),
        }
        fetch(`http://localhost:5000/init`,{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            window.location.replace(data);
        })
    }

    return (
        <div className="row container mx-auto py-3 border rounded-3">
            <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                <img className="w-50 single-img" src={url} alt="booked-pic" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 text-start px-5 pt-3">
                <h3 className="text-danger">{name}- ({model})</h3>
                <p className="text-light"> {details}</p>
                <div className="d-flex justify-content-between align-items-center myBtn">
                    <h4 className="text-light">Price: <span className="text-danger">${price}</span></h4>
                    <button onClick={purchase} className="btn btn-success py-2">Process To Pay</button>
                    <button onClick={()=>handleDelete (_id)} className="btn btn-danger py-2">Delete Order</button>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;