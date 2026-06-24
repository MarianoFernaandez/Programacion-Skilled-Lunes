

/*

EJERCICIOS IF

1) Crear una variable llamada temperatura
    Si la temperatura es mayor a 30, mostrar "Hace mucho calor"
    Si no, mostrar "La temperatura es agradable"

2) Crea una variable llamada nota.
    Si la nota es mayor o igual a 6, mostrar "Aprobado"
    Si es menor a 6, mostrar "Desaprobado".

EJERCICIOS WHILE

1) Mostrar los múltiplos de 3 hasta 30
    Crear una variable que empiece en 3 y mostrar todos los números que sean múltiplos de 3 hasta llegar a 30.

2) Sumar números hasta llegar a 100
    Crear una variable numero que empiece en 1 y otra variable suma que empiece en 0.
    El programa debe ir sumando los números hasta que la suma sea mayor o igual a 100.

//IF + WHILE

1) Mostrar los números del 1 al 10, pero indicar si son pares o impares.

2) Simular 3 intentos para ingresar una contraseña.

*/

//IF + WHILE EJERCICIO 1

/*
let numeroEjercicio = 1;

while (numeroEjercicio <= 10){

    if (numeroEjercicio % 2 === 0){
        console.log(numeroEjercicio + " es par");
    }
    if (numeroEjercicio % 2 !== 0){
        console.log(numeroEjercicio + " es impar");
    }
        
    numeroEjercicio ++
}

 */

/* 

do {

    confirm("Te gusta JavaScript?")

} while (condicion)

*/

/* 

//DO WHILE Y CONFIRM

let respuesta;

do {
    respuesta = confirm("Te gusta JavaScript?");
} while (!respuesta)

*/

//CONTINUE

/* 
let cuentaAtras = 10;

while (cuentaAtras > 0){
    cuentaAtras = cuentaAtras - 1;

    if (cuentaAtras % 2 === 0){
        continue
    }

    console.log(cuentaAtras);
}

*/

//BREAK 

/* 
let cuentaAtras = 10;

while (cuentaAtras > 0){
    cuentaAtras = cuentaAtras - 1;

    console.log(cuentaAtras);
    
    if (cuentaAtras === 5){
        break
    }

    
}

*/

































let numero = 1;

let suma = 0;

while(suma < 100){
    suma = suma + numero;
    console.log("Numero:", numero);
    console.log("Suma Actual", suma);

    numero = numero + 1;
}

console.log("La suma final es: ", suma);
