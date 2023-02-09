import React from 'react';
import useServices from '../../../Hooks/UseService';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [cars] = useServices();
    return (
        <div style={{ minHeight: "85vh" }}>
            <h3 className="pt-4 fw-bold mb-5">Manage Your All Products - <span className="text-success">({cars?.length}) </span></h3>

            {cars?.length > 0 ?
                <div className="container row mx-auto mb-4">
                    {
                        cars?.map(car => <ManageProduct key={car?._id} car={car} />)
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