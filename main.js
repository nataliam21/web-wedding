// setup end date for Countdown (getTimer==Time in milleseconds)

let launchDate = new Date("Sep 06, 2023 17:00:00").getTime();

//Setup Timer to tick every 1 second
let Timer = setInterval(tick, 1000);

function tick() {
  let now = new Date().getTime();

  let t = launchDate - now;

  if (t > 0) {
    let days = Math.floor(t / (1000 * 60 * 60 * 24));

    if (days < 10) {
      days = "0" + days;
    }

    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 60));

    if (hours < 10) {
      hours = "0" + hours;
    }

    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    let Time = `${days} : ${hours} : ${minutes} : ${seconds}`;

    document.querySelector(".launch-time").innerText = Time;
  }
}
