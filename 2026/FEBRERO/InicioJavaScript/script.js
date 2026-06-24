//Cambiar texto con JavaScript

//Seleccionamos el titulo
const titulo = document.getElementById("titulo");

//Cambiamos el nombre
titulo.textContent = "Bienvenidos Programadores";

//Muestra en consola el boton

const boton = document.getElementById("boton");
console.log(boton);

//Nos muestra en consola si hicimos click y cuantas veces

boton.addEventListener("click", function(){
    console.log("hiciste click");
});

//Cambiar a modo oscuro

boton.addEventListener("click", function(){
    document.body.style.backgroundColor = "black";
});

//Funcion Oscuro/Claro

let oscuro = false;

boton.addEventListener("click", function(){

    if(oscuro == false){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "black";
        boton.textContent = "Modo Claro"; //Cambia el nombre del boton dependiento del modo

        oscuro = true;
    } else {
        document.body.style.backgroundColor = "white";
        boton.textContent = "Modo Oscuro"; //Cambia el nombre del boton dependiendo del modo
        
        oscuro = false;
    }
});











