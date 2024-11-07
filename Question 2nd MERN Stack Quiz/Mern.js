const quizData = [
  {
    question: "What does MERN stand for?",
    options: ["MongoDB, Express, React, Node", "MongoDB, Express, Redux, Node", "MySQL, Express, React, Node", "MongoDB, Express, React, Nginx"],
    answer: 0
  },
  {
    question: "Which language is primarily used in the MERN stack?",
    options: ["Python", "Java", "JavaScript", "PHP"],
    answer: 2
  },
  {
    question: "Which of the following is used as a backend framework in the MERN stack?",
    options: ["React", "Vue", "Angular", "Express"],
    answer: 3
  }
];

let currentQuestionIndex = 0;
let score = 0;
let answers = [];

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");
const submitButton = document.getElementById("submit-btn");
const scoreContainer = document.getElementById("score-container");
const scoreText = document.getElementById("score-text");
const individualScores = document.getElementById("individual-scores");

loadQuestion();

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionText.innerText = currentQuestion.question;
  
  optionsContainer.innerHTML = "";
  
  currentQuestion.options.forEach((option, index) => {
    const label = document.createElement("label");
    const radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = "option";
    radioButton.value = index;
    label.appendChild(radioButton);
    label.appendChild(document.createTextNode(option));
    optionsContainer.appendChild(label);
  });
}

nextButton.addEventListener("click", () => {
  const selectedOption = document.querySelector("input[name='option']:checked");
  
  if (selectedOption) {
    const answer = parseInt(selectedOption.value);
    answers.push({
      question: quizData[currentQuestionIndex].question,
      correctAnswer: quizData[currentQuestionIndex].options[quizData[currentQuestionIndex].answer],
      selectedAnswer: quizData[currentQuestionIndex].options[answer],
      isCorrect: answer === quizData[currentQuestionIndex].answer
    });
    
    if (answer === quizData[currentQuestionIndex].answer) {
      score++;
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    }
  } else {
    alert("Please select an answer!");
  }
});

submitButton.addEventListener("click", () => {
  questionText.style.display = "none";
  optionsContainer.style.display = "none";
  submitButton.style.display = "none";
  
  scoreContainer.style.display = "block";
  scoreText.innerText = `Your final score is ${score} out of ${quizData.length}`;
  
  displayIndividualScores();
});

function displayIndividualScores() {
  answers.forEach(answer => {
    const scoreItem = document.createElement("div");
    

    const questionTextElem = document.createElement("p");
    questionTextElem.innerText = `${answer.question}`;
    scoreItem.appendChild(questionTextElem);
    

    const userAnswerElem = document.createElement("p");
    userAnswerElem.innerText = `Your answer: ${answer.selectedAnswer}`;
    userAnswerElem.style.color = answer.isCorrect ? "green" : "red"; 
    scoreItem.appendChild(userAnswerElem);
    

    const resultText = document.createElement("p");
    resultText.innerText = answer.isCorrect ? "Correct" : "Incorrect";
    resultText.style.color = answer.isCorrect ? "green" : "red";  
    scoreItem.appendChild(resultText);
    
    individualScores.appendChild(scoreItem);
  });
}
