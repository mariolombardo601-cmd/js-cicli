// Traccia 08 · La password in 3 tentativi
// La consegna è nel README, alla voce "08 · La password in 3 tentativi".

/*
  STEPS
  1 -definiamo le variabili
  2 -mettiamo un while a due condizioni 
  3 -mettiamo un massimo di errori senno un messaggio di benvenuto
  4 -
*/

// # Fase di preparazione
let password = "";
let tentativi = 3;

while (password !== "segreta26" && tentativi > 0) {
  password = prompt("Per entrare inserisci la password");
  tentativi--;

  if (password !== "segreta26") {
    console.log(`Password errata. Tentativi rimasti: ${tentativi}`);
  }
}

if (password === "segreta26") {
  alert("Benvenuto");
} else {
  alert("Bloccato");
}
// # Fase di raccolta dati


// # Fase di elaborazione


// # Fase di output

