var escolha

function faseCinco(){
    escolha = prompt("Qual sua última escolha? \n 1- Que se dane, vou pular. \n 2- Aceito me casar com o irmão de meu falecido noivo. \n Escolha 1 ou 2");
        if (escolha == 1) {
            alert("Bom, você caiu do precipício. Talvez Luci ou Elfo tenham algum poder mágico para te ajudarem a sair dessa...");
            window.location.href = "../html/finalBomBean.html";
            return;
        } 
        
        if (escolha == 2) {
            alert("Você não caiu do precipício, mas era uma escolha melhor do que se casar com o irmão do seu falecido noivo. Que insensível da sua parte!")
            window.location.href = "../html/finalRuimBean.html";
            return;
        } 

        else {
            alert("Insira uma opção válida!");
            return;
            }
        }

