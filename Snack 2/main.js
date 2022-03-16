let container = document.getElementById("container");

let nomi = ["Davide", "Marco", "Paolo", "Andrea", "Simone"];
let cognomi = ["Di Pietro", "Fracassa", "Zinilli", "Salvatorelli", "Di lorenzo", "Gambacorta"];
let nomeCognome;

// Quantità nomi da generare
let num = Number(prompt("Digitare quanti nomi casuali si vogliono generare"));

if (!isNaN(num) && num > 0) {

    for (i = 0; i < num; i++) {

        // Numeri casuali che vanno da 0 all'ultimo indice dell'array
        let x = Math.floor(Math.random() * (nomi.length));
        let y = Math.floor(Math.random() * (cognomi.length));

        nomeCognome = String(nomi[x] + " " + cognomi[y]);

        container.innerHTML += `<div>- ${i + 1}: ${nomeCognome}</div>`
    }

}else{
    alert("Inserire un numero valido!");
    location.reload();
}