import React from "react";
import { Link } from "react-router-dom";
import "./help.css";

function Help() {
  return (
    <div className="help">
      <h2>What is Life Clock</h2>
      <div className="concept">
        <p>
          Life Clock is a concept that calculates what your age would be if it
          were to be converted into another time frame.
        </p>
        <p>For example, if life was a day (24hrs) what time would you be?</p>
      </div>
      <div className="formula">
        <p>This can be done with simple mathematical equation.</p>
        <p>
          First of all, we need average life expectancy. Let's say it's
          100years.
        </p>
        <p>
          Then divide average life expectancy by 1440. 1440 is 24 hours in
          minutes.
        </p>
        <p>
          This gives us 14.4minutes per year, which is 14minutes and 24seconds
          per year.
        </p>
        <p>144minutes for 10years, which is 2hours 23minutes.</p>
        <p>Now let's do a simple calculation.</p>
        <p>
          For a 27year old, the formula is (144*2) + (14.4*7) = 288 + 100.8 =
          6hours 28minutes.
        </p>
        <p>As a result 27year old is 6:28AM in a day.</p>
      </div>
      <div className="conclusion">
        <p>
          By changing this formula a bit, we can calculate our age to compare to
          sports games.
        </p>
      </div>
      <Link to="/" className="back">
        <span className="emoji lg">👈</span> Convert your age
      </Link>
    </div>
  );
}

export default Help;
