// Traccia 06 · Il lucchetto
// La consegna è nel README, alla voce "06 · Il lucchetto".

/*
  STEPS
  1 -chiediamo la combinazione
  2 -entriamo in un while per riprovare finche non prendiamo la password giusta
  3 -mostriamo in caso di errore combinazione sbagliata
  4 -in caso contrario un alert con lucchetto aperto
*/

// # Fase di preparazione
let combinazione = Number(prompt("Inserisci la combinazione"));

while (combinazione !== 482) {
  console.log("Combinazione sbagliata");
  combinazione = Number(prompt("Combinazione sbagliata, riprova"));
}

alert("Lucchetto aperto!");
// # Fase di raccolta dati


// # Fase di elaborazione


// # Fase di output

