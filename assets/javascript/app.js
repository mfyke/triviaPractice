var question = function(text, ansA, ansB, ansC, ansD, correctAns) {
	this.text=text;
	this.ansA=ansA;
	this.ansB=ansB;
	this.ansC=ansC;
	this.ansD=ansD;
	this.correctAns=correctAns;
}
var question1 = new question("What is the name of the evil midget?", "prince charming", "lord farquaad", "baby legs", "donkey", "lord farquaad");
var question2 = new question("Who is Shrek's companion on his quest?", "prince charming", "lord farquaad", "baby legs", "donkey", "donkey");
var question3 = new question("Which of the following choices is not a character in the Shrek universe?", "prince charming", "lord farquaad", "baby legs", "donkey", "baby legs");
var question4 = new question("Where does Shrek live?", "a swamp", "far far away", "duloc", "an abandoned castle", "a swamp");
var question5 = new question("What vegetable does Shrek compare ogres to?", "carrot", "potato", "onion", "cabbage", "onion");
var question6 = new question("What is the name of the princess that Shrek goes to rescue?", "snow white", "shadynasty", "bronte", "fiona", "fiona");
var question7 = new question("What kind of treat does donkey mention to Shrek?", "brownie", "parfait", "cookie", "cake", "parfait");
var question8 = new question("What explodes when Fiona sings?", "a balloon", "lord farquaad", "a bird", "donkey", "a bird");
var question9 = new question("Who sings the hit Shrek song titled All Star?", "smashing pumpkins", "sum 41", "nickelback", "smash mouth", "smash mouth");
var question10 = new question("What is the initial reason that Shrek goes on his quest?", "to help donkey", "he wins lord farquaad's tournament", "to get his swamp back", "to get rid of donkey", "to get his swamp back");
var questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
var questionNumber = 1;
var activeQuestion = questions[questionNumber-1];
var correctQuestions = 0;
var timer = 20;
var countdown;

var startGame = function() {
	timer=20;
	questionNumber = 1;
	activeQuestion=questions[questionNumber-1];
	correctQuestions=0;
	$("#questionArea").hide();
	$(".answers").hide();
	$("#timerArea").html("Answer as many Shrek trivia questions as you can! There is no penalty for incorrect answers! You will have 20 seconds per question. Press space bar to begin!");
}

$(document).ready(function() {
	startGame();
	// displayQuestion();
});

window.onkeyup = function() {
	console.log(event.code);
	if (event.code == "Space" && activeQuestion == questions[0] && timer > 19) {
		displayQuestion();
		displayTimer();
		startTimer();
	}
}

// when space bar is pressed game starts (first question is displayed, answers displayed, instructions turn into a timer)

//display current question and possible answers
var displayTimer = function() {
	$("#timerArea").html(timer);
}

var displayQuestion = function () {
	$("#questionArea").show().html(activeQuestion.text);
	$(".answers").show();
	$("#ansA").html(activeQuestion.ansA);
	$("#ansB").html(activeQuestion.ansB);
	$("#ansC").html(activeQuestion.ansC);
	$("#ansD").html(activeQuestion.ansD);
}

// timer counts down from 20 seconds until an answer is chosen or time tuns out
var startTimer = function() {
	countdown = setInterval(function(){
		timer--;
		displayTimer();
		if(timer==0) {
			questionWrong();
		}
	},1000);
}
// check if chosen answer is correct
$(".answers").click(function() {
	if(activeQuestion[this.id]==activeQuestion.correctAns){
		answerCorrect();
	}
	else{
		questionWrong();
	}
});
// answer correct (correct answers goes up, next question is displayed, timer reset )
var answerCorrect = function() {
	correctQuestions++;
	questionWrong();
}
// answer incorrect or not answered (next question is displayed, timer reset);
var questionWrong = function() {
	clearInterval(countdown);
	questionNumber++;
	if(questionNumber>questions.length){
		endGame();
	}
	else{
		activeQuestion=questions[questionNumber-1];
		timer=20;
		displayQuestion();
		displayTimer();
		startTimer();
	}
}
// at the end of the questions number of questions answered correctly is displayed
// press button to return to the beginning of the quiz
var endGame = function() {
	var playAgain = $("<button>").text("Yes!").addClass("btn btn-success").attr("onClick", "startGame()");
	$("#timerArea").html("Game over! You got " + correctQuestions + " correct out of " + questions.length + " Play Again? ");
	$("#timerArea").append(playAgain);
}
