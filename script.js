//Create an oject to hold the questions and answers
var questions = [
    {question: "What is the output of this code: console.log(typeof null);",
    choices: ["null","object","undefined","string"],
    answer: 1 },
    {question: "What is the output of this code: console.log(2 + '2');",
    choices: ["4", "22", "NaN", "undefined"],
    answer: 1 },
    {question: "What is the output of this code: console.log(2=='2');",
    choices: ["true", "false", "NaN", "undefined"],
    answer: 0 }
];

//Create a variable to hold the question number
var questionNum = 0;

//Variable to hold the score
var score = 0;

function displayQuestion(){
    var questionEL = document.getElementById("questions")
    questionEL.textContent = questions[questionNum].question;
    var choicesEL = document.getElementById("choices");
    choicesEL.innerHTML = "";
  // Loop through the choices
  for (var i = 0; i < questions[questionNum].choices.length; i++) {
    // Create a radio button element
    var choice = document.createElement("input");
    choice.type = "radio";
    choice.name = "choice";
    choice.value = i;
}
};

displayQuestion();