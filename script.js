const confettiContainer = document.getElementById('confetti-container');
const startButton = document.getElementById('start-button');

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  
  //randomise position
  const xPos = Math.random() * window.innerWidth;
  confetti.style.left = `${xPos}px`;
  
  //randomise color
  const color = ['#FF0B0B', '#0BFF0B', '#0B0BFF', '#FF0BFF', '#FFFF0B'];
  confetti.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
  
  //randomise animation duration
  const duration = Math.random() * 3 + 2;
  confetti.style.animationDuration = `${duration}s`;
  
  confettiContainer.appendChild(confetti);
  
  //remove confetti after animation falls
  confetti.addEventListener('animationed', () => {
    confettiConatiner.removeChild(confetti);
  });
}

function startConfetti() {
  setInterval(createConfetti, 100);
}

startButton.addEventListener('click', startConfetti);
