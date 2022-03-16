let container = document.getElementById("container");

let array = [2, 45, 90, 67, 90, 4, 2, 4, 5, 6, 12, 4];
let somma = 0;

container.innerHTML += `<h2>Array completo</h2>`
for(i = 0; i < array.length; i++){
    container.innerHTML += `<div>Pos ${i}: ${array[i]}</div>`;
}

for(i = 1; i < array.length; i += 2){
    somma += array[i];

}


container.innerHTML += `<h2>Somma numeri in posizione dispari: ${somma}</h2>`;