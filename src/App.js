import Car from "./Car";
import addCar from "./redux/reducer/car.js";

function App() {
  return (
    <div className="App">
      <Car />
      <addCar />
    </div>
  );
}

export default App;
