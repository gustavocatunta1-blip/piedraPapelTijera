let jugador = 0
let pc = 0

let triunfos = 0
let perdidas = 0


function aleatorio(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min)

}


function eleccion(jugada) {

    let resultado = ""

    if (jugada == 1) {

        resultado = "piedra 🪨"

    } else if (jugada == 2) {

        resultado = "papel 📄"

    } else if (jugada == 3) {

        resultado = "tijera ✂️"

    } else {

        resultado = "mal elegido"

    }

    return resultado
}


let botonPiedra = document.getElementById("boton-piedra")
let botonPapel = document.getElementById("boton-papel")
let botonTijera = document.getElementById("boton-tijera")
let botonReiniciar = document.getElementById("reiniciar")


botonPiedra.addEventListener("click", function() {

    jugar(1)

})


botonPapel.addEventListener("click", function() {

    jugar(2)

})


botonTijera.addEventListener("click", function() {

    jugar(3)

})


function jugar(eleccionJugador) {

    jugador = eleccionJugador

    pc = aleatorio(1, 3)


    document.getElementById("jugador").innerHTML =
        "Tu elección: " + eleccion(jugador)


    document.getElementById("pc").innerHTML =
        "PC: " + eleccion(pc)


    if (jugador == pc) {

        document.getElementById("mensaje").innerHTML =
            "🤝 Empate"

    } else if (jugador == 1 && pc == 3) {

        document.getElementById("mensaje").innerHTML =
            "🎉 Ganaste"

        triunfos = triunfos + 1

    } else if (jugador == 2 && pc == 1) {

        document.getElementById("mensaje").innerHTML =
            "🎉 Ganaste"

        triunfos = triunfos + 1

    } else if (jugador == 3 && pc == 2) {

        document.getElementById("mensaje").innerHTML =
            "🎉 Ganaste"

        triunfos = triunfos + 1

    } else {

        document.getElementById("mensaje").innerHTML =
            "😢 Perdiste"

        perdidas = perdidas + 1

    }


    document.getElementById("triunfos").innerHTML =
        triunfos

    document.getElementById("perdidas").innerHTML =
        perdidas


    comprobarGanador()
}


function comprobarGanador() {

    if (triunfos == 3) {

        document.getElementById("mensaje").innerHTML =
            "🏆 ¡Ganaste el juego!"

        desactivarBotones()

    }


    if (perdidas == 3) {

        document.getElementById("mensaje").innerHTML =
            "💀 Perdiste el juego"

        desactivarBotones()

    }

}


function desactivarBotones() {

    botonPiedra.disabled = true
    botonPapel.disabled = true
    botonTijera.disabled = true

}


botonReiniciar.addEventListener("click", reiniciar)


function reiniciar() {

    triunfos = 0
    perdidas = 0

    document.getElementById("triunfos").innerHTML =
        triunfos

    document.getElementById("perdidas").innerHTML =
        perdidas

    document.getElementById("jugador").innerHTML =
        "Tu elección: -"

    document.getElementById("pc").innerHTML =
        "PC: -"

    document.getElementById("mensaje").innerHTML =
        "¡Elige una opción!"

    botonPiedra.disabled = false
    botonPapel.disabled = false
    botonTijera.disabled = false

}