// Bonus 2 · Troppo alto, troppo basso
// La consegna è nel README, alla voce "Bonus 2 · Troppo alto, troppo basso".

/*
  STEPS
  1 -inseriamo la variante math.random
  2 -e ci facciamo dare un numero
  3 -sulla base del numero casuale indoviniamo e in base al numero che diamo mettiamo 
  se e troppo alto o troppo basso
  4 -in fine mostriamo il numero dei tentativi
*/

// # Fase di preparazione
const n = Math.floor(Math.random() * 100) + 1;
console.log(n); // solo per provare: toglila quando funziona

let tentativi = 0;
let scelta = 0;

while (scelta !== n) {
  scelta = Number(prompt("Indovina il numero da 1 a 100"));
  tentativi++;

  if (isNaN(scelta) || scelta < 1 || scelta > 100) {
    console.log("Scrivi un numero da 1 a 100");
  } else if (scelta > n) {
    console.log("Troppo alto");
  } else if (scelta < n) {
    console.log("Troppo basso");
  }
}

alert(`Indovinato in ${tentativi} tentativi!`);

// # Fase di raccolta dati


// # Fase di elaborazione


// # Fase di output

