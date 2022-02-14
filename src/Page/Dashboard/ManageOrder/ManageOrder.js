import React from 'react';
import Swal from 'sweetalert2';

const ManageOrder = ({allOrder}) => {
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
  
    return (
        <div className="container-fluid row mx-auto py-1 mb-3">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <img className="w-50 rounded-3 single-img py-3" src={url} alt="booked-pic" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-start text-light border rounded-3 py-3">
                    <div className="w-75 mx-auto">
                        <h3>Car Brand: {name}</h3>
                        <h5>Model: {model} ( {color})</h5>
                        <h5 className="text-danger">Price: {price}$</h5>
                    </div>
                    <div className="w-75 mx-auto">
                        <hr className="w-75"/>
                        <h3>Booked By: {userName}</h3>
                        <h5>Address: {address}</h5>
                        <h5>Email: {email}</h5>
                        <h5>Cell-Number: {number}</h5>
                        <div>
                            <button className="btn my-3 btn-success border-0 me-3 px-5">Approve</button>
                            <button onClick={()=>handleDelete(_id)} className="btn my-3 btn-danger border-0 px-5">Delete</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ManageOrder;