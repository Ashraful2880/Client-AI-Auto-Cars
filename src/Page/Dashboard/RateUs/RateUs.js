import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/UseAuth';
import './RateUs.css';

const RateUs = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {user}=useAuth();
    const onSubmit = data => {
        fetch('https://serene-coast-79100.herokuapp.com/addRating',{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.acknowledged){
                alert("Thanks For Your Feedback");
                reset();
            }
        })
    };
    
    return (
      
            <div className="row mx-auto rate-container justify-content-center align-items-center ">
                <div className="col-sm-12 col-md-12 col-lg-4 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="container">
                            <h2 className="fw-bold text-danger">Feedback is Alwayes Welcome</h2>
                            <h4 className="mb-5 text-light">Give A Feedback Rating</h4>
                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Your Name" type="text" {...register("name", { required: true })} />
                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Rating (Max-5)" type="number"{...register("star", { min: 2, max: 5 },{ required: true })} />
                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2 text-light" type="file"{...register("url", { required: true })} />
                            <textarea className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Your Valuable Comment"{...register("comment", { required: true })} /> 
                            <input className="w-100 p-2 mb-5 rounded-3 border-1 my-2 btn btn-outline-danger" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default RateUs;