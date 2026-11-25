// Traccia 02 · L'ascensore
// La consegna è nel README, alla voce "02 · L'ascensore".

/*
  STEPS
  1 -inseriasmo le costanti e trasformiamo la risposta in valore numerico
  2 -evitiamo tutti i casi in cui l'utente non ci da un valore che vogliamo
  3 -poi mostriamo in console ongi piano che raggiungiamo
  4 -dopo con un alert il piano dove volevamo arrivare 
*/

// # Fase di preparazione
const risposta = prompt("A che piano vuoi andare?");
const piano = Number(risposta);

if (risposta === null || risposta.trim() === "" || !Number.isInteger(piano) || piano < 0) {
  alert("Piano non valido");
} else {
  let i = 0;
  for (let i = 0; i <= piano; i++) {
    console.log(`Piano ${i}`);
  }
  alert(`Sei arrivato al piano ${piano}`);
}
// # Fase di raccolta dati


// # Fase di elaborazione


// # Fase di output

