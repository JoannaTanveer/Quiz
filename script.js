// $(document).ready(function() {
var startButton = document.getElementById('start-btn');
var questionText = document.getElementById('question');
var questionIndex = 0
var buttonAText = document.getElementById("btn-A");
var buttonBText = document.getElementById("btn-B");
var buttonCText = document.getElementById("btn-C");
var buttonDText = document.getElementById("btn-D");

var answerContainer = document.getElementById('answer-buttons');
var scoreOutput = document.getElementById('userScore');
var score = 0



startButton.addEventListener('click', startGame);
 var questionCounter = 0

var questionArray = [{
    question: 'What is 2 = 2',
    answers: {
        choicea: '2',
        choiceb: '3',
        choicec: '4',
        choiced: '22',
    },
    correctAnswer: '2',
},
{
    question: 'What is my name',
    answers: {
        choicea: '2',
        choiceb: 'Joanna',
        choicec: '4',
        choiced: '22',
    },
    correctAnswer: 'Joanna',
},
{
    question: 'What is my cats name',
    answers: {
        choicea: '2',
        choiceb: '3',
        choicec: 'Chubby',
        choiced: '22',
    },
    correctAnswer: 'Chubby',
},
{
    question: 'Where do i live',
    answers: {
        choicea: '2',
        choiceb: '3',
        choicec: '4',
        choiced: 'issaquah',
    },
    correctAnswer: 'issaquah',

}];



function startGame() {
    displayQuestion()
    timer()
}

function displayQuestion() {


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
            document.getElementById('timeLeft').innerHTML = `Time's Up! Your score is ${ score }`;
            saveButton();
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
        showResults(userChoice);
    }


function showResults(userChoice) {
    answerContainer = document.getElementById('answer-buttons');
    //variable to keep track of score

    

    //Loop through each question and answers
    // for (i = 0; i < questionArray.length; i++) {
    
    // Conditional to decide of userChoice === questionArray[i].answers.correctAnswer
    if (userChoice === questionArray[questionIndex].correctAnswer) {
        questionIndex++    
        score++;
        displayQuestion();  
            console.log(score);
            document.getElementById('userScore').innerHTML = `Score: ${score}`
        } else {
            questionIndex++
            timeTotal--
            displayQuestion()
        }
    


};


function saveButton () {

    var userName = prompt('What is your gamer name?');
    var hideClass = document.getElementById('highScore-container');
    hideClass.classList.remove('hide');
    
    var questionContainer=document.getElementById('question-container');
    questionContainer.classList.add('hide');
    
    // var saveButton = document.getElementById('save-btn');
    // saveButton.addEventListener('click', saveScore ())
    var user = {  
        name:userName,
        score:score
      }
   
    
    window.localStorage.setItem( "highScore",JSON.stringify(user));
}
