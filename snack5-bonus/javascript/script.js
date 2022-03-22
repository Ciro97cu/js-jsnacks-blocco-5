/* Scrivi una funzione che accetti tre argomenti: un array e due numeri 
(“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b” */

function myFunction(array, num1, num2) {

    const newArray = [];
    for (let i = num1; i < num2 - 1; i++) {
        newArray.push(array[i]);
    }
    return newArray;

}

const myArray = ["i", "t", "a", "l", "i", "a", "n"];
const myNum = 2;
const myNum2 = 7;

const displayArray = myFunction(myArray, myNum, myNum2);
console.log(displayArray);