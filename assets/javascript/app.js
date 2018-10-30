var question = function(text, ansA, ansB, ansC, ansD, correctAns) {
	this.text=text;
	this.ansA=ansA;
	this.ansB=ansB;
	this.ansC=ansC;
	this.ansD=ansD;
	this.correctAns=correctAns;
}
var question1 = new question("What is the name of the evil midget?", "prince charming", "lord farquaad", "baby legs", "donkey", "lord farquaad");
var question2 = new question("What is the name of the evil midget?", "prince charming", "lord farquaad", "baby legs", "donkey", "lord farquaad");
var question3 = new question("What is the name of the evil midget?", "prince charming", "lord farquaad", "baby legs", "donkey", "lord farquaad");
var question4 = new question("What is the name of the evil midget?", "prince charming", "lord farquaad", "baby legs", "donkey", "lord farquaad");
var question5 = new question("What is the name of the evil midget?", "prince charming", "lord farquaad", "baby legs", "donkey", "lord farquaad");
var question6 = new question("What is the name of the evil midget?", "prince charming", "lord farquaad", "baby legs", "donkey", "lord farquaad");
var question7 = new question("What is the name of the evil midget?", "prince charming", "lord farquaad", "baby legs", "donkey", "lord farquaad");
var question8 = new question("What is the name of the evil midget?", "prince charming", "lord farquaad", "baby legs", "donkey", "lord farquaad");
var question9 = new question("What is the name of the evil midget?", "prince charming", "lord farquaad", "baby legs", "donkey", "lord farquaad");
var question10 = new question("What is the name of the evil midget?", "prince charming", "lord farquaad", "baby legs", "donkey", "lord farquaad");
var questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
var activeQuestion = questions[0];
var correctQuestions = 0;

var startGame = function() {
	activeQuestion=questions[0];
	correctQuestions=0;
	$("#questionArea").hide();
	$(".answers").hide();
}

$(document).ready(function() {
	startGame();
});

// when space bar is pressed game starts (first question is displayed, answers displayed, instructions turn into a timer)


// timer counts down from 15 seconds until an answer is chosen or time tuns out

// answer correct (correct answers goes up, next question is displayed, timer reset )

// answer incorrect or not answered (next question is displayed, timer reset);

// at the end of the questions number of questions answered correctly is displayed

// press button to return to the beginning of the quiz