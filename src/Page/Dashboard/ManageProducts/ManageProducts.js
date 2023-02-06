import React from 'react';
import useServices from '../../../Hooks/UseService';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [cars] = useServices();
    return (
        <div style={{ minHeight: "85vh" }}>
            <h3 className="pt-4 fw-bold">Update Products Here</h3>
            <h4 className="mb-5">Total Products -
                <span className="text-danger">{cars?.length}</span>
            </h4>
            <hr className="w-75 mx-auto" />
            {cars?.length > 0 ?
                <div className="container row mx-auto mb-4">
                    {
                        cars.map(car => <ManageProduct key={car?._id} car={car} />)
                    }
                </div> :
                <div className="d-flex justify-content-center align-items-center">
                    <div className="spinner-border text-danger text-center d-block" role="status">
                    </div>
                </div>}
        </div>
    );
};

export default ManageProducts;