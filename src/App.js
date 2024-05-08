import "./App.css";
import { TrafficLight } from "./component/TrafficLight";

function App() {
  return (
    <div className="App">
      <TrafficLight intervalTime={5} />
    </div>
  );
}

export default App;
