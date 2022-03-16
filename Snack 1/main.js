let container = document.getElementById("container");

let x = Number(prompt("Inserisci un numero"));

if(!isNaN(x) && x > 0){

    if(x % 2 == 0){
        container.innerHTML = `Numero inserito pari: ${x}`;
    }else{
        container.innerHTML = `Numero successivo a quello pari inserito: ${x + 1} `;
    }
    
}else{
    alert("Non hai inserito un numero corretto");
    location.reload();
}