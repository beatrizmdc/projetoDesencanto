var escolha

function faseDois(){
    escolha = prompt("O que você vai fazer? \n 1- Me esconder debaixo do vestido da princesa \n 2- Aceitar o destino (que, no caso, é a morte) \n Escolha 1 ou 2");
        if (escolha == 1) {
            alert("Boa escolha, após cair da janela junto com a princesa, você agora está junto com ela nessa fuga!");
            window.location.href = "../html/ultimaTelaElfo.html";
            return;
        } 
        
        if (escolha == 2) {
            alert("Nadou, nadou, para morrer na praia? Era melhor ter continuado a ser um Elfo feliz.")
            window.location.href = "../html/finalRuimBean.html";
            return;
        } 

        else {
            alert("Insira uma opção válida!");
            return;
            }
        }
