const button = document.querySelector("#buttonPodium");

const namePlayer1 = document.querySelector("#player1");
const scorePlayer1 = document.querySelector("#points1 span");

const namePlayer2 = document.querySelector("#player2");
const scorePlayer2 = document.querySelector("#points2 span");

const namePlayer3 = document.querySelector("#player3");
const scorePlayer3 = document.querySelector("#points3 span");

button.addEventListener("click", async function () {
    const ranking = await fetch("https://score-word-of-the-dat.onrender.com/scores");
    const rankingNames = await ranking.json();

    console.log("Que muestra", rankingNames);

    namePlayer1.textContent = rankingNames[0].nombre;
    scorePlayer1.textContent = rankingNames[0].puntos;

    namePlayer2.textContent = rankingNames[1].nombre;
    scorePlayer2.textContent = rankingNames[1].puntos;

    namePlayer3.textContent = rankingNames[2].nombre;
    scorePlayer3.textContent = rankingNames[2].puntos;

});
