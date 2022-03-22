/* Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna
varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine. */

const zucchina = [

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
        lunghezza: 17
    },
    {
        varietà: "napoletana",
        peso: 450,
        lunghezza: 18
    },
    {
        varietà: "tonda",
        peso: 100,
        lunghezza: 18
    },
    {
        varietà: "trombetta",
        peso: 150,
        lunghezza: 15
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

]

let pesoTot = 0;

for (let i = 0; i < zucchina.length; i++) {
    pesoTot += zucchina[i].peso;
}

console.log(`Tutte le zucchine pesano ${pesoTot} grammi`)
console.log(`Tutte le zucchine pesano ${pesoTot / 1000} Kilogrammi`)