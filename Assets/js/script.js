//Create an oject to hold the questions and answers
var questions = [
  {
    question: "What is the output of this code: console.log(typeof null);",
    choices: ["null", "object", "undefined", "string"],
    answer: 1,
  },
  {
    question: "What is the output of this code: console.log(2 + '2');",
    choices: ["4", "22", "NaN", "undefined"],
    answer: 1,
  },
  {
    question: "What is the output of this code: console.log(2=='2');",
    choices: ["true", "false", "NaN", "undefined"],
    answer: 0,
  },
];

//Create a variable to hold the question number
var questionNum = 1;

//Variable to hold the score
var score = 0;

//Variable to hold the user's answer choice
var choice = 0;

//Variables to hold questions and answer choices, needed in global context
var questionEl = document.getElementById("questions");
var choiceOneEl = document.getElementById("choiceOne");
var choiceTwoEl = document.getElementById("choiceTwo");
var choiceThreeEl = document.getElementById("choiceThree");
var choiceFourEl = document.getElementById("choiceFour");

//Sounds
var audio = document.getElementById("audio");


  questionEl.textContent = questions[questionNum].question;
  choiceOneEl.textContent = questions[questionNum].choices[0];
  choiceTwoEl.textContent = questions[questionNum].choices[1];
  choiceThreeEl.textContent = questions[questionNum].choices[2];
  choiceFourEl.textContent = questions[questionNum].choices[3];


function getAnswer() {
  choiceOneEl.addEventListener("mouseover", function () {
    choiceOneEl.setAttribute(
      "style",
      "font-style: italic; font-weight: bolder; font-size:20px;"
    );
});
  choiceOneEl.addEventListener("mouseout", function () {
    choiceOneEl.setAttribute(
      "style",
      "font-style: normal; font-weight: normal; font-size:16px;"
    );
  });
  choiceOneEl.addEventListener("click", function () {
    choiceOneEl.setAttribute(
      "style",
      "font-style: normal; font-weight: normal; font-size:16px;"
    );
    choice = 0;
    setAnswer(choice);
  });
  choiceTwoEl.addEventListener("mouseover", function () {
    choiceTwoEl.setAttribute(
      "style",
      "font-style: italic; font-weight: bolder; font-size:20px;"
    );
  });
  choiceTwoEl.addEventListener("mouseout", function () {
    choiceTwoEl.setAttribute(
      "style",
      "font-style: normal; font-weight: normal; font-size:16px;"
    );
  });
  choiceTwoEl.addEventListener("click", function () {
    choiceTwoEl.setAttribute(
      "style",
      "font-style: normal; font-weight: normal; font-size:16px;"
    );
    choice = 1;
    setAnswer(choice);
  });
  choiceThreeEl.addEventListener("mouseover", function () {
    choiceThreeEl.setAttribute(
      "style",
      "font-style: italic; font-weight: bolder; font-size:20px;"
    );

  });
  choiceThreeEl.addEventListener("mouseout", function () {
    choiceThreeEl.setAttribute(
      "style",
      "font-style: normal; font-weight: normal; font-size:16px;"
    );
  });
  choiceThreeEl.addEventListener("click", function () {
    choiceThreeEl.setAttribute(
      "style",
      "font-style: normal; font-weight: normal; font-size:16px;"
    );
    choice = 2;
    setAnswer(choice);
  });
  choiceFourEl.addEventListener("mouseover", function () {
    choiceFourEl.setAttribute(
      "style",
      "font-style: italic; font-weight: bolder; font-size:20px;"
    );

  });
  choiceFourEl.addEventListener("mouseout", function () {
    choiceFourEl.setAttribute(
      "style",
      "font-style: normal; font-weight: normal; font-size:16px;"
    );
  });
  choiceFourEl.addEventListener("click", function () {
    choiceFourEl.setAttribute(
      "style",
      "font-style: normal; font-weight: normal; font-size:16px;"
    );
    choice = 3;
    setAnswer(choice);
  });
}
function setAnswer(choice){
  if (choice == questions[questionNum].answer){
    console.log("Correct Answer");
  } else {
    console.log("Incorrect Answer");
  }
}

function play() {
var audio = document.getElementById("audio")
}


getAnswer();
