//Questions JS by David Luz - davidmelo8@gmail.com
// Contribute to this project in github.com/davidluz



// Question Class

function Question(questionIdr,questionTextr,questionAlternativesNumberr,questionAlternativeCorrectr,questionErrorFeedbackr,
questionFeedbackCorrectr){


var questionId = questionIdr;	
var questionText = questionTextr;
var questionAlternativesNumber = questionAlternativesNumberr;
var questionAlternativeCorrect = questionAlternativeCorrectr;
var questionFeedbackError = questionErrorFeedbackr;
var questionFeedbackCorrect =  questionFeedbackCorrectr;	

function getId (){
return(this.questionId);
}
	
}

var question1 = new Question(1,"teste",2,"b","errou","acertou");
console.log(question1.getId());