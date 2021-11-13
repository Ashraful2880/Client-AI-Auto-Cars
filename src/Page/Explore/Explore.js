import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';

const Explore = () => {
    const [cars,setCars]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allCars')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[]);
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