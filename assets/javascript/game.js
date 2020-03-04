// variables 
var answersA = [
    "5",
    "2",
    "3",
    "4"
];
var answersB = [ 
    "1",
    "5",
    "3",
    "4"
];

var answersC = [
    "1",
    "2",
    "5",
    "4"
];
var answersD = [
    "1",
    "2",
    "5",
    "4"
];
var correctAns = [
    "5",
    "2",
    "3",
    "4"
];

var inter;
var userGuess 
var runtime = false;
var timer = 30;

var wins = 0;
var losses = 0;
var timeOut = 0;

var guess = true;

var outOfTime = false;
var correct = 0;
//set up 4 arrays to hold the answers 
//set up one array to hold the correct answers
//window.onload = function() {
   // $("#start").on("click", start);
 // };
//on click start function 
$("#start").on("click", function(){
//create timer 

//per question

function start() {
    if (!runtime) {
      inter = setInterval(count, 1000);
      setInterval(testwin, 1000);
      runtime = true;
      document.getElementById("start").style.visibility = "hidden";
    }

    $(".answer1").text(answersA[0]);
    $(".answer2").text(answersA[1]);
    $(".answer3").text(answersA[2]);
    $(".answer4").text(answersA[3]);
  }
  function count() {
      if (timer >= 1){
        timer--;
        $("#Timer").text(timer);
      } 
      else if (timer === 0){
        timeOut++;
        timer = -1;
        setTimeout(restart, 5000);
        $("#Unanswered").text(timeOut);
        $("#Timer").text("");
        document.getElementById("Timer").style.visibility = "hidden";
        outOfTime = true;
        updateDisplay();
      }
      else if (timer === -1) {
        $("#Timer").text("");
      }
  }

function testwin(){
    if (correct === 1){
        wins++;
        timer = -1;
        guess = 1;
        updateDisplay();
        setTimeout(restart, 5000);
        clearInterval(count);
        $("#Timer").text("");
        $("#Wins").text(wins);
        correct = 0;
    }
    if (correct === 2) {
        guess = 2;
        timer = -1;
        losses++;
        updateDisplay();
        setTimeout(restart, 5000);
        clearInterval(count);
        $("#Timer").text("");
        $("#Losses").text(losses);
        correct = 0;
    }
}

function restart(){
    timer = 30;
    document.getElementById("Timer").style.visibility = "visible";
    $("#Question").text("");
    userGuess = "";
    guess = 0;
    correct = 0;
    
}

function updateDisplay(){
    if (outOfTime === true){
        $("#Question").text("Time ran out!");
    }
    if (guess === 1){
        $("#Question").text("Correct");
    }
    else if (guess === 2){
        $("#Question").text("Incorrect");
    }
}

function testanswer(){
    if (userGuess === correctAns[0]){
        correct = 1;
        console.log(correct)
    }
    else {
        correct = 2;
        console.log(correct)
    }
}



$(".an").on("click", function(){
    //if statement to compare clicked to correct in answer array if correct 

});

$(".answer1").on("click", function(){
    userGuess = answersA[0]
    console.log(userGuess);
    testanswer();
});
$(".answer2").on("click", function(){
    userGuess = answersA[1]
    testanswer();
});
$(".answer3").on("click", function(){
    userGuess = answersA[2]
    testanswer();
});
$(".answer4").on("click", function(){
    userGuess = answersA[3]
    testanswer();
});
start();


    //write out the 4 answers 

    //conditionals to see if they chose the right answer or the wrong answer]

//display correct or incorrect or out of time
//display the correct answer 
//maybe add photo and sound??

//go to the next question 


//closing prompt 

//number of correct answers
//number of incorrect answers
//number of unanswered 

//start over?

});


