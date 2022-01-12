import React from 'react';
import { Link } from 'react-router-dom';
import './Car.css';

const Car = ({car}) => {
    const{url,name,_id,price,model,modelYear,type,gear,fuel,details}=car;
    return (
        <div className="col-md-6 col-sm-12 col-lg-4 mx-auto position-relative text-start mb-4 car-container rounded-3" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <img className="w-100 border rounded-3 car-image" src={url} alt="Car-Imag"/>
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
                <h5 className="ms-2 mb-2 text-danger"> Price: ${price}.00</h5>
                <div className="ms-2 text-secondary">
                   <p>{details}</p>
                </div>
            <Link className="text-dark text-decoration-none" to={`/purchase/${_id}`} >
                <button className="btn btn-primary mb-4 ms-2 rounded-3"> Book Now </button>
            </Link>
        </div>
    );
};

export default Car;