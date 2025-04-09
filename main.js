function colorirDia(){
    //pegar valor de campo de dia
    let days = document.getElementById('Days').value;

    //Pega o valor do campo de cor
    let color = document.getElementById('Color').value;
    
    //pega os elementos da tabela calendário
    let calendar = document.getElementById('calendar');

    //verifica se o campo de dia foi preenchido
    if(!days){
        alert('Favor informar o dia');
    } else if ((days>0)&&(days<31)){
        //se o número de dias está no intervalo
        //aplicará a cor na célula do calendário
        let td = calendar.getElementsByTagName('td');
        td.style.backgroundColor = color;
    } else {
        alert("Favor informar um dia do mês");
    }

    // Guardar a célula da tabela
    let elementos = document.querySelectorAll('td');

    // Declara e inicializa contadores
    let contadorAzul = 0, contadorVerde = 0, contadorRosa = 0, contadorRoxo = 0;

    // Loop para verificar o estilo de cada célula e contar quantas tem cor e qual cor
    for (let i = 0; elementos.length; i++){
    //obtém o estilo computado do elemento atual
    var estilo = window.getComputedStyle(elementos[i]);
    }

    // Obtém a cor de fundo atual de célula
    var corEstilo = estilo.backgroundColor;

    // Verifica a cor e incrementa contador correspondente
    if(corEstilo === "rgb(173, 216, 230)" ||
    corEstilo === "lightBlue"){
    } else if (corEstilo === "rgb(152, 215, 152)" || corEstilo === "palegreen"){
        contadorVerde++;
    } else if (corEstilo === "rgb(255, 182, 193)" || corEstilo === "ligthPink"){
        contadorRosa++;
    }
    }
 
}