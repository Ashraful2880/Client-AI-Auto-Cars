import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../../Hooks/UseService';

const FeatureCars = () => {
    const [cars] = useServices();
    const [visible, setVisible] = useState(6);

    //<---------------------- Function For Load More Button --------------->
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    }

    return (
        <div className="mt-4">
            <h2 className="fw-bold mb-5 text-danger"> Top Feature Cars</h2>
            {cars?.length > 0 ?
                <div className="container row mx-auto mb-4">
                    {
                        cars.slice(0, visible).map(car =>
                            <div key={car._id} className="col-md-6 col-sm-12 col-lg-4 mx-auto position-relative text-start mb-4 car-container rounded-3" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                <Link className="text-dark text-decoration-none" to={`/purchase/${car._id}`} >
                                    <img className="w-100 border rounded-3 car-image position-relative" src={car.url} alt="Car-Imag" />
                                </Link>
                                <p className="ms-2 mb-2 text-light bg-danger py-1 px-2 rounded-3 fw-bold price"> Price: ${car.price}</p>
                                <div className="d-flex justify-content-between border rounded-2 details-area">
                                    <h6 className="p-2 text-light ps-3 text-center mb-0"> {car.modelYear} </h6>
                                    <h6 className="p-2 text-light ps-3 text-center mb-0"> {car.gear} </h6>
                                    <h6 className="p-2 text-light ps-3 text-center mb-0"> {car.fuel} </h6>
                                    <h6 className="p-2 text-light ps-3 text-center mb-0"> {car.type} </h6>
                                </div>
                                <div className="mb-3 mt-2">
                                    <Link className="text-dark text-decoration-none" to={`/purchase/${car._id}`} >
                                        <h4 className="d-inline fw-bold car-head">{car.name} ({car.model})</h4>
                                    </Link>
                                </div>
                                <div className="mb-4">
                                    <Link className="text-dark text-decoration-none" to={`/purchase/${car._id}`} >
                                        <button className="btn btn-success"> Buy Now </button>
                                    </Link>
                                </div>
                            </div>
                        )}
                    <div className="my-3">
                        <button className="btn btn-danger" onClick={showMoreItems}>Load More</button>
                    </div>
                </div> :
                <div className="d-flex justify-content-center align-items-center pb-5">
                    <div className="spinner-border text-danger text-center d-block" role="status">
                    </div>
                </div>
            }
        </div>
    );
};

export default FeatureCars;