var escolha

function faseTres(){
    escolha = prompt("O que você vai fazer agora? \n 1- Aceito a ajuda, afinal jamais vou deixar que comandem a minha vida. \n 2- Agradeço, mas nego. Prefiro viver uma vida infeliz. \n Escolha 1 ou 2");
        if (escolha == 1) {
            alert("Vocês planejam fugir juntos durante o casamento, porque gostam de uma confusão!");
            window.location.href = "fugindoBean.html";
            return;
        } 
        
        if (escolha == 2) {
            alert("Viverá eternamente infeliz por não tomar as rédeas da sua vida!")
            window.location.href = "finalRuimBean.html";
            return;
        } 

        else {
            alert("Insira uma opção válida!");
            return;
            }
        }
