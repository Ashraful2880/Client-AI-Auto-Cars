import React from 'react';
import useServices from '../../../Hooks/UseService';
import Feature from '../Feature/Feature';

const FeatureCars = () => {
    const [cars]=useServices();
    return (
        <div className="mt-4">
            <h2 className="fw-bold mb-5 text-danger"> Top Feature Cars</h2>
            <div  className="container row mx-auto mb-4">
                {
                    cars.slice(0,6).map(car=><Feature key={car._id} car={car}/>)
                }
            </div>
        </div>
    );
};

export default FeatureCars;