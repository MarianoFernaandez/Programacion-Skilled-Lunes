/* 

for(inicio; condicion; cambio){
    CODIGO A REPETIR
}

*/


for (let i = 1; i <= 7; i++){

    let edad = prompt("Que edad tenes?")

    if(edad % 2 === 0){
        console.log("Numero par: " + edad)
    }
    else {
        console.log("Numero impar: " + edad);
    }
}
