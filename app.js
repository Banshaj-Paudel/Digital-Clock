name1 = prompt("What's your name?") || "Bhairu";

const getFormattedTime = (number) => number.toLocaleString('en-US', {
  minimumIntegerDigits: 2,
  useGrouping: false
});

const getGreetingMessage = (hour) => {
  if (hour > 18) {
    return `Good Morning, ${name1}!`;
  } else if (18 > hour && hour >= 12) {
    return `Good Afternoon, ${name1}!`;
  }
  return `Good Morning, ${name1}!`
}

setInterval(() => {
  let times = new Date();
  // For time and minute block
  ghanta = times.getHours();
  minute = times.getMinutes();
  seconds = times.getSeconds();

  document.getElementById("greets").innerHTML = getGreetingMessage(ghanta);

  if (ghanta == 0) {
    ghanta = 12;
  }

  if (ghanta > 12) {
    ghanta = ghanta - 12;
  }

  document.getElementById("time").innerHTML = `${getFormattedTime(ghanta)} : ${getFormattedTime(minute)} : ${getFormattedTime(seconds)}`;

  let din = times.getDay();

  let dayharu = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  din = dayharu[din]
  document.getElementById("day").innerHTML = din;
}, 00);
