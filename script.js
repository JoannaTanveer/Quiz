// $(document).ready(function() {
var startButton = document.getElementById('start-btn');
var questionText= document.getElementById('question');
var questionIndex = 0

startButton.addEventListener('click', startGame);
const questionArray = [
    {
    question: 'What is 2 = 2',
    answers: [
        { text: 'A: 4', correct: true},
        { text: 'B: 17', correct: false},
        { text: 'A: 4', correct: true},
        { text: 'A: 4', correct: true}
    ] },
    
    // {
    // question: 'What is 2 = 2',
    // answers: [
    //     { text: 'A: 4', correct: true},
    //     { text: 'B: 17', correct: false},
    //     { text: 'A: 4', correct: true},
    //     { text: 'A: 4', correct: true}
    // ] },
    // {
    // question: 'What is 2 = 2',
    // answers: [
    //     { text: 'A: 4', correct: true},
    //     { text: 'B: 17', correct: false},
    //     { text: 'A: 4', correct: true},
    //     { text: 'A: 4', correct: true},
        
    // ] },
     
]  
function startGame () {
    nextQuestion()
    timer()
}

function nextQuestion () {
    var question=questionArray[questionIndex].question
    questionText.innerHTML=question
    
}

console.log(question)
function selectAnswer () {


}


var timeTotal= 3;
function timer () {
    var setTimer = setInterval(function(){
          
    document.getElementById('timeLeft').innerHTML=`Time Left: ${timeTotal}` 
    if (timeTotal <= 0){
        clearInterval(setTimer)
        document.getElementById('timeLeft').innerHTML="Time's Up!";
    } else {
        timeTotal--
    }
  }, 1000);
}


