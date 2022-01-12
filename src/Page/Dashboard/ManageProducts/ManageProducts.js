import React from 'react';
import useServices from '../../../Hooks/UseService';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [cars]=useServices();
    return (
        <>
            <h3 className="pt-4 fw-bold">Update Products Here</h3>
            <h4 className="mb-5">Total Products -
                <span className="text-danger">{cars.length}</span>
            </h4>
            <hr className="w-75 mx-auto"/>
            <div  className="container row mx-auto mb-4">
                {
                    cars.map(car=><ManageProduct key={car._id} car={car}/>)
                }
            </div>
        </>
    );
};

export default ManageProducts;