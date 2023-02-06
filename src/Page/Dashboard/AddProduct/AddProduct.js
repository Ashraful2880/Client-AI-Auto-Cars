import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch(`${process.env.REACT_APP_API_KEY}/addProduct`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    Swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: 'Car Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    reset();
                }
            })
    };
    return (
        <div className="add-Car-container">
            <div className="row container mx-auto">
                <h2 className="text-danger mt-4
                ">Add a New Car</h2>
                <div className="col-sm-12 col-md-12 col-lg-6 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="justify-content-center align-items-center container">
                            <h4 className="mb-3 text-light mb-4">Fill The Form To Add a Car</h4>

                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Brand Name" type="text" {...register("name", { required: true })} />

                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Model" type="text" {...register("model", { required: true })} />

                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Car Type (Sports/Classic)" type="text" {...register("type", { required: true })} />

                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Gear Type (Auto/Manual)" type="text" {...register("gear", { required: true })} />

                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Fuel Type (Petrol/Others)" type="text" {...register("fuel", { required: true })} />

                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Car Color" type="text" {...register("color", { required: true })} />

                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Model Year" type="text" {...register("modelYear", { required: true })} />

                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Car Price (USD)" type="number"{...register("price", { required: true })} />

                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2 text-light" type="file"{...register("url", { required: true })} />

                            <textarea className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Car Details Here"{...register("details", { required: true })} />

                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2 btn btn-danger" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;