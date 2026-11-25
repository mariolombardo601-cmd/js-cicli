// Traccia 03 · Il listino dei biglietti
// La consegna è nel README, alla voce "03 · Il listino dei biglietti".

/*
  STEPS
  1 -chiediamo il prezzo del biglietto in valore numerico 
  2 -in caso constrario mostrera per ogni riga nan
  3 -poi nel ciclo incrementiamo la quantita 
  4 -per ogni qunatita facciamo quantita * prezzo
*/

// # Fase di preparazione
const prezzo = Number(prompt("Quanto costa un biglietto?"));

for (let quantita = 1; quantita <= 10; quantita++) {
  console.log(`Quantità ${quantita}: ${quantita * prezzo} €`);
}
// # Fase di raccolta dati


// # Fase di elaborazione


// # Fase di output

