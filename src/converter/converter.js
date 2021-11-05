import React from "react";
import {
  ageToMinutes,
  ageToHockeyGame,
  ageToBasketballGame,
  ageToSoccerGame,
} from "./calculations";
import "./converter.css";

function Converter() {
  const formSubmit = (event) => {
    event.preventDefault();

    const result_elm = document.querySelector(".result");
    result_elm.innerHTML = "";

    const age = event.target.elements.age.value;

    let _result = [];
    _result.push(ageToMinutes(age));
    _result.push(ageToHockeyGame(age));
    _result.push(ageToBasketballGame(age));
    _result.push(ageToSoccerGame(age));

    let inner_container = document.createElement("div");
    inner_container.classList.add("inner-container");

    _result.forEach((msg) => {
      inner_container.innerHTML += msg;
    });

    result_elm.setAttribute("aria-live", "polite");
    result_elm.classList.add("show-result");

    result_elm.appendChild(inner_container);
  };

  const clearMsg = () => {
    const result_elm = document.querySelector(".result");

    result_elm.setAttribute("aria-live", "off");
    result_elm.classList.remove("show-result");
    result_elm.innerHTML = "";
  };

  return (
    <>
      <div className="info">
        <p>Calculation is based on average age of 100 years</p>
      </div>
      <form onSubmit={formSubmit}>
        <div className="control-group">
          <label htmlFor="age">Your Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            min="0"
            required
            aria-required="true"
          />
        </div>
        <div className="buttons">
          <button className="btn submit" type="submit">
            Convert
          </button>
          <button className="btn reset" type="reset" onClick={clearMsg}>
            Reset
          </button>
        </div>
      </form>
      <div className="result" aria-live="off"></div>
    </>
  );
}

export default Converter;
