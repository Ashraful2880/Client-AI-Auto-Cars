import React from 'react';
import Swal from 'sweetalert2';

const ManageOrder = ({allOrder}) => {
    console.log(allOrder);
    const {url,name,model,_id,price,address,color,email,number,userName}=allOrder;

    //<-------------- Delete Data By Click ------------>
    
    const handleDelete=(id)=>{
        const proceed=window.confirm("Are You Sure ? Want to Delete?");
        if (proceed){
            const url=`https://serene-coast-79100.herokuapp.com/deleteOrder/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    Swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: 'Deleted Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                window.location.reload(false);
        })
        }
    };
    //<---------------- Style for Order details Box --------------->
    const orderBoxStyle={
        boxShadow:'10px 10px 30px #dfdfdf',
        padding:'10px 0px 10px 20px',
        marginTop:'20px',
        borderRadius:'10px'
    }
    return (
        <div className="row mx-auto py-3 mb-3">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <img className="w-75 rounded-3 single-img" src={url} alt="booked-pic" />
                <br />
                <button className="btn mt-3 btn-success border-0 mx-3 px-5">Approve</button>
                <button onClick={()=>handleDelete(_id)} className="btn mt-3 btn-danger border-0 mx-3 px-5">Delete</button>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-start">
                    <div className="w-75 mx-auto" style={orderBoxStyle}>
                        <h3 className="fw-bold">Car Details</h3>
                        <h5>Car Brand: {name}</h5>
                        <h6 className="text-secondary">Model: {model}</h6>
                        <h6 className="text-secondary">Color: {color}</h6>
                        <h5 className="text-danger">Price: {price}$</h5>
                    </div>
                    <div className="w-75 mx-auto" style={orderBoxStyle}>
                        <h3 className="fw-bold">Customer Details</h3>
                        <hr className="w-75"/>
                        <h5 className="text-secondary">Booked By: {userName}</h5>
                        <h6 className="text-secondary">Address: {address}</h6>
                        <h6 className="text-secondary">Email: {email}</h6>
                        <h6 className="text-secondary">Cell-Number: {number}</h6>
                    </div>
                </div>
        </div>
    );
};

export default ManageOrder;