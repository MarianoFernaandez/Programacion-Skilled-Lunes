function usarPocion(color){

    switch(color){
        case "rojo":
            console.log("Recuperas 50 puntos de vida")
            break;
        case "azul":
            console.log("Recuperas 30 puntos de mana")
            break
        case "verde":
            console.log("Cuidado, te dio efecto de veneno")
            break;
        default:
            console.log("ese color de pocion no esta en tu inventario")
            break;
    }
}

usarPocion("rojo");
