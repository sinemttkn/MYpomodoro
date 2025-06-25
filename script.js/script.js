let minutes = 25;
let seconds = 0;
let timerRunning = false;
let interval;

document.getElementById('start').addEventListener('click', () => {
  if (!timerRunning) {
    interval = setInterval(updateTimer, 1000);
    timerRunning = true;
  }
});

function updateTimer() {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(interval);
      timerRunning = false;
      alert("Pomodoro bitti!");
      return;
    }
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  document.getElementById('timer').innerText = `${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
  return num < 10 ? "0" + num : num;
}
