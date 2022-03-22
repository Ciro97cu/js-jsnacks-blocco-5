/* Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC) */

function reverse(word) {
    let reverseWord = "";
    for (let i = word.length - 1; i >= 0; i--) {

        reverseWord += word[i];

    }
    return reverseWord;
}

let requestUser = prompt("Inserisci una parola");

const wordToInvert = reverse(requestUser);

console.log(wordToInvert);