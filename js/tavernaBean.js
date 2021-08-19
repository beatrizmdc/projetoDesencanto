var escolha

function faseDois(){
    escolha = prompt("O que você vai fazer agora? \n 1- Fujo pelos fundos do bar, eles que lutem. \n 2- Participo da briga, só se vive uma vez. \n Escolha 1 ou 2");
        if (escolha == 1) {
            alert("Você escapou da briga, mas deu de cara com o capanga do Rei que, imeditadamente, te leva de volta para casa.");
            window.location.href = "casteloBean.html";
            return;
        } 
        
        if (escolha == 2) {
            alert("Você levou uma surra! Onde é que você estava com a cabeça?")
            window.location.href = "finalRuimBean.html";
            return;
        } 

        else {
            alert("Insira uma opção válida!");
            return;
            }
        }
