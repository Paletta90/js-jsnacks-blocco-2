let container = document.getElementById("container");


let firstArray = [23, 10, 1000];
let secondArray = ["Torino", "Piacenza", "Bologna", "Milano", "Venezia", "Roma", "Napoli"];


// Con questa variabile so quante volte devo aggiungere un elemento per ottenere due array con le stesse quantità di elementi
let difference = Math.abs(firstArray.length - secondArray.length);

// Se hanno numero di elementi diversi faccio questo
if (difference > 0) {

    //Stabilisco quale array ha più elementi
    let max;
    if (firstArray.length > secondArray.length) {
        max = firstArray.length;
    } else if (firstArray.length < secondArray.length) {
        max = secondArray.length;
    }

    // Mando in stampa come sono i due array inizialmente
    container.innerHTML += `<h2>I due array inizialmente</h2>`
    for (i = 0; i < max; i++) {
        container.innerHTML += `<div>-${i + 1}: Primo array = ${firstArray[i]}  / Secondo Array = ${secondArray[i]}</div> `
    }

    // Aggiungk gli elementi all'array che ne ha di meno
    for (i = 0; i < difference; i++) {

        if (firstArray.length < secondArray.length) {
            firstArray.push(prompt("Aggiungo al primo array:"));
        } else if (firstArray.length > secondArray.length) {
            secondArray.push(prompt("Aggiungo al secondo array:"));
        }

    }

    // Mando in stampa come sono i due array successivamente all'aggiunta
    container.innerHTML += `<h2>Array dopo aver aggiunto ${difference} elementi</h2>`
    for (i = 0; i < firstArray.length; i++) {
        container.innerHTML += `<div>-${i + 1}: Primo array = ${firstArray[i]}  / Secondo Array = ${secondArray[i]}</div> `
    }

}else{
    alert("I due array hanno lo stesso numero di elementi");

    // Mando in stampa come sono i due array inizialmente
    container.innerHTML += `<h2>I due array</h2>`
    for (i = 0; i < firstArray.length; i++) {
        container.innerHTML += `<div>-${i + 1}: Primo array = ${firstArray[i]}  / Secondo Array = ${secondArray[i]}</div> `
    }
}