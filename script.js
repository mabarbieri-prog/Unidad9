let victoriasUsuario = 0;
let victoriasMaquina = 0;

while (victoriasUsuario < 3 && victoriasMaquina < 3) {

  let jugada = prompt("Elige: Piedra, Papel o Tijera");
  jugada = jugada.toLowerCase();

  let azar = Math.random();
  let jugadaMaquina = "";

  if (azar < 0.33) {
    jugadaMaquina = "piedra";
  } else if (azar < 0.66) {
    jugadaMaquina = "papel";
  } else {
    jugadaMaquina = "tijera";
  }

  console.log(`La máquina eligió: ${jugadaMaquina}`);

  let resultadoRonda = "";

  if (jugada === jugadaMaquina) {
    console.log("Empate");
    resultadoRonda = "¡Empate en esta ronda!";
  } else if (
    (jugada === "piedra" && jugadaMaquina === "tijera") ||
    (jugada === "papel" && jugadaMaquina === "piedra") ||
    (jugada === "tijera" && jugadaMaquina === "papel")
  ) {
    victoriasUsuario++;
    resultadoRonda = "¡Ganaste esta ronda!";
  } else {
    victoriasMaquina++;
    resultadoRonda = "La máquina ganó esta ronda";
  }

  alert(resultadoRonda);
  alert(`Marcador: Usuario ${victoriasUsuario} - Máquina ${victoriasMaquina}`);
}

if (victoriasUsuario === 3) {
  console.log("¡Ganaste el torneo!");
  alert("¡Ganaste el torneo!");
} else {
  console.log("La máquina ganó el torneo");
  alert("La máquina ganó el torneo");
}