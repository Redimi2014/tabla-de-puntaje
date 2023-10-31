//colocar las puntiaciones del equipo a y b en cero
let teamAScore = 0;
let teamBScore = 0;

//extraer los id de los objetos del archivo html a utilizar
let teamAScoreValue = document.getElementById("teamAScore");
let teamBScoreValue = document.getElementById("teamBScore");

//funcion para aumentar los puntos del equipo
let incrementScore = (team) => {
    if (team === "teamA") {
        teamAScore++;
        teamAScoreValue.textContent = teamAScore;
    } else if (team === "teamB") {
        teamBScore++;
        teamBScoreValue.textContent = teamBScore;
    }
};
//funcion para reducir los puntos del equipo
let decrementScore = (team) => {
    if (team === "teamA" && teamAScore > 0) {
        teamAScore--;
        teamAScoreValue.textContent = teamAScore;
    } else if (team === "teamB" && teamBScore > 0) {
        teamBScore--;
        teamBScoreValue.textContent = teamBScore;
    }
};
//funcion para reiniciar todo xD
let resetScores = () => {
    teamAScore = 0;
    teamBScore = 0;
    teamAScoreValue.textContent = teamAScore;
    teamBScoreValue.textContent = teamBScore;
};