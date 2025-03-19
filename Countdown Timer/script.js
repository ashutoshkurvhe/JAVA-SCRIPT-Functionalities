const timerDisplay = document.querySelector(".timer-display");
const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");

let timerInterval = null; // Add this to track interval globally

startBtn.addEventListener("click", () => {
  // Clear any existing interval first
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  let timeLeft = 3600;

  function updateTimer() {
    const hour = Math.floor(timeLeft / 3600);
    const minute = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    timerDisplay.textContent = `${String(hour).padStart(2, "0")}:${String(
      minute
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (timeLeft > 0) {
      timeLeft--;
    }
  }

  updateTimer(); // Call immediately to avoid initial delay
  timerInterval = setInterval(updateTimer, 1000);
});

// Move stop button listener outside to avoid multiple bindings
stopBtn.addEventListener("click", () => {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
});
