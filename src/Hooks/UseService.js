import { useEffect, useState } from "react";


const useServices = () => {
    const [cars, setcars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allCars')
            .then(res => res.json())
            .then(data => setcars(data))
    }, [])
    return [cars, setcars]
};

export default useServices;