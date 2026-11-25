// Bonus 1 · L'ascensore con while
// La consegna è nel README, alla voce "Bonus 1 · L'ascensore con while".

/*
  STEPS
  1 -modifico mettendo il while
  2 -creo la variabile
  3 -do una condizione al while
  4 -incremento all'interno del while
*/

// # Fase di preparazione
const risposta = prompt("A che piano vuoi andare?");
const piano = Number(risposta);

if (risposta === null || risposta.trim() === "" || !Number.isInteger(piano) || piano < 0) {
  alert("Piano non valido");
} else {
  let i = 0;
  while (i <= piano) {
    console.log(`Piano ${i}`);
    i++;
  }
  alert(`Sei arrivato al piano ${piano}`);
}
// # Fase di raccolta dati


// # Fase di elaborazione


// # Fase di output

