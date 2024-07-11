import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addCar, setInitialCars } from "./redux/reducer/car"; // Ensure this path is correct

const Car = () => {
    const cars = useSelector(state => state.car.cars);
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const dispatch = useDispatch();

    // Load initial cars from localStorage
    useEffect(() => {
        const savedCars = localStorage.getItem('cars');
        if (savedCars) {
            dispatch(setInitialCars(JSON.parse(savedCars)));
        }
    }, [dispatch]); // Dependency on dispatch

    // Save cars to localStorage whenever cars state changes
    useEffect(() => {
        localStorage.setItem('cars', JSON.stringify(cars));
    }, [cars]);

    return (
        <div>
            <h1>Cars</h1>
            {cars.map((item, index) => (
                <h3 key={index}>{item.model}</h3>
            ))}
            <input 
                type="text" 
                placeholder="model"
                onChange={e => setModel(e.target.value)} 
                value={model}
            />
            <button onClick={() => {
                if (model.length > 0) {
                    dispatch(addCar(model));
                }
            }}>
                Добавить
            </button>
        </div>
    );
};

export default Car;
