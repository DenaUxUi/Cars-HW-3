const ADD_CAR = 'ADD_CAR';
const SET_INITIAL_CARS = 'SET_INITIAL_CARS';

const initState = {
    cars: [
        { model: "BMW", year: 2017 },
        { model: "Honda", year: 2015 },
        { model: "Audi", year: 2010 },
        { model: "Toyota", year: 2020 },
        { model: "Mercedes", year: 2016 }
    ]
};

export default (state = initState, action) => {
    switch (action.type) {
        case ADD_CAR: {
            return {
                ...state,
                cars: [...state.cars, action.payload]
            };
        }
        case SET_INITIAL_CARS: {
            return {
                ...state,
                cars: action.payload
            };
        }
        default:
            return state;
    }
};

export const addCar = (model) => ({
    type: ADD_CAR,
    payload: { model }
});

export const setInitialCars = (cars) => ({
    type: SET_INITIAL_CARS,
    payload: cars
});
