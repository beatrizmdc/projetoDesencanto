var escolha

function faseFinal(){
    escolha = prompt("Qual sua escolha? \n 1- Incentivar a pular do penhasco. \n 2- Incentivar a casar com o irmão do falecido noivo, não quero morrer. \n Escolha 1 ou 2");
        if (escolha == 1) {
            alert("Vocês cairam do precipício. Será que você tem algum poder mágico oculto para sair dessa situação?");
            window.location.href = "finalBomBean.html";
            return;
        } 
        
        if (escolha == 2) {
            alert("Bom, a sua única função na terra era ajudar a Bean a fugir do casamento. Você já não tem nenhuma utilidade!")
            window.location.href = "finalRuimBean.html";
            return;
        } 

        else {
            alert("Insira uma opção válida!");
            return;
            }
        }