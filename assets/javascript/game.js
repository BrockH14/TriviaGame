// variables 
//set up 4 arrays to hold the answers 
var answersA;
var answersB;
var answersC;
var answersD;
var correctAns;
var inter;
var userGuess;
var runtime;
var timer;
var wins;
var losses;
var timeOut;
var guess;
var outOfTime;
var correct;
var btns;
var questNum;
var imgs;



window.onload = function() {
    $(".answer1").text("");$(".answer2").text("");$(".answer3").text("");$(".answer4").text("");
    

$("#start").on("click", function(){//on click start function 
    answersA = ["Yellow", "Pink", "Blue", "Purple"];
    answersB = ["Dory", "Pumba", "Buzz", "Andy"];
    answersC = ["3", "6", "2", "1"];
    answersD = ["Read books", "Go to the beach", "Clean the house", "Talk to Gaston"];
    correctAns = ["Blue", "Andy", "3", "Read books"];//set up one array to hold the correct answers
    inter = null; 
    userGuess = null;
    runtime = false;
    timer = 30;
    wins = 0;
    losses = 0;
    timeOut = 0; 
    guess = true; 
    outOfTime = false; 
    correct = 0; 
    btns =null; 
    questNum = 0; 
function start() {//create timer 
    if (!runtime) {
      inter = setInterval(count, 1000);
      setInterval(testwin, 1000);
      runtime = true;
      $("#start").text("");
    }
    if (questNum === 0){
        btns = $("ul").append("<ol class='one'><h3><button class='answer1 an'></button></h3></ol>", "<ol class='one'><h3><button class='answer2 an'></button></h3></ol>", "<ol class='one'><h3><button class='answer3 an'></button></h3></ol>", "<ol class='one'><h3><button class='answer4 an'></button></h3></ol>")
        $(".answer1").text(answersA[0]);$(".answer2").text(answersA[1]);$(".answer3").text(answersA[2]);$(".answer4").text(answersA[3]);
        $("#Question").text("Question 1: What color was Cinderella's ball gown?");
    }
}
  function count() {
      if (timer >= 1){
        timer--;
        $("#Timer").text(timer);
      } 
      else if (timer === 0){
        timeOut++;
        timer = -1;
        questNum++;
        setTimeout(restart, 5000);
        $("#Unanswered").text(timeOut);
        $("#Timer").text("");
        document.getElementById("Timer").style.visibility = "hidden";
        outOfTime = true;
        updateDisplay();
        $(".an").remove();
      }
      else if (timer === -1) {
        $("#Timer").text("");
      }
  }
function testwin(){
    $(".answer1").on("click", function(){
        $(".an").remove();
        if (questNum === 0){userGuess = answersA[0]}
        else if (questNum === 1){userGuess = answersB[0]}
        else if (questNum === 2){userGuess = answersC[0]}
        else if (questNum === 3){userGuess = answersD[0]}
        testanswer();
    });
    $(".answer2").on("click", function(){
        $(".an").remove();
        if (questNum === 0){userGuess = answersA[1]}
        else if (questNum === 1){userGuess = answersB[1]} 
        else if (questNum === 2){userGuess = answersC[1]}
        else if (questNum === 3){userGuess = answersD[1]}
        testanswer();
    });
    $(".answer3").on("click", function(){
        $(".an").remove();
        if (questNum === 0){userGuess = answersA[2]}
        else if (questNum === 1){userGuess = answersB[2]}
        else if (questNum === 2){userGuess = answersC[2]}
        else if (questNum === 3){userGuess = answersD[2]}
        testanswer();
    });
    $(".answer4").on("click", function(){
        $(".an").remove();
        if (questNum === 0){userGuess = answersA[3]}
        else if (questNum === 1){userGuess = answersB[3]}
        else if (questNum === 2){userGuess = answersC[3]}
        else if (questNum === 3){userGuess = answersD[3]}
        testanswer();
    });
    if (correct === 1){
        wins++;
        timer = -1;
        guess = 1;
        questNum++;
        updateDisplay();
        setTimeout(restart, 4000);
        clearInterval(count);
        $("#Timer").text("");
        correct = 0;
    }
    if (correct === 2) {
        guess = 2;
        timer = -1;
        losses++;
        questNum++;
        updateDisplay();
        setTimeout(restart, 4000);
        clearInterval(count);
        $("#Timer").text("");
        correct = 0;
    }
}
//display the correct answer 
function restart(){
    timer = 30;
    document.getElementById("Timer").style.visibility = "visible";
    $("#Promp").text("");
    $("#Correct").text("");
    userGuess = "";
    guess = 0;
    correct = 0;
    if (questNum === 1){
        btns = $("ul").append("<ol class='two'><h3><button class='answer1 an'></button></h3></ol>", "<ol class='two'><h3><button class='answer2 an'></button></h3></ol>", "<ol class='two'><h3><button class='answer3 an'></button></h3></ol>", "<ol class='two'><h3><button class='answer4 an'></button></h3></ol>")
        $(".answer1").text(answersB[0]); $(".answer2").text(answersB[1]); $(".answer3").text(answersB[2]); $(".answer4").text(answersB[3]);
        $("#Question").text("Question 2: What does the bottom of Woody's boot say?");
        $(".one").remove();
        $("img").remove();
    }
    else if (questNum === 2){
        btns = $("ul").append("<ol class='three'><h3><button class='answer1 an'></button></h3></ol>", "<ol class='three'><h3><button class='answer2 an'></button></h3></ol>", "<ol class='three'><h3><button class='answer3 an'></button></h3></ol>", "<ol class='three'><h3><button class='answer4 an'></button></h3></ol>")
        $(".answer1").text(answersC[0]); $(".answer2").text(answersC[1]); $(".answer3").text(answersC[2]); $(".answer4").text(answersC[3]);
        $("#Question").text("Question 3: How many fairy godmothers did Sleeping Beauty have?");
        $(".two").remove();
        $("img").remove();
    }
    else if (questNum === 3){
        btns = $("ul").append("<ol class='four'><h3><button class='answer1 an'></button></h3></ol>", "<ol class='four'><h3><button class='answer2 an'></button></h3></ol>", "<ol class='four'><h3><button class='answer3 an'></button></h3></ol>", "<ol class='four'><h3><button class='answer4 an'></button></h3></ol>")
        $(".answer1").text(answersD[0]); $(".answer2").text(answersD[1]); $(".answer3").text(answersD[2]); $(".answer4").text(answersD[3]);
        $("#Question").text("Question 4: What is Belle's favorite thing to do?");
        $(".three").remove();
        $("img").remove();
    }
    else if (questNum >= 4){
        btn = $("ul").append("<h1 class='restart'><button>Restart Game?</button></h1>", "<h4>Correct: <span id='Wins'></span></h4>", "<h4>Incorrect: <span id='Losses'></span></h4>", "<h4>Unanswered: <span id='Unanswered'></span></h4>")
        clearInterval(inter);
        $(".four").remove();
        $("#Question").text("");
        $("#Promp").text("");
        $("#Correct").text("");
        updateDisplay()
        $("img").remove();
    }
}

//display correct or incorrect or out of time
//maybe add photo and sound??
function updateDisplay(){

    if (outOfTime === true){$("#Promp").text("Your Time ran out!");}
    if (guess === 1){$("#Promp").text("Congratulations You Are Correct!!!");}
    else if (guess === 2){$("#Promp").text("Sorry You Are Incorrect");}
    if (questNum === 1){$("#Correct").text("The correct answer was : " + correctAns[0]);
    $(".gbtn").append("<img src='assets/images/cinderella.jpg'>");
}
    else if (questNum === 2){$("#Correct").text("The correct answer was : " + correctAns[1]);
    $(".gbtn").append("<img src='assets/images/Woody.jpg'>");
}
    else if (questNum === 3){$("#Correct").text("The correct answer was : " + correctAns[2]);
    $(".gbtn").append("<img src='assets/images/flora_fauna_and_merryweather.jpg'>");
}
    else if (questNum === 4){$("#Correct").text("The correct answer was : " + correctAns[3]);
    $(".gbtn").append("<img src='assets/images/belle.jpg'>");
}
}

//conditionals to see if they chose the right answer or the wrong answer]
function testanswer(){
    if (userGuess === correctAns[0]){correct = 1;}
    else if (userGuess === correctAns[1]){correct = 1;}
    else if (userGuess === correctAns[2]){correct = 1;}
    else if (userGuess === correctAns[3]){correct = 1;}
    else {correct = 2;}
}

start();
//go to the next question 

//closing prompt 

//number of correct answers
//number of incorrect answers
//number of unanswered 

//start over?

setInterval(restartG, 1000)
function restartG(){
    if (questNum <= 4){
        $("#Wins").text(wins);
        $("#Losses").text(losses);
        $("#Unanswered").text(timeOut);
    }
$(".restart").on("click", function(){
    window.location.reload(false);
});
}

});
};
