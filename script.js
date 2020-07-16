// $(document).ready(function() {
var startButton = document.getElementById('start-btn');
var questionText = document.getElementById('question');
var questionIndex = 0
var buttonAText = document.getElementById("btn-A");
var buttonBText = document.getElementById("btn-B");
var buttonCText = document.getElementById("btn-C");
var buttonDText = document.getElementById("btn-D");



startButton.addEventListener('click', startGame);





var questionArray = [{
    question: 'What is 2 = 2',
    answers: {
        choicea: '2',
        choiceb: '3',
        choicec: '4',
        choiced: '22',
        correctAnswer: 'choicea'
    }
}];



function startGame() {
    nextQuestion()
    timer()
}

function nextQuestion() {
    var question = questionArray[questionIndex].question;
    questionText.innerHTML = question;

    var buttonA = questionArray[questionIndex].answers.choicea;
    buttonAText.innerHTML = buttonA;

    var buttonB = questionArray[questionIndex].answers.choiceb;
    buttonBText.innerHTML = buttonB;

    var buttonC = questionArray[questionIndex].answers.choicec;
    buttonCText.innerHTML = buttonC;

    var buttonD = questionArray[questionIndex].answers.choiced;
    buttonDText.innerHTML = buttonD;


}


var timeTotal = 3;
function timer() {
    var setTimer = setInterval(function () {

        document.getElementById('timeLeft').innerHTML = `Time Left: ${timeTotal}`
        if (timeTotal <= 0) {
            clearInterval(setTimer)
            document.getElementById('timeLeft').innerHTML = "Time's Up!";
        } else {
            timeTotal--
        }
    }, 1000);
}
var startButton = document.getElementById('start-btn');
var questionText = document.getElementById('question');
var questionIndex = 0
var buttonAText = document.getElementById("btn-A");
var buttonBText = document.getElementById("btn-B");
var buttonCText = document.getElementById("btn-C");
var buttonDText = document.getElementById("btn-D");

var answerContainer =document.getElementById('answer-buttons');
var scoreOutput = document.getElementById('userScore');


startButton.addEventListener('click', startGame);

var questionArray = [{
    question: 'What is 2 = 2',
    answers: {
        choicea: '2',
        choiceb: '3',
        choicec: '4',
        choiced: '22',
    correctAnswer: 'choicea'
    }
}];

function startGame() {
    nextQuestion()
    timer()
}

function nextQuestion() {
    var question = questionArray[questionIndex].question;
    questionText.innerHTML = question;

    var buttonA = questionArray[questionIndex].answers.choicea;
    buttonAText.innerHTML = buttonA;

    var buttonB = questionArray[questionIndex].answers.choiceb;
    buttonBText.innerHTML = buttonB;

    var buttonC = questionArray[questionIndex].answers.choicec;
    buttonCText.innerHTML = buttonC;

    var buttonD = questionArray[questionIndex].answers.choiced;
    buttonDText.innerHTML = buttonD;
}

var timeTotal = 3;
function timer() {
    var setTimer = setInterval(function () {

        document.getElementById('timeLeft').innerHTML = `Time Left: ${timeTotal}`
        if (timeTotal <= 0) {
            clearInterval(setTimer)
            document.getElementById('timeLeft').innerHTML = "Time's Up!";
        } else {
            timeTotal--
        }
    }, 1000);
}

answerContainer.addEventListener("click", getUserChoice);

function getUserChoice(event) {
    console.log("clicked")
    var userChoice = event.target.textContent;
    console.log(userChoice);
}


function showResults() {
    answerContainer = getElementById('answer-buttons');
    // empty variable for user choice, and variable to keep track of score
    var userChoice = ''
    var score = 0

    //Loop through each question and answers
    for (i = 0; i < questionArray.length; i++) {
        userChoice = answerContainer.children(i).value
    // Conditional to decide of userChoice === questionArray[i].answers.correctAnswer
        if (userChoice===questionArray[i].correctAnswer) {
            score++;
            nextQuestion();
            console.log(score);
            
        }
    }



