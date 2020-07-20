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
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");


startButton.addEventListener('click', startGame);
var questionCounter = 0

var questionArray = [{
    question: 'Which of these is a Python control flow statement type?',
    answers: {
        choicea: 'else if',
        choiceb: 'elsif',
        choicec: 'case',
        choiced: 'elif',
    },
    correctAnswer: 'elif',
},
{
    question: 'Who was the child of a famous poet and English mathematician whom many historians consider the first programmer?',
    answers: {
        choicea: 'Ada Lovelace',
        choiceb: 'Steve Jobs',
        choicec: 'Florence Nightengale',
        choiced: 'Monty Python',
    },
    correctAnswer: 'Ada Lovelace',
},
{
    question: 'The company that developed the original software upon which Google Earth is based, Keyhole, Inc., acquired some of its initial funding from which secretive US government agency?',
    answers: {
        choicea: 'FBI',
        choiceb: 'CIA',
        choicec: 'NASA',
        choiced: 'Coast Guard',
    },
    correctAnswer: 'CIA',
},
{
    question: 'I wish I knew who else is doing work on this system so that I could get some help on a question I have. What is the command to list all the users currently on the system?',
    answers: {
        choicea: 'question',
        choiceb: 'work',
        choicec: 'system',
        choiced: 'who',
    },
    correctAnswer: 'who',

},
{
    question: 'Which of the following data structures falls under the category of a dictionary?',
    answers: {
        choicea: 'Tree',
        choiceb: 'hash',
        choicec: 'Linked list',
        choiced: 'Hash table',
    },
    correctAnswer: 'Hash table',

},
{
    question: 'Which of the following operators has the highest precedence?',
    answers: {
        choicea: '*',
        choiceb: '&&',
        choicec: '!',
        choiced: '!=',
    },
    correctAnswer: '!',

}];



function startGame() {
    displayQuestion()
    timer()
}
//Displays question on question card, and answer buttons
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

// Timer function
var timeTotal = 30;
function timer() {
    var setTimer = setInterval(function () {

        document.getElementById('timeLeft').innerHTML = `Time Left: ${timeTotal}`
        if (timeTotal <= 0) {
            clearInterval(setTimer)
            document.getElementById('timeLeft').innerHTML = `Time's Up! Your score is ${score}`;
            saveButton();
        } else {
            timeTotal--
        }
    }, 1000);
}







answerContainer.addEventListener("click", getUserChoice);

function getUserChoice(event) {
    
    var userChoice = event.target.textContent;
    
    showResults(userChoice);
}

//Function to call once the timer has run out
function showResults(userChoice) {
    answerContainer = document.getElementById('answer-buttons');


    // Conditional to decide of userChoice === questionArray[i].answers.correctAnswer
    if (userChoice === questionArray[questionIndex].correctAnswer) {
        questionIndex++
        score++;
        displayQuestion();

        document.getElementById('userScore').innerHTML = `Score: ${score}`
    } else {
        questionIndex++ //Increase question Index to go to the next question
        timeTotal--
        displayQuestion()
    }



};
// New table to pop-up when time is up, quiz card hides
var table = document.getElementById('highScore-table');
function saveButton() {

    var userName = prompt('What is your gamer name?');
    var hideClass = document.getElementById('highScore-container');
    hideClass.classList.remove('hide');

    var questionContainer = document.getElementById('question-container');
    questionContainer.classList.add('hide');

//This group of code it to get the user name and score to populate on a table
    var highScoreEntry = (`${userName} : ${score}`)
    window.localStorage.setItem(`${userName}`, JSON.stringify(highScoreEntry));


    var li = document.createElement('li');
    var highStorage = window.localStorage.getItem(`${userName}`);
    li.append(highStorage);

}



