function respostaJogador(){
    escolha = prompt("Digite 1 para jogar novamente!");
        
        if (escolha == 1) {
            window.location.href = "../index.html";
            return;
        } 

        else {
            alert("Insira uma opção válida!");
            return;
            }
        }
