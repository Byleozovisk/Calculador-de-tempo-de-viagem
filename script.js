function calcularTempo() {

    let distancia = document.getElementById("Distancia").value;
    let velocidade = document.getElementById("Velocidade").value;

    if (!isNaN(distancia) && !isNaN(velocidade)) {

        let tempo_de_chegada = distancia / velocidade;
        let horas = Math.floor(tempo_de_chegada);
        let minutos = Math.floor((tempo_de_chegada - horas) * 60);

        alert("O tempo estimado de viagem é " + horas + " horas e " + minutos + " minutos.");

    } else {

        alert("Caractere inválido, favor digitar um número.");

    }
}