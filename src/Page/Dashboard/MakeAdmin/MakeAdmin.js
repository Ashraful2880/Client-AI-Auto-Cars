import React from 'react';
import { useState } from 'react';
import bg from '../../../Image/car-2.png';

const bgStyle={
    backgroundImage:`url(${bg})`,
    backgroundColor:'rgb(0 0 0 / 87%)',
    backgroundBlendMode:'darken',
    backgroundPosition:'right',
    backgroundRepeat:'no-repeat',
    backgroundAttachment:'fixed',
    backgroundSize:'cover',
    height:'95vh'
};

const MakeAdmin = () => {
    const [adminEmail,setAdminEmail]=useState('');
    const handleAdminEmail=event=>{
        setAdminEmail(event.target.value)
    }
    const handleMakeAdmin=event=>{
        event.preventDefault();
        const admin={email:adminEmail}
        fetch('http://localhost:5000/users/admin',{
            method:"PUT",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(admin)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
            if(result.acknowledged){
                alert("Successfully MAke Successfull");
                setAdminEmail('');
            }
        })
    }
    return (
        <div className="mb-3">
            <div style={bgStyle} className="row mx-auto rate-container d-flex flex-column justify-content-center align-items-center ">
                <div className="col-sm-12 col-md-12 col-lg-4 mx-auto">
                    <h2 className="text-danger">Make a Admin</h2>
                    <form onSubmit={handleMakeAdmin}>
                        <div className="container">
                        <input onBlur={handleAdminEmail} className="w-100 p-2 mb-3 rounded-3 border-1 my-2" type="email" placeholder="Admin Email" required/>
                        <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2 btn btn-primary" type="submit" value="Confirm" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;