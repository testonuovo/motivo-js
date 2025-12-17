/* ===============================
   Motivo.js v1.1
   Libreria motivazionale semplice
   Autore: tu
   =============================== */

const Motivo = (function () {

  /* MESSAGGI */
  const messaggi = [
    "Non ti arrendere",
    "Credi in te stesso",
    "Il tuo valore non dipende dagli altri",
    "Anche oggi resisti",
    "Sei più forte di quanto pensi",
    "Quando tutto sembra finito, è lì che inizi davvero",
    "Rimani autentico",
    "Il silenzio è forza",
    "Abbi fede e continua"
  ];

  /* MESSAGGIO CASUALE */
  function messaggioRandom() {
    return messaggi[Math.floor(Math.random() * messaggi.length)];
  }

  /* DATA E ORA */
  function dataOra() {
    const t= new Date();
    return t.toLocaleDateString("it-IT") + " " +
           t.toLocaleTimeString("it-IT");
  }

  /* MOSTRA MESSAGGIO */
  function mostra(idMessaggio, idOrario) {
    const elMsg = document.getElementById(idMessaggio);
    const elTime = document.getElementById(idOrario);

    if (!elMsg) {
      console.error("Motivo.js: elemento messaggio non trovato");
      return;
    }

    elMsg.textContent = messaggioRandom();

    if (elTime) {
      elTime.textContent = dataOra();
    }
  }

  /* AGGIORNA ORARIO OGNI SECONDO */
  function avviaOrologio(idOrario) {
    const el = document.getElementById(idOrario);
    if (!el) return;

    setInterval(() => {
      el.textContent = dataOra();
    }, 1000);
  }

  /* API PUBBLICA */
  return {
    mostra,
    avviaOrologio,
    versione: "1.1"
  };

})();
