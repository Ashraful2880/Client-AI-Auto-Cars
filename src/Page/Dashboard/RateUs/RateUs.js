import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import './RateUs.css';

const RateUs = () => {
    const [name,setName]=useState("");
    const [rating,setRating]=useState("");
    const [image,setImage]=useState(null);
    const [comment,setComment]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!image){
            alert("Please Select an Image")
            return;
        }
        const formData=new FormData();
        formData.append("name",name);
        formData.append("rating",rating);
        formData.append("image",image);
        formData.append("comment",comment);
        
        fetch('https://serene-coast-79100.herokuapp.com/addRating', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert("Rating Added")
            }
        })
        .catch(error => {
            alert('Error:', error);
        });
    }
    return (
        <div className="row rate-container">
            <div className="col-sm-12 col-md-12 col-lg-4 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="container mt-5">
                        <h2 className="fw-bold text-danger">Feedback is Alwayes Welcome</h2>
                        <h4 className="mb-4 text-light">Give A Feedback as Rating</h4>
                        <input 
                            onChange={e=>setName(e.target.value)}
                            type="text" 
                            className="w-100 p-2 mb-2 rounded-3 border-1 my-2" 
                            placeholder="Your Name" 
                            required />
                        <input
                            onChange={e=>setRating(e.target.value)} 
                            type="number" 
                            className="w-100 p-2 mb-2 rounded-3 border-1 my-2" 
                            placeholder="Rating (Out Of-5)" 
                            required />
                        <input 
                            onChange={e=>setImage(e.target.files[0])}
                            type="file" 
                            accept="image/*" 
                            className="w-100 p-2 mb-2 rounded-3 border-1 my-2 custom-file-input"/>
                        <textarea 
                            onChange={e=>setComment(e.target.value)}
                            className="w-100 p-2 mb-2 rounded-3 border-1 my-2" 
                            placeholder="Your Comment" 
                            name="comment" rows="4" required>
                        </textarea>
                        <input 
                            type="submit" 
                            className="w-100 p-2 mb-5 rounded-3 border-1 my-2 btn btn-outline-danger" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RateUs;