// variables 
var answersA = [];
var answersB = [];
var answersC = [];
var answersD = [];
var correctAns = [];

var inter;

var runtime = false;
var timer = 10;

var wins
var losses = 0;

var guess;
//set up 4 arrays to hold the answers 
//set up one array to hold the correct answers
//window.onload = function() {
   // $("#start").on("click", start);
 // };
//on click start function 
$("#start").on("click", function(){
//create timer 
 setTimeout(timer, 30000)
//per question

function start() {

    if (!runtime) {
      inter = setInterval(count, 1000);
      clockRunning = true;
      document.getElementById("start").style.visibility = "hidden";
    }
  }


  function count() {
      if (timer >= 1){
        timer--;
        $("#Timer").text(timer);
      } else if (timer === 0){
          losses++;
          setTimeout(restart, 5000);
          $("#Losses").text(losses);
          timer = 15;
          document.getElementById("Timer").style.visibility = "hidden";

      }
  }
function restart(){
    clockRunning = false;
    timer = 10;
    console.log(clockRunning);
    document.getElementById("Timer").style.visibility = "visible";
}


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


