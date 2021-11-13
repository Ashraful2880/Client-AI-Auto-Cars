import React from 'react';

const ManageProduct = ({product}) => {
    const{url,name,price,model,modelYear,details, _id}=product;
    const handleDelete=(id)=>{
        const proceed=window.confirm("Are You Sure ? Want To Delete ?");
        if (proceed){
            const url=`http://localhost:5000/deleteProduct/${id}`;
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
    return (
        <div>
            <div className="row mx-auto">
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <img className="w-75" src={url} alt="Product_Image" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 text-start border mb-4">
                    <h4>Brand Name: <span className="text-danger">{name}</span></h4>
                    <h5>Model: <span className="text-danger">{model}</span></h5>
                    <h5>Model Year: <span className="text-danger">{modelYear}</span></h5>
                    <h4 className="text-danger">Price: {price}</h4>
                    <p className="text-secondary fs-5">{details}</p>
                    <button className="btn btn-success px-5 mx-2 mb-4">Update</button>
                    <button className="btn btn-danger px-5 mx-2 mb-4" onClick={()=>handleDelete (_id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;