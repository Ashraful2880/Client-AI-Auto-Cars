import React from 'react';
import useServices from '../../../Hooks/UseService';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [cars]=useServices();
    return (
        <div>
            <h2 className="pt-5 fw-bold">Update Your Products</h2>
            <h4 className="text-danger mb-5">Total Products {cars.length}</h4>
            <hr className="w-75 mx-auto"/>
            <div  className="container row mx-auto mb-4">
                {
                    cars.map(car=><ManageProduct key={car._id} car={car}/>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;