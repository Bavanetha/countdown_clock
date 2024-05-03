let timerInterval;
let timeLeft = 300; // 5 minutes


//start timer 
function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);//to update value every second
}

function stopTimer() {
  clearInterval(timerInterval);//pause the timer
}

function resetTimer() {
  stopTimer();
  timeLeft = 300; // Reset time to 5 minutes
  updateDisplay();
}

function restartTimer() {
  resetTimer();//reset the timer
  startTimer();//start the timer
}

function updateTimer() {
  timeLeft--;//reduce the value
  //timer becomes zero
  if (timeLeft < 0) {
    stopTimer();
    alert("Time's up!");
    return;
  }
  updateDisplay();//else display will updated
}

//function to update display
function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);//300/60 = 5 min
  const seconds = timeLeft % 60;//300%60 = 0
  document.getElementById('display').innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}


//event listners to buttons
document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('stopBtn').addEventListener('click', stopTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
document.getElementById('restartBtn').addEventListener('click', restartTimer);


// Initial setup
updateDisplay(); // Update display initially
