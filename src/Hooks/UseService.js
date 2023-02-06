import { useEffect, useState } from "react";


const useServices = () => {
    const [cars, setcars] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_KEY}/allCars`)
            .then(res => res.json())
            .then(data => setcars(data))
    }, [])
    return [cars, setcars]
};

export default useServices;