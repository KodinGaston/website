window.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const firstChild = slider.firstElementChild;
  const clone = firstChild.cloneNode(true);
  slider.appendChild(clone);

  slider.addEventListener('animationend', () => {
      slider.appendChild(slider.firstElementChild);
      slider.style.animation = 'none';
      slider.offsetHeight; 
      slider.style.animation = '';
  });
});

// Logic Game
function startLogicGame() {
  let logicGameDiv = document.getElementById('logic-game');
  logicGameDiv.innerHTML = `
      <p>Solve this puzzle: What comes next in the sequence 2, 4, 6, 8, ... ?</p>
      <button id="check-answer-button">► Answer Here ◄ </button>
  `;

  // Add event listener to the button
  document.getElementById('check-answer-button').addEventListener('click', function() {
      // Prompt the user for their answer
      let userAnswer = prompt('Enter the next number in the sequence:');
      
      // This will check if the answer is correct
      if (userAnswer === '10') {
          alert('Congratulations! You got it right!');
      } else { //otherwise try again message
          alert('Oops! That\'s not correct. Try again.');
      }
  });
}

// Color Changer
function changeColor() {
  let slider = document.getElementById('color-slider');
  let colorDisplay = document.getElementById('color-display');
  let colorText = document.getElementById('color-text');
  let colorValue = slider.value;
  let newColor = `hsl(${colorValue}, 100%, 50%)`;
  
  colorDisplay.style.backgroundColor = newColor;
  colorText.style.color = `hsl(${(colorValue + 180) % 360}, 100%, 50%)`; // Complementary color
}

// Fun Button
function funButtonClick() {
  let funDisplay = document.getElementById('fun-display');
  funDisplay.innerHTML = '<p>🎉 Surprise! You clicked the button!</p> <p>✨You are amazing!✨ 🎉</p>';
  // Add more fun functionalities here
}
