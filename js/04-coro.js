// Traccia 04 · Il coro dello stadio
// La consegna è nel README, alla voce "04 · Il coro dello stadio".

/*
  STEPS
  1 -chiediamo la parola e le ripetizioni 
  2 -creiamo una variabile coro che si aggiorni insieme al ciclo
  3 -creiamo il ciclo 
  4 -mostriamo sia nella console che nell'alert
*/


const parola = prompt(`dimmi una parola da far cantare al coro`);
const ripetizioni = Number(prompt(`quante volte la devono ripetere`));
// # Fase di raccolta dati
let coro = "";

for (let i = 1; i <= ripetizioni; i++) {
  console.log(` ${i} · ${parola} `);
  coro += `${parola} `;
}
alert(coro);



// # Fase di elaborazione


// # Fase di output

