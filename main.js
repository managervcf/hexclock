const clock = document.querySelector('#clock');
const body = document.querySelector('body');
const button = document.querySelector('#invert');
let isInverted = false;

// Run app passing clock and body elements.
runClock();

function runClock() {
  // Set initial time and update it every second.
  // Change background color to current hex time.
  updateClock();
  setInterval(updateClock, 1000);
  button.addEventListener('click', invertColors);
}

// Updates text and backgraound.
function updateClock() {
  body.style.backgroundColor = clock.innerHTML = button.style.backgroundColor = generateHexTime();
}

// Generates current time in hexadecimal.
function generateHexTime() {
  let time = new Date().toTimeString().substring(0, 8).replace(/:/g, '');
  let hexTime = `#${!isInverted ? time : time.split('').reverse().join('')}`;
  return hexTime;
}

function invertColors() {
  isInverted = !isInverted;
  clock.classList.toggle('rotate');
  updateClock(clock, body, generateHexTime);
}
