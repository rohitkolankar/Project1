var readlineSync = require("readline-sync");

var score = 0;


var userName = readlineSync.question("What's your name?\n");

console.log("Welcome "+ userName + 'to "DO YOU KNOW Rohit?"');


// data of high score
var highScores = [
  {
    name: "Rohit",
    score: 10,
  },

  {
    name: "Tanay",
    score: 10,
  },
]

// questions
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "Nagpur"
}, {
  question: "My Role model?",
  answer: "Elon Musk"
}];

// loop
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY! You SCORED: ", score);

console.log("Check out the scores")