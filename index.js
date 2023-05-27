const FREQUENCY_HZ_CHECKPOINT = 440;
const FREQUENCY_HZ_START_STOP = 1000;
const MS_PER_CYCLE = 33 * 1000;
const TOTAL_CYCLES = 14;

window.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  button.addEventListener("click", startBackpodSession);
});

const startBackpodSession = () => {
  let cycles = 0;
  playSound(FREQUENCY_HZ_START_STOP);
  setTimeout(function callback() {
    cycles++;
    if (cycles === TOTAL_CYCLES) {
      playSound(FREQUENCY_HZ_START_STOP);
      return;
    }
    playSound(FREQUENCY_HZ_CHECKPOINT);
    setTimeout(callback, MS_PER_CYCLE);
  }, MS_PER_CYCLE);
};
