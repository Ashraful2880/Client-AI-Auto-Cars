import React from 'react';
import useServices from '../../Hooks/UseService';
import Car from '../Car/Car';

const Explore = () => {
    const [cars]=useServices();
    return (
        <div>
            <h2 className="text-danger pt-4 fw-bold"> Awesome Car Collections </h2>
            <p className="mb-5 text-secondary fw-bold"> We are The Leading Auto Car Company With <br /> The World-Wide Reputation </p>
            <div  className="container row mx-auto mb-4">
                {
                    cars.map((car)=><Car key={car._id} car={car}/>)
                }
            </div>
        </div>
    );
};

export default Explore;