/*
### Esercizio 1: Sintassi JSON

Dato il seguente oggetto in JavaScript, convertilo in una stringa JSON.
*/
/*
const utente = {
    nome: "Alice",
    eta: 25,
    hobby: ["leggere", "giocare ai videogiochi", "fare escursioni"],
    indirizzo: {
        via: "123 Via degli Aceri",
        citta: "Paese delle Meraviglie"
    }
};
console.log(JSON.stringify(utente));
*/
/*
### Esercizio 2: Analisi di JSON

Converti la seguente stringa JSON in un oggetto JavaScript
 e registra l'`email` e l'`id` nella console.
'{"id": 1, "nome": "John Doe", "email": "john.doe@example.com"}'
*/

const stringa = '{"id": 1, "nome": "John Doe", "email": "john.doe@example.com"}';
const oggetto = JSON.parse(stringa);

console.log(oggetto.email, oggetto.id);