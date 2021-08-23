var escolha

function faseUm(){
    escolha = prompt("O que você vai fazer? \n 1- Vou me jogar no mundão. \n 2- Vou seguir com a minha vida feliz. \n Escolha 1 ou 2");
        if (escolha == 1) {
            alert("Rumo a Terra dos Sonhos!");
            window.location.href = "../html/fugindoElfo.html";
            return;
        } 
        
        if (escolha == 2) {
            alert("Boa sorte nessa sua vidinha medíocre.")
            window.location.href = "../html/finalRuimBean.html";
            return;
        } 

        else {
            alert("Insira uma opção válida!");
            return;
            }
        }
