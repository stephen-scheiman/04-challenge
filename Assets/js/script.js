//Create an oject to hold the questions and answers
var questions = [
  {
    question: "What is the output of this code: console.log(typeof null)",
    choices: ["null", "object", "undefined", "string"],
    answer: 1,
  },
  {
    question: "What is the output of this code: console.log(2 + '2')",
    choices: ["4", "22", "NaN", "undefined"],
    answer: 1,
  },
  {
    question: "What is the output of this code: console.log(2=='2')",
    choices: ["true", "false", "NaN", "undefined"],
    answer: 0,
  },
  {
    question: "Which of the below is proper syntax for an IF statement",
    choices: ["if i=5 then", "if i=5", "if i==5 then", "if(i==5)"],
    answer: 3,
  },
  {
    question:
      "What is the correct location to reference an external JavaScript file?",
    choices: [
      "The <head> section",
      "The <footer> section",
      "The <body> section",
      "Either <head> or <body> section",
    ],
    answer: 3,
  },
  {
    question: "How do you call a function named myFunction()?",
    choices: [
      "function myFunction()",
      "call myFunction()",
      "myFunction()",
      "call function myFunction()",
    ],
    answer: 2,
  },
  {
    question:
      "What is the correct syntax for referring to an external script named 'xxx.js'?",
    choices: [
      "<script href='xxx.js'>",
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<href script='xxx.js'>",
    ],
    answer: 2,
  },
  {
    question: "Which HTML Element holds the location of a JavaScript file?",
    choices: ["js tag", "script tag", "file tag", "java tag"],
    answer: 1,
  },
];

//Create a variable to hold the question number
var questionNum = 0;

//Variable to hold the score
var score = 0;

//Variable to hold the user's answer choice
var choice = 0;

//Variables to hold questions and answer choices
var questionEl = document.getElementById("questions");
var choiceOneEl = document.getElementById("choiceOne");
var choiceTwoEl = document.getElementById("choiceTwo");
var choiceThreeEl = document.getElementById("choiceThree");
var choiceFourEl = document.getElementById("choiceFour");

//Variable to hold the Start button and timer elements
var startButton = document.getElementById("startButton");
var timerWindow = document.getElementById("timerWindow");

//function hideQuestions() {
  questionEl.style.display = "none";

  choiceOneEl.style.display = "none";

  choiceTwoEl.style.display = "none";

  choiceThreeEl.style.display = "none";

  choiceFourEl.style.display = "none";
//}

//Initial timer value (in ms)
var timer = 60000;

function startTimer() {
  countdownTimer = setInterval(function () {
    timer = timer - 1000;
    timerWindow.textContent = "Time left: " + timer / 1000 + " seconds";
    displayQuestion(questionNum);
    if (timer <= 0) {
      clearInterval(countdownTimer);
      gameOver();
    }
  }, 1000);
}

//Sounds
var audio = document.getElementById("audio");

//Display questions and answer choices
function displayQuestion(questionNum) {
  questionEl.textContent = questions[questionNum].question;
  questionEl.style.display = "block";
  choiceOneEl.textContent = questions[questionNum].choices[0];
  choiceOneEl.style.display = "block";
  choiceTwoEl.textContent = questions[questionNum].choices[1];
  choiceTwoEl.style.display = "block";
  choiceThreeEl.textContent = questions[questionNum].choices[2];
  choiceThreeEl.style.display = "block";
  choiceFourEl.textContent = questions[questionNum].choices[3];
  choiceFourEl.style.display = "block";
}

