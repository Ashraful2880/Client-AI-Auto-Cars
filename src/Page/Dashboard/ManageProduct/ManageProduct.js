import React from 'react';

const ManageProduct = ({ car }) => {
    const { url, name, price, model, modelYear, details, _id } = car;
    const handleDelete = (id) => {
        const proceed = window.confirm("Are You Sure ? Want To Delete ?");
        if (proceed) {
            const url = `${process.env.REACT_APP_API_KEY}/deleteProduct/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        window.alert('Deleted Successfully')
                    }
                    window.location.reload(false);
                });
        }
    };
    return (
        <div className="row mx-auto mb-2">
            <div className="col-sm-12 col-md-12 col-lg-6">
                <img className="w-75 rounded-3" src={url} alt="Product_Image" />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 text-start border mb-4 mt-2 pt-3">
                <h5>Brand: <span className="text-success">{name}</span></h5>
                <h5>Model: {model}</h5>
                <h5>Model Year: {modelYear}</h5>
                <h4 className="text-danger">Price: ${price}</h4>
                <p className="text-secondary">{details}</p>
                <button className="btn btn-success px-5 mx-2 mb-3">Update</button>
                <button className="btn btn-danger px-5 mx-2 mb-3" onClick={() => handleDelete(_id)}>Delete</button>
            </div>
        </div>
    );
};

export default ManageProduct;