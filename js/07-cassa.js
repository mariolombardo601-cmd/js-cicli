// Traccia 07 · La cassa del supermercato
// La consegna è nel README, alla voce "07 · La cassa del supermercato".

/*
  STEPS
  1 -creiamo le tre variabii che useremo nel while 
  2 -faciamo un controllo per ogni valore inserite facendo si che sia un numero 
  3 -incrementiamo le nostre variabili poer ogni ciclo e usciamo con 0
  4 -mostraimo con un alter i valori
*/

// # Fase di preparazione
let i = 0;
let totale = 0;
let prezzoProdotti = Number(prompt("Dimmi il prezzo dei prodotti (0 per uscire)"));

// Fase di raccolta dati
while (prezzoProdotti !== 0) {
  if (!isNaN(prezzoProdotti)) {
    i++;
    totale = totale + prezzoProdotti;
  }
  prezzoProdotti = Number(prompt("Dimmi il prezzo del prossimo prodotto (0 per uscire)"));
}

alert(`prodotti: ${i} · totale: ${totale} €`);

// # Fase di elaborazione


// # Fase di output

