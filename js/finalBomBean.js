var escolha

function faseFinal(){
    escolha = prompt("Digite 1 para voltar");
        if (escolha == 1) {
            window.location.href = "../index.html";
            return;
        } 
        else {
            alert("Insira uma opção válida!");
            return;
            }
        }
