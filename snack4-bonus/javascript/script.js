/* Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi)
prendendo alternativamente gli elementi da uno e dall’altro,
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

const firstArray = ["a", "b", "c", "d", "e"];

const secondArray = [1, 2, 3, 4, 5];

function joinArray(first, second) {

    const newArray = [];

    for (let i = 0; i < first.length; i++) {

        newArray.push(first[i]);
        newArray.push(second[i]);

    }
    return newArray;

}

const joinedArray = joinArray(firstArray, secondArray);

console.log(joinedArray);