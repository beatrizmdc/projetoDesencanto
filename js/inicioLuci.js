var escolha

function faseUm(){
    escolha = prompt("Qual sua escolha? \n 1- Vou ajudar essa coitada, porque de pobre não tem nada. \n 2- Ela que lute, não tenho nada a ver com isso. \n Escolha 1 ou 2");
        if (escolha == 1) {
            alert("Vocês planejam uma fuga no meio do casamento, porque são afrontosos.");
            window.location.href = "fugindoLuci.html";
            return;
        } 
        
        if (escolha == 2) {
            alert("Você só tem uma função no mundo e ainda se recusa a fazê-la? Provavelmente você precisa bater um papinho com o verdadeiro dono do inferno...")
            window.location.href = "finalRuimBean.html";
            return;
        } 

        else {
            alert("Insira uma opção válida!");
            return;
            }
        }