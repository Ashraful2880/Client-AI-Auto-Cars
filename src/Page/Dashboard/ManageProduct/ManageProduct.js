import React from 'react';

const ManageProduct = ({ car }) => {
    const { url, name, price, model, details, _id } = car;
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

        <div className="col-sm-12 col-md-6 col-lg-4">
            <img className="w-100 rounded-3" src={url} alt="Product_Image" />
            <div className="border px-4 mb-4 rounded">
                <h5 className="text-start mt-2">{name} - {model}</h5>
                <h4 className="text-start text-danger">Price: ${price}</h4>
                <p className="text-secondary text-start">{details}</p>
                <div className="d-flex">
                    <button className="btn text-success mb-3 border me-2">
                        <i className="fas fa-edit fs-5 me-1"></i>
                        Update
                    </button>
                    <button className="btn text-danger mb-3 border ms-2" onClick={() => handleDelete(_id)}>
                        <i className="fas fa-trash me-1"></i>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;