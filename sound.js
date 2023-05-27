let audioContext = null;

const playSound = (frequencyHz) => {
  audioContext ||= new window.AudioContext();
  const oscillator = audioContext.createOscillator();
  oscillator.connect(audioContext.destination);
  oscillator.frequency.value = frequencyHz;
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 1);
};
