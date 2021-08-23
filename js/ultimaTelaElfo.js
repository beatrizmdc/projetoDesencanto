var escolha

function faseFinal(){
    escolha = prompt("O que você vai fazer? \n 1- Convencer a princesa a se jogar do abismo junto com você e Luci, afinal Luci é um demônio, provavalmente tem algum poder mágico. \n 2- Dizer para Bean se render e casar-se com o irmão de seu falecido noivo. \n Escolha 1 ou 2");
        if (escolha == 1) {
            alert("Vocês cairam do precipício... agora só rezando (ou não) para que o Luci tenha poderes.");
            window.location.href = "../html/finalBomBean.html";
            return;
        } 
        
        if (escolha == 2) {
            alert("Bom, Bean pode até ter escapado da morte, mas você não. Você é levado para o Rei em troca de dinheiro.")
            window.location.href = "../html/finalRuimBean.html";
            return;
        } 

        else {
            alert("Insira uma opção válida!");
            return;
            }
        }
