// Traccia 05 · La media dei voti
// La consegna è nel README, alla voce "05 · La media dei voti".

/*
  STEPS
  1 -chiedo il numero di voti
  2 -faccio un controllo sui voti
  3 -chiedo tutti i numeri singolarmente 
  4 -faccio la media e la mostro fuori dal ciclo
*/

// # Fase di preparazione
const numeroVoti = Number(prompt("Quanti voti hai preso?"));

if (isNaN(numeroVoti) || numeroVoti < 1) {
  alert("Nessun voto da calcolare");
} else {
  let totale = 0;

  for (let i = 1; i <= numeroVoti; i++) {
    const voto = Number(prompt(`Voto ${i} di ${numeroVoti}`));
    totale += voto;
  }

  const media = totale / numeroVoti;
  alert(`Media: ${media.toFixed(1)}`);
}
// # Fase di raccolta dati


// # Fase di elaborazione


// # Fase di output

