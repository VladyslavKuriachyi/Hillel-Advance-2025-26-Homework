let timeLeft = 85;
const timerElement = document.getElementById('timer');

function updateTimer() {
   const minutes = Math.floor(timeLeft / 60);
   const seconds = timeLeft % 60;
timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
timeLeft--;

if (timeLeft < 0) {
    clearInterval(timerInterval);
    timerElement.textContent = '00:00';
}
}
updateTimer();
const timerInterval = setInterval(updateTimer, 1000);
