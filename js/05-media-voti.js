// Traccia 05 · La media dei voti
// La consegna è nel README, alla voce "05 · La media dei voti".

/*
  STEPS
  1 -
  2 -
  3 -
  4 -
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

