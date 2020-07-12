// $(document).ready(function() {
var startButton = document.getElementById('start-btn');
var questionText= document.getElementById('question');
var questionIndex = 0
var buttonAText = document.getElementById("btn-A");



startButton.addEventListener('click', startGame);





const questionArray = [
    {
    question: 'What is 2 = 2',
    answers: [
        { textA: 'A: 4', correct: true},
        { textB: 'B: 17', correct: false},
        { textC: 'A: 4', correct: true},
        { textD: 'A: 4', correct: true}
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
//     buttonAText.addEventListener('click', nextQuestion);
// console.log(buttonAText)
}

function nextQuestion () {
    var question=questionArray[questionIndex].question;
    questionText.innerHTML=question;
    var buttonA=questionArray[questionIndex].answers.textA;
    buttonAText.innerHTML=buttonA;
    console.log(buttonA)
    
}

// console.log(question)
// console.log(buttonA)
// function selectAnswer () {
// alert(questionArray.textA)

// }


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


