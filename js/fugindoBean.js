var escolha

function faseQuatro(){
    escolha = prompt("O que você vai fazer agora? \n 1- Fugimos juntos, afinal ele é um Elfo muito fofo. \n 2- Largo ele pra trás, não gosto de Elfos. \n Escolha 1 ou 2");
        if (escolha == 1) {
            alert("Vocês fogem rumo à lugar nenhum, mas pelo menos têm companhia.");
            window.location.href = "../html/ultimaTelaBean.html";
            return;
        } 
        
        if (escolha == 2) {
            alert("O karma chegou a você mais rápido do que pensava! Por não gostar de Elfos, assim que o deixou pra trás, foi capturada pelos cavaleiros do reino.")
            window.location.href = "../html/finalRuimBean.html";
            return;
        } 

        else {
            alert("Insira uma opção válida!");
            return;
            }
        }
