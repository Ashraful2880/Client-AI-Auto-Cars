import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import bg from '../../../Image/car-2.png';

const bgStyle={
    backgroundImage:`url(${bg})`,
    backgroundColor:'rgb(0 0 0 / 87%)',
    backgroundBlendMode:'darken',
    backgroundPosition:'right',
    backgroundRepeat:'no-repeat',
    backgroundAttachment:'fixed',
    backgroundSize:'cover',
    height:'70vh'
};

const MakeAdmin = () => {
    const [adminEmail,setAdminEmail]=useState('');
    const handleAdminEmail=event=>{
        setAdminEmail(event.target.value)
    }
    const handleMakeAdmin=event=>{
        event.preventDefault();
        const admin={email:adminEmail}
        fetch('https://serene-coast-79100.herokuapp.com/users/admin',{
            method:"PUT",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(admin)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
            if(result.acknowledged){
                Swal.fire({
                    position: 'center-center',
                    icon: 'success',
                    title: 'Admin Added Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                setAdminEmail('');
            }
        })
    }
    return (
        <div style={bgStyle} className="row mx-auto rate-container align-items-center ">
            <div className="col-sm-12 col-md-12 col-lg-4 mx-auto">
                <h2 className="text-danger">Make a Admin</h2>
                <form onSubmit={handleMakeAdmin}>
                    <div className="container">
                        <input onBlur={handleAdminEmail} className="w-100 p-2 mb-3 rounded-3 border-1 my-2" type="email" placeholder="New Admin Email" required/>
                        <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2 btn btn-outline-danger" type="submit" value="Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;