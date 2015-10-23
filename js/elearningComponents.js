var questions = []; 
var ids = 0;

// Função que cria questão


// Definicão de uma questão 


function Questao(id,at0,at1,at2,at3, at4, at5,at6,at7,at8,at9,at10,at11,at12,at13){
    this.id =  id;
	this.correctAlternative = at0;
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



// Renderiza questão na tela
function questionsRender(){
	
	for (var i=0; i<questions.length; i++){
		
		$("#elearningComponents-container").append('<form class="questions" id="questionNumber'+i +'">');
		$("#elearningComponents-container").append(questions[i].enunciation);
		$("#elearningComponents-container").append("<br>");
		$("#elearningComponents-container").append("<br>");
		
		$("#elearningComponents-container").append('<input type="radio" value="1" name="questionNumber'+i +'">');
		$("#elearningComponents-container").append(questions[i].alternative1);
		$("#elearningComponents-container").append("<br>");
		
		$("#elearningComponents-container").append('<input type="radio" value="2" name="questionNumber'+i +'">');
		$("#elearningComponents-container").append(questions[i].alternative2);
		$("#elearningComponents-container").append("<br>");
		
		$("#elearningComponents-container").append('<input type="radio"  value="3" name="questionNumber'+i +'">');
		$("#elearningComponents-container").append(questions[i].alternative3);
		$("#elearningComponents-container").append("<br>");
		
		$("#elearningComponents-container").append('<input type="radio" value="4" name="questionNumber'+i +'">');
		$("#elearningComponents-container").append(questions[i].alternative4);
		$("#elearningComponents-container").append("<br>");
		
		$("#elearningComponents-container").append('<input type="radio"  value="5" name="questionNumber'+i +'">');
		$("#elearningComponents-container").append(questions[i].alternative5);		
		$("#elearningComponents-container").append("</form>");
		$("#elearningComponents-container").append("<br>");
		$("#elearningComponents-container").append("<br>");
		$("#elearningComponents-container").append('<button onclick="verificaResposta('+i+')">Verficar</button>');
		
	}
	
}

 


$(document).ready(function(e) {
	
var questao1 = new Questao(1,4,"Qual é o nome do meu cachorro ?","paulo","andre","pedro","teste","teste");
questions.push(questao1);
questionsRender();

});


// Verifica se resposta está correta
function verificaResposta(i){
	
	var resposta = $("input[name='questionNumber0']:checked").val();
	
	if(resposta==questions[i].correctAlternative){
		
		//Colocar aqui a ação para a resposta correta
		console.log('respostaCerta');
		
		}
	
}



