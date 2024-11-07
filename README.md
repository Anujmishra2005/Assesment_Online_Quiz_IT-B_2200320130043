
# Assesment_Online_Quiz_IT-B_2200320130043 (Anuj Mishra)

So ihave Implemented it Dividing it into 3 parts 
1. [Question 1st Quiz form](https://github.com/Anujmishra2005/Assesment_Online_Quiz_IT-B_2200320130043/tree/main/Question%201st%20Quiz%20form)
3. Question 2nd MERN Stack Quiz                [https://github.com/Anujmishra2005/Assesment_Online_Quiz_IT-B_2200320130043/tree/main/Question%202nd%20MERN%20Stack%20Quiz]
4. Question 3rd Interactive Quiz               [https://github.com/Anujmishra2005/Assesment_Online_Quiz_IT-B_2200320130043/tree/main/Question%203rd%20Interactive%20Quiz]

## Overview

This project is a dynamic and interactive quiz application that supports three different quiz formats:  
1. **Traditional Question-Based Quiz**
2. **MERN Stack Quiz**
3. **Interactive and Responsive Quiz**

The app features the following functionality:
- Users can navigate between questions.
- Each question has multiple-choice options.
- A "Submit" button at the end to display the total score.
- Dynamic feedback after submission (Pass/Fail based on the score).
- A responsive design for better user experience across devices.

## Table of Contents
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Quiz Formats](#quiz-formats)
- [Contributing](#contributing)
- [License](#license)
- [Outputs](#Outputs)

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: (Optional) Node.js (For MERN stack quiz)
- **Libraries**: React (optional), Express (optional), Node.js (optional)

## Features

- **Question Navigation**: Users can move through the quiz questions with "Previous" and "Next" buttons.
- **Question Timer**: (Optional) Set a timer per question.
- **Score Calculation**: On submission, users are shown their score based on correct answers.
- **Pass/Fail Feedback**: The result is displayed after submitting, with feedback on whether the user passed or failed.
- **Responsive Design**: The quiz is mobile-friendly and adapts to different screen sizes.

## Installation

To run the quiz application locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Anujmishra2005/Assesment_Online_Quiz_IT-B_2200320130043.git
   ```

2. Navigate to the project folder:
   ```bash
   cd Assesment_Online_Quiz_IT-B_2200320130043
   ```

3. Open the `index.html` file in your browser to view the quiz.

If you're using the MERN Stack quiz, make sure to set up the backend server with Express and MongoDB for full functionality.

## Usage

Once the application is set up, open the `index.html` file in your browser. You will be presented with an interactive quiz. Navigate through the questions using the "Next" and "Previous" buttons, and submit your answers once you've completed all questions.

---

## Quiz Formats

### 1. **Traditional Question-Based Quiz**
This format is a simple, straightforward quiz where the user answers a series of questions. Upon submission, the user's score is displayed.

- **Features**:
  - Questions displayed one at a time.
  - A "Next" button to move to the next question.
  - A "Submit" button on the last question to submit the quiz.
  - Total score is shown after submission.
  - Simple user interface with basic styling.

```html
<!-- Example HTML for Traditional Quiz Format -->
<div class="question-container">
  <h3>What is 2 + 2?</h3>
  <div class="options">
    <input type="radio" name="answer" id="option1" value="3">
    <label for="option1">3</label>
    <input type="radio" name="answer" id="option2" value="4">
    <label for="option2">4</label>
    <input type="radio" name="answer" id="option3" value="5">
    <label for="option3">5</label>
  </div>
</div>
```

### 2. **MERN Stack Quiz**
This is an advanced format for those who are learning or working with the MERN (MongoDB, Express, React, Node) stack. It integrates backend APIs with frontend interaction to store and manage quiz data dynamically.

- **Features**:
  - Backend powered by Node.js and Express for serving quiz data.
  - Uses MongoDB to store questions and user answers.
  - Can track user progress in real-time.
  - Submissions are stored in a database for future analysis.
  - Integrates React for dynamic frontend rendering.

```javascript
// Example Backend: Node.js Express Endpoint to Fetch Questions
app.get('/api/questions', (req, res) => {
  db.collection('questions').find().toArray((err, questions) => {
    if (err) throw err;
    res.json(questions);
  });
});
```

### 3. **Interactive and Responsive Quiz**
This format focuses on providing a clean, user-friendly, and highly interactive quiz experience. It utilizes **CSS Flexbox** and **JavaScript** to create a responsive layout.

- **Features**:
  - **Interactive Design**: Buttons are styled to change color when clicked. Labels for options change color based on the selection.
  - **Navigation Buttons**: The user can move through the questions with "Previous" and "Next" buttons. On the last question, the "Next" button becomes "Submit."
  - **Pass/Fail Feedback**: After the quiz is submitted, users are given feedback on whether they passed or failed based on the predefined passing threshold.

```html
<!-- Example of Interactive Quiz Styling -->
<style>
  .options label:hover {
    background-color: #f0f0f0;
  }
  .options input:checked + label {
    background-color: #28a745;
    color: white;
  }
</style>
```

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please ensure your code follows the existing style conventions and includes relevant test cases if applicable.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## Outputs
1. Question 1st Quiz form                      [https://github.com/Anujmishra2005/Assesment_Online_Quiz_IT-B_2200320130043/tree/main/Question%201st%20Quiz%20form]

![First Question Output](https://github.com/Anujmishra2005/Assesment_Online_Quiz_IT-B_2200320130043/blob/main/Output%20Images/Qusion%201st%20output.png)


2. Question 2nd MERN Stack Quiz                [https://github.com/Anujmishra2005/Assesment_Online_Quiz_IT-B_2200320130043/tree/main/Question%202nd%20MERN%20Stack%20Quiz]

![Second Question Output](https://github.com/Anujmishra2005/Assesment_Online_Quiz_IT-B_2200320130043/blob/main/Output%20Images/Question%202nd%20Output.png)


3. Question 3rd Interactive Quiz               [https://github.com/Anujmishra2005/Assesment_Online_Quiz_IT-B_2200320130043/tree/main/Question%203rd%20Interactive%20Quiz]

![Third Question Output](https://github.com/Anujmishra2005/Assesment_Online_Quiz_IT-B_2200320130043/blob/main/Output%20Images/Question%203rd%20Output.png)

---
