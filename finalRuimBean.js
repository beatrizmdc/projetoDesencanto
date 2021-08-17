function resposta(){
    escolha = prompt("Tentar novamente? \n 1-Sim \n 2-Não \n Escolha 1 ou 2");
        if (escolha == 1) {
            window.location.href = "inicioBean.html";
            return;
        } 
        
        if (escolha == 2) {
            window.location.href = "paginaInicial.html";
            return;
        } 

        else {
            alert("Insira uma opção válida!");
            return;
            }
        }