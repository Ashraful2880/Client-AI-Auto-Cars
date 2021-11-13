import React from 'react';
import error from '../../Image/404.jpg'

const Error = () => {
    return (
        <div>
            <h1 className="text-6xl">Opps !</h1>
            <h1 className="text-4xl mt-7 text-danger">404 Error!</h1>
            <img className="m-auto my-2" src={error} alt="" />
            <h1 className="text-4xl">Page Not Found</h1>
            <p className="text-xl">Check Your URL</p>
        </div>
    );
};

export default Error;