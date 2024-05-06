const clock = document.getElementById("clock");
const button = document.getElementById("toggle-btn");

function myClock() {
    const currentTime = new Date();
    const time = `${currentTime.getHours()} : ${currentTime.getMinutes()} : ${currentTime.getSeconds()}`;
    console.log(time);
    clock.innerHTML = time;
}
// myClock();
const interval = setInterval(myClock, 1000);

console.log("Clock Starts");
if (button.innerHTML === "Stop Clock") {
    interval;
    button.addEventListener("click", () => {
        button.innerHTML = "Start Clock";
        clearInterval(interval);
        console.log("Timer Stopped");
    });
} else if (button.innerHTML === "Start Clock") {
    button.addEventListener("click", () => {
        setInterval(() => {
            myClock();
        }, 1000);
        console.log("Timer Starts Again");
        button.innerHTML = "Stop Clock";
        console.log("Timer Stopped Again.");
    });
}
