var escolha

function faseDois(){
    escolha = prompt("Qual sua escolha? \n 1- Bora chamar o Elfo pro bonde. \n 2- Não quero saber de Elfos no meu squad. \n Escolha 1 ou 2");
        if (escolha == 1) {
            alert("Agora vocês são um trio inseparável. Mal se conhecem, mas já se consideram pacas!");
            window.location.href = "../html/ultimaTelaLuci.html";
            return;
        } 
        
        if (escolha == 2) {
            alert("Não sei se você percebeu, mas quem manda aqui é a Bean. Se não aceitar o Elfo, quem tá fora é você!")
            window.location.href = "../html/finalRuimBean.html";
            return;
        } 

        else {
            alert("Insira uma opção válida!");
            return;
            }
        }
