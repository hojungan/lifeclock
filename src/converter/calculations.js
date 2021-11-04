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

  return minutesToTime(lifeInMinutes);
};

const ageToHockeyGame = (age) => {
  // Base values for calculation
  const avg_life = 100;
  const yrs_per_period = Math.floor((avg_life / 3) * 10) / 10;
  const yrs_per_minute = Math.floor((yrs_per_period / 20) * 10) / 10;

  const { hrs, mins } = minutesToTime(age / yrs_per_minute);

  let period = "";
  let mins_in = 0;

  if (mins <= 20 && hrs === 0) {
    period = "1st";
    mins_in = mins;
  }
  if (mins >= 21 && hrs === 0) {
    period = "2nd";
    mins_in = mins - 40 + 20;
  }
  if (mins >= 41 && hrs === 0) {
    period = "3rd";
    mins_in = mins - 60 + 20;
  }
  if (mins >= 61 || hrs > 0) {
    period = "OT";
    mins_in = hrs * 60 + mins - 60;
  }

  return {
    age,
    period,
    mins_in,
  };
};

const ageToBasketballGame = (age) => {
  const avg_life = 100;
  const yrs_per_quarter = Math.floor((avg_life / 4) * 10) / 10;
  const yrs_per_minute = Math.floor((yrs_per_quarter / 10) * 10) / 10;

  const { hrs, mins } = minutesToTime(age / yrs_per_minute);

  let period = "";
  let mins_in = 0;

  if (mins <= 10) {
    period = "1st";
    mins_in = mins;
  }
  if (mins >= 11) {
    period = "2nd";
    mins_in = mins - 20 + 10;
  }
  if (mins >= 21) {
    period = "3rd";
    mins_in = mins - 30 + 10;
  }
  if (mins >= 31) {
    period = "4th";
    mins_in = mins - 40 + 10;
  }
  if (mins >= 41 || hrs > 0) {
    period = "OT";
    mins_in = hrs * 40 + mins - 40;
  }

  return {
    period,
    mins_in,
  };
};

const ageToSoccerGame = (age) => {
  const half = 45;

  let period = "";
  let mins_in = 0;

  if (age <= half) {
    period = "First half";
    mins_in = age;
  }

  if (age > half) {
    period = "Second half";
    mins_in = age - half;
  }

  if (age > 90) {
    period = "OT";
    mins_in = age - 90;
  }

  return {
    period,
    mins_in,
  };
};

export { ageToMinutes, ageToHockeyGame, ageToBasketballGame, ageToSoccerGame };
