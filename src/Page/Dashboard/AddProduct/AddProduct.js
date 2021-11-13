import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset,formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('https://serene-coast-79100.herokuapp.com/addProduct',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.acknowledged){
                alert("Car Added Successfully");
                reset();
            }
        })
    };
    return (
        <div className="add-Car-container">
            <div className="row container mx-auto">
                <h2 className="text-danger mt-3
                ">Add a New Car</h2>
                <div className="col-sm-12 col-md-12 col-lg-6 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="d-flex flex-column justify-content-center align-items-center container">
                            <h4 className="mb-3 text-light mb-5">Fill The Form To Add a Car</h4>

                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Brand Name" type="text" {...register("name", { required: true })} />

                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Model" type="text" {...register("model", { required: true })} />

                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Car Type (Sports/Classic)" type="text" {...register("type", { required: true })} />

                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Gear Type (Auto/Manual)" type="text" {...register("gear", { required: true })} />

                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Fuel Type (Petrol/Others)" type="text" {...register("fuel", { required: true })} />

                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Car Color" type="text" {...register("color", { required: true })} />
                            
                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Model Year" type="text" {...register("modelYear", { required: true })} />

                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Car Price (USD)" type="number"{...register("price", { required: true })} />

                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Upload Car Image" type="text"{...register("url", { required: true })} defaultValue="https://i.ibb.co/k9528PN/blog1.png"/>

                            <textarea className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Car Details"{...register("details", { required: true })} /> 

                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2 btn btn-danger" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;