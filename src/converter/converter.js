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

    const clock_type = event.target.elements.type.value;
    const age = event.target.elements.age.value;

    let result = null;
    let period, mins_in;

    switch (clock_type) {
      case "day":
        let { hrs, mins } = ageToMinutes(age);
        let ampm = hrs >= 12 ? "PM" : "AM";
        result = `${hrs > 12 ? hrs - 12 : hrs}:${
          mins < 10 ? "0" + mins : mins
        } ${ampm}`;
        break;
      case "hockey":
        ({ period, mins_in } = ageToHockeyGame(age));
        result = `${period} period ${mins_in} minute(s)`;
        break;
      case "basketball":
        ({ period, mins_in } = ageToBasketballGame(age));
        result = `${period} quarter ${mins_in} minute(s)`;
        break;
      case "soccer":
        ({ period, mins_in } = ageToSoccerGame(age));
        result = `${period} ${mins_in} minute(s)`;
        break;
      default:
        break;
    }

    result_elm.setAttribute("aria-live", "polite");
    result_elm.classList.add("show-result");
    result_elm.innerHTML = `<p>${result}</p>`;
  };

  const clearMsg = () => {
    const result_elm = document.querySelector(".result");

    result_elm.setAttribute("aria-live", "off");
    result_elm.classList.remove("show-result");
    result_elm.innerHTML = "";
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <div className="control-group">
          <label htmlFor="type">Clock Type:</label>
          <select name="type" id="type" required aria-required="true">
            <option value="day">🕔 24 Hour Clock</option>
            <option value="hockey">🏒 Ice Hockey</option>
            <option value="basketball">🏀 Basketball</option>
            <option value="soccer">⚽ Soccer</option>
          </select>
        </div>
        <div className="control-group">
          <label htmlFor="age">Your Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            min="0"
            max="100"
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
