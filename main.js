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
// Array de preguntas y respuestas
const mathQuestions = [
  { question: 'What is 2 + 2?', answer: '4' },
  { question: 'What is 5 * 3?', answer: '15' },
  { question: 'What is 10 - 7?', answer: '3' },
  { question: 'What is 12 / 3?', answer: '4' },
  { question: 'What is 8 + 5?', answer: '13' }
];

// Selección aleatoria de una pregunta al inicio
let currentQuestionIndex = Math.floor(Math.random() * mathQuestions.length);
showQuestion();

// Función para mostrar la pregunta actual
function showQuestion() {
  document.getElementById('question').textContent = mathQuestions[currentQuestionIndex].question;
}

// Función para verificar la respuesta del usuario
document.getElementById('check-answer-button').addEventListener('click', function() {
  // Obtener la respuesta del usuario
  let userAnswer = document.getElementById('user-answer').value.trim();

  // Obtener la respuesta correcta de la pregunta actual
  let correctAnswer = mathQuestions[currentQuestionIndex].answer;

  // Verificar si la respuesta es correcta
  if (userAnswer === correctAnswer) {
      document.getElementById('answer-message').innerHTML = '<p style="color: green;">Correct! 🎉</p>';
  } else {
      document.getElementById('answer-message').innerHTML = '<p style="color: red;">Incorrect. The correct answer is ' + correctAnswer + '.</p>';
  }

  // Actualizar la pregunta actual con una nueva pregunta aleatoria
  currentQuestionIndex = Math.floor(Math.random() * mathQuestions.length);
  showQuestion();

  // Limpiar el campo de respuesta y el mensaje de respuesta después de 2 segundos
  setTimeout(function() {
      document.getElementById('user-answer').value = '';
      document.getElementById('answer-message').innerHTML = '';
  }, 2000);
});


// Color Changer
function changeColor() {
  let slider = document.getElementById('color-slider');
  let colorDisplay = document.getElementById('color-display');
  let colorText = document.getElementById('color-text');
  let colorValue = slider.value;
  let newColor = `hsl(${colorValue}, 100%, 50%)`;
  
  colorDisplay.style.backgroundColor = newColor;
  colorText.style.color = `hsl(${(colorValue + 180) % 360}, 100%, 50%)`;  
}

function funButtonClick() {
  let funDisplay = document.getElementById('fun-display');
  let jokes = [
      "<span style='color: green;'>Why do programmers prefer dark mode?</span><br><span style='color: red;'>Because light attracts bugs. 😄</span>",
      "<span style='color: green;'>Why do Java developers wear glasses?</span><br><span style='color: red;'>Because they don't C#. 😄</span>",
      "<span style='color: green;'>Why did the programmer quit his job?</span><br><span style='color: red;'>Because he didn't get arrays. 😄</span>",
      "<span style='color: green;'>Why was the JavaScript developer sad?</span><br><span style='color: red;'>Because he didn't know how to 'null' his feelings. 😄</span>",
      "<span style='color: green;'>Why do programmers always mix up Christmas and Halloween?</span><br><span style='color: red;'>Because Oct 31 == Dec 25. 😄</span>",
      "<span style='color: green;'>How do you comfort a JavaScript bug?</span><br><span style='color: red;'>You console it. 😄</span>",
      "<span style='color: green;'>Why did the developer go broke?</span><br><span style='color: red;'>Because he used up all his cache. 😄</span>",
      "<span style='color: green;'>Why do programmers prefer using tabs over spaces?</span><br><span style='color: red;'>Because tabs are more indents-able. 😄</span>",
      "<span style='color: green;'>What's a programmer's favorite hangout place?</span><br><span style='color: red;'>Foo Bar. 😄</span>",
      "<span style='color: green;'>Why did the programmer break up with his girlfriend?</span><br><span style='color: red;'>He didn't like her constant Boolean. 😄</span>",
      "<span style='color: green;'>Why did the database administrator leave his wife?</span><br><span style='color: red;'>She had one-too-many 'alter' egos. 😄</span>",
      "<span style='color: green;'>Why was the computer cold?</span><br><span style='color: red;'>It left its Windows open. 😄</span>",
      "<span style='color: green;'>Why did the programmer go broke?</span><br><span style='color: red;'>Because he used up all his cache. 😄</span>",
      "<span style='color: green;'>Why do programmers prefer using tabs over spaces?</span><br><span style='color: red;'>Because tabs are more indents-able. 😄</span>",
      "<span style='color: green;'>What's a programmer's favorite hangout place?</span><br><span style='color: red;'>Foo Bar. 😄</span>",
      "<span style='color: green;'>Why did the programmer break up with his girlfriend?</span><br><span style='color: red;'>He didn't like her constant Boolean. 😄</span>",
      "<span style='color: green;'>Why did the database administrator leave his wife?</span><br><span style='color: red;'>She had one-too-many 'alter' egos. 😄</span>",
      "<span style='color: green;'>Why did the programmer break up with his girlfriend?</span><br><span style='color: red;'>He didn't like her constant Boolean. 😄</span>",
      "<span style='color: green;'>Why did the database administrator leave his wife?</span><br><span style='color: red;'>She had one-too-many 'alter' egos. 😄</span>",
      "<span style='color: green;'>Why was the computer cold?</span><br><span style='color: red;'>It left its Windows open. 😄</span>",
  ];
  let randomIndex = Math.floor(Math.random() * jokes.length);
  let randomJoke = jokes[randomIndex];
  funDisplay.innerHTML = '<p style="margin-bottom: 20px;">' + randomJoke + '</p>';
}

      
