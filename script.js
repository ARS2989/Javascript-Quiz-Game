function byId(id{
    return document.getElementById(id);
})

var 
var startScreen = byId("startScreen");
var gameScreen = byId("gameScreen");
var startBtn = byId("startQuiz")
console.log(startBtn);
function startQuiz() {
    startScreen.classList.toggle("hide")
}


const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const startButton = document.getElementById("start-btn");
const timerElement = document.getElementById("time");


var = questions = [
const questions = [
    { questionElement: "Which of the following is NOT a valid value for the 'display' property in CSS?"

    choicesElement:
    [
        "A) block"
        "B) none"
        "C) inline-block"
        "D) center"]

        answer: "D) center"
 

function question() {
    var answer = prompt("Which of the following is NOT a valid value for the 'display' property in CSS?\nA) block\nB) none\nC) inline-block\nD) center");
  
    if (answer.toUpperCase() === "D") {
      console.log("Correct!");
    } else {
      console.log("Incorrect. The correct answer is D.");
    }
  }

   {questionElement: "Which of the following tags is used to create a hyperlink in HTML?"
   
   choicesElement:[
    "A) <img>"
    "B) <a>"
    "C) <div>"
    "D) <p>"]

    answer: "B) <a>"
 

function question() {
    var answer = prompt("Which of the following tags is used to create a hyperlink in HTML?\nA) <img>\nB) <a>\nC) <div>\nD) <p>");
  
    if (answer.toUpperCase() === "B") {
      console.log("Correct!");
    } else {
      console.log("Incorrect. The correct answer is B.");
    }
  }

  
   {questionElement: "What does the 'typeof' operator in JavaScript return when used on an object?"

   choicesElement:[
    "A) "object""
   "" B) "array""
    "C) "function""
    "D) "undefined""]
 

function question() {
    var answer = prompt("What does the 'typeof' operator in JavaScript return when used on an object?\nA) 'object'\nB) 'array'\nC) 'function'\nD) 'undefined'");
  
    if (answer.toUpperCase() === "A") {
      console.log("Correct!");
    } else {
      console.log("Incorrect. The correct answer is A.");
    }
  }
  
  }


function startQuiz() {
    addEventListener(onclick)
  showQuestion();
  startTimer(#timer);
}]

function displayQuestion() {
    var currentQuestion = currentQuestion[questionIndex];
    
    //question.textContent = currentQuestion.question;
    //ans1.textContent = currentQuestion.ans1
    //ans2.textContent = currentQuestion.ans2
    //ans3.textContent = currentQuestion.ans3
    //ans4.textContent = currentQuestion.ans4
}

function checkAnswer(event) {
    console.log(event.target.textContent);

    if (event.target.textContent === questions[questionIndex].correct)
}

function startTimer() {
  const timer = setInterval(() => {
    timeLeft--;
    timerElement.innerText = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);


      function saveScore() {
        var saveScores = JSON.parse(localStorage.getItem("score")) || []
        var scoreObj = {
            name: initials.value,
            score: timeLeft,
        };
    
    savedScores.push(scoreObj)

    localStorage.getItem("scores", JSON.stringify(savedScores));
    displayScores()
    }

    function displayScores() {
        var savedScores = JSON.parse(localStorage.getItem("scores")) || []
    }
