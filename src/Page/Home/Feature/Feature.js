import React from 'react';
import { Link } from 'react-router-dom';

const Feature = ({car}) => {
    const{url,name,_id,price,model,modelYear,type,gear,fuel}=car;
    return (
        <div className="col-md-6 col-sm-12 col-lg-4 mx-auto position-relative text-start mb-4 car-container rounded-3" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <Link className="text-dark text-decoration-none" to={`/purchase/${_id}`} >
            <img className="w-100 border rounded-3 car-image position-relative" src={url} alt="Car-Imag"/>
        </Link>
        <p className="ms-2 mb-2 text-light bg-danger py-1 px-2 rounded-3 fw-bold price"> Price: ${price}</p>
        <div className="d-flex justify-content-between border rounded-2 details-area">
            <h6 className="p-2 text-light ps-3 text-center mb-0"> {modelYear} </h6>
            <h6 className="p-2 text-light ps-3 text-center mb-0"> {gear} </h6>
            <h6 className="p-2 text-light ps-3 text-center mb-0"> {fuel} </h6>
            <h6 className="p-2 text-light ps-3 text-center mb-0"> {type} </h6>
        </div>
        <div className="mb-4 mt-2">
            <Link className="text-dark text-decoration-none" to={`/purchase/${_id}`} >
                <h4 className="d-inline fw-bold car-head">{name} ({model})</h4>
            </Link>
        </div>
    </div>
    );
};

export default Feature;