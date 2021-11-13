import React from 'react';
import { Link } from 'react-router-dom';
import './Car.css';

const Car = ({car}) => {
    const{url,name,_id,price,model,modelYear,type,gear,fuel,details}=car;
    return (
        <div className="col-md-6 col-sm-12 col-lg-4 mx-auto position-relative text-start mb-4 car-container rounded-3">
            <img className="w-100 border rounded-3 car-image" src={url} alt="Car-Imag" />
            <div className="mt-4 mx-auto">
                <h4 className="ms-2 my-3 d-inline fw-bold">{name} ({model})</h4>
            </div>
            <div className="mt-2 d-flex">
                <h6 className="ms-2 bg-secondary p-2 rounded-3 text-light text-center">
                    <i className="fas fa-clock"></i> {modelYear}
                </h6>
                <h6 className="ms-2 bg-success p-2 rounded-3 text-light text-center">
                    <i className="fas fa-cogs"></i> {gear} 
                </h6>
                <h6 className="ms-2 bg-secondary p-2 rounded-3 text-light text-center">
                    <i className="fas fa-gas-pump"></i>  {fuel}
                </h6>
                <h6 className="ms-2 bg-success p-2 rounded-3 text-light text-center">
                    <i className="fas fa-car"></i> {type}
                </h6>
            </div>
                <div className="ms-2 fs-5 text-secondary">
                   <p>{details}</p>
                </div>
            <div className="mt-2 d-flex">
                <h4 className="ms-2 mb-4 text-danger">${price} MRP</h4>
            </div>
            <button className="btn btn-danger d-block mb-5 ms-2 rounded-3">
                <Link className="text-dark text-decoration-none" to={`/purchase/${_id}`} >Book Now</Link>
            </button>
        </div>
    );
};

export default Car;