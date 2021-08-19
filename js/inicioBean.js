var escolha

function faseUm(){
    escolha = prompt("O que você vai fazer agora? \n 1- Vou ao bar encher a cara \n 2-Vou me arrumar para a droga do casamento \n Escolha 1 ou 2");
        if (escolha == 1) {
            alert("Esse é o espírito! Bora pra Taverna!");
            window.location.href = "tavernaBean.html";
            return;
        } 
        
        if (escolha == 2) {
            alert("Você viverá um destino escolhido pelos outros e nunca mais será feliz!")
            window.location.href = "finalRuimBean.html";
            return;
        } 

        else {
            alert("Insira uma opção válida!");
            return;
            }
        }
