/*

//Construyendo una función

function iniciarReceta(){
    alert("Receta iniciada")
}

// Llamar función

iniciarReceta();

//Función con variable

function nuevaReceta(ingrediente){ //Esta funcion siempre va a esperar una variable
    alert("La nueva receta utiliza un ingrediente llamado " + ingrediente + " que nos va a encantar")
}

//Hacemos la creacion de las variables que vamos a utilizar (solo podemos elegir una)

let ingrediente1 = "chocolate"

let ingrediente2 = "Merengue"

//Llamamos a la funcion con la variable que queremos que obtenga

nuevaReceta(ingrediente1);

nuevaReceta(ingrediente2);

 */

function iniciarCuentaRegresiva(segundos){
    alert("Atencion!! Iniciando la cuenta regresiva...")

    for (let i = segundos; i > 0; i--){
        alert("Faltan " + i + " segundos...")
    }

    alert("¡DESPEGUE!")
}

iniciarCuentaRegresiva(5);
