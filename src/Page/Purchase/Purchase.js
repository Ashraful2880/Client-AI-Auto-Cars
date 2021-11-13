import React, {useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import useFirebase from '../../Hooks/UseFirebase';
import './Purchase.css';

const Purchase = () => {
    const {orderId}=useParams();
    const [order, setOrder]=useState({});
    const {user}=useFirebase();

    // Load Single Data <--------------------->

    useEffect(()=>{
        fetch(`http://localhost:5000/order/${orderId}`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[]);

    //<------------ Send Data & Email To Database ------------->

    //<--------------- Booked User Information Here ---------------->

    const nameRef=useRef();
    const emailRef=useRef();
    const numberRef=useRef();
    const addressRef=useRef();
    
    const handleClick=(e)=>{
        e.preventDefault();
        const userName=(nameRef.current.value);
        const email=(emailRef.current.value);
        let number=(numberRef.current.value);
        let address=(addressRef.current.value);

        const userInfo={userName:userName,email:email,number:number,address:address};
    
        const newData={...order,...userInfo};
        delete newData?._id;

        fetch('http://localhost:5000/purchaseConfirm',{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(newData)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.acknowledged){
                window.alert("Congratulations !!! Your Order Done");
            };
        });
    };
    return (
        <div className="pt-3">
            <h2 className="text-danger">Confirm The Purchase</h2>
            <h5 className="text-secondary mb-4">Your Order Almost Complete!!!</h5>
            <div className="row container mx-auto">
                <div className="col-sm-12 col-md-12 col-lg-6 text-start order-container">
                    <h3 className="head text-light fw-bold bg-danger py-1 px-3 rounded-3">Brand- {order?.name}</h3>
                    <img className="orderImage w-100 rounded-3 mt-4 border border-5" src={order?.url} alt="CarImage" />
                    <h5 className="duration text-light bg-danger py-1 px-3 rounded-3">Model: {order?.model}</h5>
                    <h5 className="fw-bold mt-2">Model-Year- <span className="text-danger">{ order?.modelYear}</span> </h5>
                    <h3 className="mt-2 mb-5 pb-5">Price: <span className="text-danger">${order?.price}</span></h3>
                </div>
                <div className="col-md-12 col-sm-12 col-lg-6">
                   <div className=" mt-1 mb-5 ">
                        <h3 className="mb-5">Great !!! Just Fill The Form</h3>
                        
                    <form onSubmit={handleClick} className="d-flex flex-column justify-content-center input-container">
                        <div>
                            <input className="w-75 p-3 mb-3 border-0" ref={nameRef} type="text" defaultValue= {user?.displayName} required/>
                        </div>
                        <div>
                            <input className="w-75 p-3 mb-3 border-0" ref={emailRef} type="email" defaultValue= {user?.email} required/>
                        </div>
                        <div>
                            <input className="w-75 p-3 mb-3 border-0" ref={numberRef}  type="number" placeholder="Contact Number" required/>
                        </div>
                        <div>
                            <input className="w-75 p-3 mb-3 border-0" ref={addressRef} type="text" placeholder=" Address (Optional)"/>
                        </div>
                        <div>
                            <input className="w-75 p-2 btn btn-danger mt-4" type="submit" value="Confirm Purchase" />
                        </div>
                    </form>
                   </div>   
                </div>
            </div>
        </div>
    );
};

export default Purchase;