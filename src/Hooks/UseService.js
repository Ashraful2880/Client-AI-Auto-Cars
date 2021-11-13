import { useEffect, useState } from "react";


const useServices = () => {
    const [cars, setcars] = useState([]);

    useEffect(() => {
        fetch('https://serene-coast-79100.herokuapp.com/allCars')
            .then(res => res.json())
            .then(data => setcars(data))
    }, [])
    return [cars, setcars]
};

export default useServices;