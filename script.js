let startTime = 0;
let elapsedTime = 0;
let timerRunning = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const container = document.querySelector(".container");

setButtonState("initial");

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = ms % 1000;

    return (
        String(hours).padStart(2,"0") + ":" +
        String(minutes).padStart(2,"0") + ":" +
        String(seconds).padStart(2,"0") + "." +
        String(milliseconds).padStart(3,"0")
    );
}

function setButtonState(state) {
    startBtn.className = "";
    stopBtn.className = "";
    resetBtn.className = "";

    if (state === "initial") {
        startBtn.classList.add("active");
        stopBtn.classList.add("inactive");
        resetBtn.classList.add("inactive");
        container.classList.remove("glow-start");
    }
    if (state === "running") {
        startBtn.classList.add("inactive");
        stopBtn.classList.add("active");
        resetBtn.classList.add("active");
        container.classList.add("glow-start");
    }
    if (state === "stopped") {
        startBtn.classList.add("active");
        stopBtn.classList.add("inactive");
        resetBtn.classList.add("active");
        container.classList.remove("glow-start");
    }
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
    if (timerRunning) requestAnimationFrame(updateDisplay);
}

function startTimer() {
    if (timerRunning) return;
    startTime = Date.now() - elapsedTime;
    timerRunning = true;
    requestAnimationFrame(updateDisplay);
    setButtonState("running");
}

function stopTimer() {
    timerRunning = false;
    setButtonState("stopped");
}

function resetTimer() {
    timerRunning = false;
    elapsedTime = 0;
    display.textContent = "00:00:00.000";
    setButtonState("initial");
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
