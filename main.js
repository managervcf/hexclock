let clock = document.querySelector('#clock');
let body = document.querySelector('body');

// Run app passing clock and body elements.
runClock(clock, body);

function runClock(clockElement, parentElement) {
  // Set initial time and update it every second.
  // Change background color to current hex time.
  updateClock(clockElement, parentElement, generateHexTime);
  setInterval(
    () => updateClock(clockElement, parentElement, generateHexTime),
    1000
  );
}

// Updates text and backgraound.
function updateClock(clockElement, parentElement, generateHexTime) {
  parentElement.style.backgroundColor = clockElement.innerHTML = generateHexTime();
}

// Generates current time in hexadecimal.
function generateHexTime() {
  let hexTime = `#${new Date()
    .toTimeString()
    .substring(0, 8)
    .replace(/:/g, '')}`;
  return hexTime;
}
