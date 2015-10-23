// JavaScript Document
var questions = [];




// Atributos
/* 
at1 = Enunciado.
at2 = Alternativa 1
at3 = Alternativa 2
at4 = Alternativa 3
at5 = Alternativa 4
at6 = Alternativa 5
at7 = Feedback geral acerto
at8 = Feedback geral erro
at9 = Feedback 1
at10 = Feedback 2
at11 = Feedback 3
at12 = Feedback 4
at13 = Feedback 5  
 */


function Questao(at1,at2,at3, at4, at5,at6,at7,at8,at9,at10,at11,at12,at13){

	this.enunciation =  at1;
	this.alternative1 = at2;
	this.alternative2 = at3;
	this.alternative3 = at4;
	this.alternative4 = at5;
	this.alternative5 = at6;
	this.correct = at7;
	this.error = at8;
	this.feedback1 = at9;
	this.feedback2 = at10;
	this.feedback3 = at11;
	this.feedback4 = at12;
	this.feedback5 = at13;
}

$("#elearningComponents-container").hide();	

 


$(document).ready(function(e) {
   


});