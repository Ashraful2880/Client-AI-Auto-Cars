import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allCars')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <h2 className="pt-5 fw-bold">Update Your Products</h2>
            <h4 className="text-danger mb-5">Total Products {products.length}</h4>
            <hr />
            <div  className="container row mx-auto mb-4">
                {
                    products.map((product)=><ManageProduct key={product._id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;