//Use event listeners to detect mouseover and click for selecting answer choice
choiceOneEl.addEventListener("mouseover", function () {
  choiceOneEl.style.fontStyle = "italic";
  choiceOneEl.style.fontWeight = "bold";
  choiceOneEl.style.fontSize = "25px";
});
choiceOneEl.addEventListener("mouseout", function () {
  choiceOneEl.style.fontStyle = "normal";
  choiceOneEl.style.fontWeight = "normal";
  choiceOneEl.style.fontSize = "16px";
});
choiceOneEl.addEventListener("click", function () {
  // choiceOneEl.style.fontStyle = "italic";
  // choiceOneEl.style.fontWeight = "bold";
  // choiceOneEl.style.fontSize = "25px";
  // choiceOneEl.style.color = "red";
  choice = 0;
  if (choice == questions[questionNum].answer) {
    console.log("Correct Answer");
    questionNum++;
    score++;
    rightAnswer(score);
    displayQuestion(questionNum);
  } else {
    console.log("Incorrect Answer");
    questionNum++;
    wrongAnswer();
    displayQuestion(questionNum);
  }
  //setAnswer(choice, questionNum);
});
choiceTwoEl.addEventListener("mouseover", function () {
  choiceTwoEl.style.fontStyle = "italic";
  choiceTwoEl.style.fontWeight = "bold";
  choiceTwoEl.style.fontSize = "25px";
});
choiceTwoEl.addEventListener("mouseout", function () {
  choiceTwoEl.style.fontStyle = "normal";
  choiceTwoEl.style.fontWeight = "normal";
  choiceTwoEl.style.fontSize = "16px";
});
choiceTwoEl.addEventListener("click", function () {
  // choiceTwoEl.style.fontStyle = "italic";
  // choiceTwoEl.style.fontWeight = "bold";
  // choiceTwoEl.style.fontSize = "25px";
  // choiceTwoEl.style.color = "red";
  choice = 1;
  if (choice == questions[questionNum].answer) {
    console.log("Correct Answer");
    questionNum++;
    score++;
    rightAnswer(score);
    displayQuestion(questionNum);
  } else {
    console.log("Incorrect Answer");
    questionNum++;
    wrongAnswer();
    displayQuestion(questionNum);
  }
  //setAnswer(choice, questionNum);
});
choiceThreeEl.addEventListener("mouseover", function () {
  choiceThreeEl.style.fontStyle = "italic";
  choiceThreeEl.style.fontWeight = "bold";
  choiceThreeEl.style.fontSize = "25px";
});
choiceThreeEl.addEventListener("mouseout", function () {
  choiceThreeEl.style.fontStyle = "normal";
  choiceThreeEl.style.fontWeight = "normal";
  choiceThreeEl.style.fontSize = "16px";
});
choiceThreeEl.addEventListener("click", function () {
  // choiceThreeEl.style.fontStyle = "italic";
  // choiceThreeEl.style.fontWeight = "bold";
  // choiceThreeEl.style.fontSize = "25px";
  // choiceThreeEl.style.color = "red";
  choice = 2;
  if (choice == questions[questionNum].answer) {
    console.log("Correct Answer");
    questionNum++;
    score++;
    rightAnswer(score);
    displayQuestion(questionNum);
  } else {
    console.log("Incorrect Answer");
    questionNum++;
    wrongAnswer();
    displayQuestion(questionNum);
  }
  //setAnswer(choice, questionNum);
});
choiceFourEl.addEventListener("mouseover", function () {
  choiceFourEl.style.fontStyle = "italic";
  choiceFourEl.style.fontWeight = "bold";
  choiceFourEl.style.fontSize = "25px";
});
choiceFourEl.addEventListener("mouseout", function () {
  choiceFourEl.style.fontStyle = "normal";
  choiceFourEl.style.fontWeight = "normal";
  choiceFourEl.style.fontSize = "16px";
});
choiceFourEl.addEventListener("click", function () {
  // choiceFourEl.style.fontStyle = "italic";
  // choiceFourEl.style.fontWeight = "bold";
  // choiceFourEl.style.fontSize = "25px";
  // choiceFourEl.style.color = "red";
  choice = 3;
  if (choice == questions[questionNum].answer) {
    console.log("Correct Answer");
    questionNum++;
    score++;
    rightAnswer(score);
    displayQuestion(questionNum);
  } else {
    console.log("Incorrect Answer");
    questionNum++;
    wrongAnswer();
    displayQuestion(questionNum);
  }
  //setAnswer(choice, questionNum);
});

//Start the countdown timer when the user clicks on the Start Button
startButton.addEventListener("click", startTimer);

//TODO: Play audio on hover and click
function play() {
  var audio = document.getElementById("audio");
}

//TODO: function to end game and display high score list
function gameOver() {
  alert("game over dude");
}

//A function that tracks correct answers
function rightAnswer(score) {
  console.log(score);
  var feedback = document.getElementById("feedbackBox");
  feedback.textContent = "Your answer is: CORRRECT!";
}

//A function that penalizes wrong answers by decrementing the timer by five seconds
function wrongAnswer() {
  timer = timer - 5000;
  var feedback = document.getElementById("feedbackBox");
  feedback.textContent = "Your answer is: INCORRRECT!";
  return timer;
}
