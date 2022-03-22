/* Crea 10 oggetti che rappresentano una zucchina. Dividi in due array separati
le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto
pesano i due gruppi di zucchine. */

function sommaZucchine(array) {
    let somma = 0;
    for (let i = 0; i < array.length; i++) {
        somma += array[i].peso;
    }
    return somma;
}

const arrayZucchine = [

    {
        varietà: "nera",
        peso: 50,
        lunghezza: 16
    },
    {
        varietà: "romanesca",
        peso: 300,
        lunghezza: 17
    },
    {
        varietà: "fiorentina",
        peso: 90,
        lunghezza: 20
    },
    {
        varietà: "napoletana",
        peso: 450,
        lunghezza: 18
    },
    {
        varietà: "tonda",
        peso: 100,
        lunghezza: 19
    },
    {
        varietà: "trombetta",
        peso: 150,
        lunghezza: 14
    },
    {
        varietà: "Crookneck",
        peso: 340,
        lunghezza: 13
    },
    {
        varietà: "gialla",
        peso: 110,
        lunghezza: 10
    },
    {
        varietà: "pâtisson",
        peso: 250,
        lunghezza: 11
    },
    {
        varietà: "rugoso friulano",
        peso: 290,
        lunghezza: 12
    }

];

const arrayZucchineCorte = [];

const arrayZucchineLunghe = [];

for (let i = 0; i < arrayZucchine.length; i++) {

    if (arrayZucchine[i].lunghezza <= 15) {
        arrayZucchineCorte.push(arrayZucchine[i]);
    } else {
        arrayZucchineLunghe.push(arrayZucchine[i]);
    }

}

console.log(arrayZucchineCorte);
console.log(arrayZucchineLunghe);

const sommaCorte = sommaZucchine(arrayZucchineCorte);
const sommaLunghe = sommaZucchine(arrayZucchineLunghe);

console.log(`Le zucchine corte pesano in tutto ${sommaCorte} grammi`);
console.log(`Le zucchine lunghe pesano in tutto ${sommaLunghe} grammi`);