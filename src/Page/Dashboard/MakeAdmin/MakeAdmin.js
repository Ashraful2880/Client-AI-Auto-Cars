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
        <div style={bgStyle}>
            <h2 className="text-danger pt-5">Make a Admin</h2>
            <form onSubmit={handleMakeAdmin}>
                <div className="mx-auto row w-100">
                    <input onBlur={handleAdminEmail} className="col-sm-10 col-md-10 col-lg-4 p-2 mt-3 mx-auto rounded-3 border-1" type="email" placeholder="Admin Email" required/>
                </div>
                <div className="mx-auto row w-100">
                    <input className="col-sm-10 col-md-10 col-lg-4 p-2 p-2 my-3 btn btn-primary rounded-3 mx-auto" type="submit" value="Confirm" />
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;