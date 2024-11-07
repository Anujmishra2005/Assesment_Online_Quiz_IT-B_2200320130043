let currentQuestionIndex = 0;
const questions = [
  { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
  { question: "What is the capital of France?", options: ["Paris", "Berlin", "Madrid"], answer: "Paris" },
  { question: "What is the largest planet in our solar system?", options: ["Earth", "Jupiter", "Saturn"], answer: "Jupiter" },
  { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei"], answer: "Albert Einstein" },
  { question: "What is the speed of light?", options: ["300,000 km/s", "500,000 km/s", "150,000 km/s"], answer: "300,000 km/s" },
  { question: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens", "Mark Twain"], answer: "William Shakespeare" },
  { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Pb"], answer: "Au" },
  { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "South Korea"], answer: "Japan" },
  { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond"], answer: "Diamond" },
  { question: "What is the capital of India?", options: ["Mumbai", "Delhi", "Kolkata"], answer: "Delhi" },
];

let userAnswers = new Array(questions.length).fill(null);
const passingThreshold = 0.7;

function displayQuestion() {
  const question = questions[currentQuestionIndex];
  const questionContainer = document.getElementById("question-container");
  
  questionContainer.innerHTML = `
    <div class="question">${question.question}</div>
    <div class="options">
      ${question.options.map((option, index) => `
        <input type="radio" name="answer" id="option${index}" value="${option}" onclick="saveAnswer(${index})">
        <label for="option${index}">${option}</label>
      `).join('')}
    </div>
  `;
}

function saveAnswer(selectedOptionIndex) {
  userAnswers[currentQuestionIndex] = questions[currentQuestionIndex].options[selectedOptionIndex];
}

function navigate(direction) {
  currentQuestionIndex += direction;
  
  if (currentQuestionIndex < 0) currentQuestionIndex = 0;
  if (currentQuestionIndex >= questions.length) currentQuestionIndex = questions.length - 1;

  displayQuestion();
  document.getElementById("prev-button").disabled = currentQuestionIndex === 0;
  document.getElementById("next-button").disabled = currentQuestionIndex === questions.length - 1;
  document.getElementById("submit-button").style.display = currentQuestionIndex === questions.length - 1 ? "inline-block" : "none";
}

function submitQuiz() {
  let correctAnswers = 0;
  questions.forEach((question, index) => {
    if (userAnswers[index] === question.answer) correctAnswers++;
  });
  const score = correctAnswers / questions.length;
  
  if (score >= passingThreshold) {
    document.getElementById("result-container").innerHTML = "Congratulations! You passed the quiz.";
  } else {
    document.getElementById("result-container").innerHTML = "Sorry! You failed the quiz.";
  }
  
  document.getElementById("score-board").style.display = "block";
  document.getElementById("score-board").innerHTML = `Your score: ${correctAnswers} out of ${questions.length}`;
}

displayQuestion();
