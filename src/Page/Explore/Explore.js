import React from 'react';
import useServices from '../../Hooks/UseService';
import Car from '../Car/Car';

const Explore = () => {
    const [cars]=useServices();
    return (
        <div>
            <h2 className="text-danger pt-5 mb-5 fw-bold">Our Awesome Car Collections</h2>
            <div  className="container row mx-auto mb-4">
                {
                    cars.map((car)=><Car key={car._id} car={car}/>)
                }
            </div>
        </div>
    );
};

export default Explore;