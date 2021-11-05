const minutesToTime = (minutes) => {
  let hrs = minutes / 60;
  let fhrs = Math.floor(minutes / 60);
  let mins = (hrs % 1) * 60;
  let secs = (mins % 1) * 60;

  return {
    hrs: fhrs,
    mins: Math.floor(mins),
    secs: Math.floor(secs),
  };
};

const ageToMinutes = (age) => {
  // Base values for calculation
  const avg_life = 100;
  const base = 1440;
  const one_year = base / avg_life;
  const ten_year = one_year * 10;

  // Calculation
  let tenth = Math.floor(age / 10);
  let oneth = age % 10;

  let lifeInMinutes = ten_year * tenth + one_year * oneth;

  let { hrs, mins } = minutesToTime(lifeInMinutes);
  let ampm = hrs >= 12 && hrs < 24 ? "PM" : hrs <= 24 ? "AM" : "AM";

  console.log(lifeInMinutes);

  let _hrs;
  if (hrs < 10) {
    _hrs = `0${hrs}`;
  } else if (hrs >= 12) {
    _hrs = hrs - 12;

    if (_hrs < 10) _hrs = `0${_hrs}`;
  }

  return `<p>⏰ ${_hrs}:${mins < 10 ? "0" + mins : mins} ${
    lifeInMinutes < base ? ampm : `${ampm}+`
  }</p>`;
};

const ageToHockeyGame = (age) => {
  // Base values for calculation
  const avg_life = 100;
  const yrs_per_period = Math.floor((avg_life / 3) * 10) / 10;
  const yrs_per_minute = Math.floor((yrs_per_period / 20) * 10) / 10;

  const { hrs, mins, secs } = minutesToTime(age / yrs_per_minute);

  let period = "";
  let mins_in = 0;

  if (mins <= 20 && hrs === 0) {
    period = "1ST";
    mins_in = mins;
  }
  if (mins >= 21 && hrs === 0) {
    period = "2ND";
    mins_in = mins - 40 + 20;
  }
  if (mins >= 41 && hrs === 0) {
    period = "3RD";
    mins_in = mins - 60 + 20;
  }
  if (mins >= 61 || hrs > 0) {
    period = "OT";
    mins_in = hrs * 60 + mins - 60;
  }

  return `<p>🏒 ${
    mins_in < 10 ? `0${mins_in}` : mins_in
  }<span class="sr-only">minutes</span>:${
    secs < 10 ? `0${secs}` : secs
  }<span class="sr-only">seconds</span> | ${period}</p>`;
};

const ageToBasketballGame = (age) => {
  const avg_life = 100;
  const yrs_per_quarter = Math.floor((avg_life / 4) * 10) / 10;
  const yrs_per_minute = Math.floor((yrs_per_quarter / 10) * 10) / 10;

  const { hrs, mins, secs } = minutesToTime(age / yrs_per_minute);

  let quarter = "";
  let mins_in = 0;

  if (mins <= 10) {
    quarter = "1ST";
    mins_in = mins;
  }
  if (mins >= 11) {
    quarter = "2ND";
    mins_in = mins - 20 + 10;
  }
  if (mins >= 21) {
    quarter = "3RD";
    mins_in = mins - 30 + 10;
  }
  if (mins >= 31) {
    quarter = "4TH";
    mins_in = mins - 40 + 10;
  }
  if (mins >= 41 || hrs > 0) {
    quarter = "OT";
    mins_in = hrs * 40 + mins - 40;
  }

  return `<p>🏀 ${
    mins_in < 10 ? `0${mins_in}` : mins_in
  }<span class="sr-only">minutes</span>:${
    secs < 10 ? `0${secs}` : secs
  }<span class="sr-only">seconds</span> | ${quarter}</p>`;
};

const ageToSoccerGame = (age) => {
  const avg_life = 100;
  const yrs_per_half = Math.floor((avg_life / 2) * 10) / 10;
  const yrs_per_minute = Math.floor((yrs_per_half / 45) * 10) / 10;

  const { hrs, mins, secs } = minutesToTime(age / yrs_per_minute);

  let period = "";
  let mins_in = hrs * 60 + mins;

  if (mins_in <= 45) {
    period = "First";
  }

  if (mins_in > 45) {
    period = "Second";
  }

  if (mins_in >= 90) {
    period = "OT";
  }

  return `<p>⚽ ${
    mins_in < 10 ? `0${mins_in}` : mins_in
  }<span class="sr-only">minutes</span>:${
    secs < 10 ? `0${secs}` : secs
  }<span class="sr-only">seconds</span> | ${period}</p>`;
};

export { ageToMinutes, ageToHockeyGame, ageToBasketballGame, ageToSoccerGame };
