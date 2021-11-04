import "./App.css";
import Converter from "./converter/converter";
import clock from "./alarm-clock.png";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="intro-container">
        <div className="intro">
          <img src={clock} className="hero-img" alt="" />
          <p>
            Life Clock is a concept that converts your age into another time
            frame. <Link to="/help">See how Life Clock works</Link>
          </p>
          <p>See how your age converts into a day or sports</p>
        </div>
      </div>

      <div className="converter">
        <Converter></Converter>
      </div>
    </>
  );
}

export default App;
