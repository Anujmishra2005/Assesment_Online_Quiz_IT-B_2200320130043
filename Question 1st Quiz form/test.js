const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 1
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: 3
  }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = Array(questions.length).fill(null);

const questionContainer = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const scoreContainer = document.getElementById('score');
const resultContainer = document.getElementById('result-container');
const submitButton = document.getElementById('submit-btn');


function loadQuestion(index) {
  const question = questions[index];
  questionContainer.innerText = question.question;
  optionsContainer.querySelectorAll('label').forEach((label, i) => {
    label.querySelector('span').innerText = question.options[i];
    label.querySelector('input').checked = userAnswers[index] === i;
  });
  checkAllAnswered(); 
}

function showScore() {
  let correctAnswers = userAnswers.reduce((total, answer, i) => {
    return total + (answer === questions[i].answer ? 1 : 0);
  }, 0);
  let scorePercent = Math.round((correctAnswers / questions.length) * 100);
  scoreContainer.innerText = scorePercent;
  resultContainer.classList.remove('hidden');
}


function checkAllAnswered() {
  const allAnswered = userAnswers.every(answer => answer !== null);
  if (allAnswered) {
    submitButton.classList.remove('hidden');
  } else {
    submitButton.classList.add('hidden');
  }
}

optionsContainer.addEventListener('change', () => {
  const selectedOption = Array.from(optionsContainer.querySelectorAll('input')).findIndex(input => input.checked);
  if (selectedOption >= 0) userAnswers[currentQuestion] = selectedOption;
  checkAllAnswered();
});

document.getElementById('next-btn').addEventListener('click', () => {
  const selectedOption = Array.from(optionsContainer.querySelectorAll('input')).findIndex(input => input.checked);
  if (selectedOption >= 0) userAnswers[currentQuestion] = selectedOption;
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion(currentQuestion);
  }
});

document.getElementById('prev-btn').addEventListener('click', () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion(currentQuestion);
  }
});

submitButton.addEventListener('click', showScore);

loadQuestion(currentQuestion);
