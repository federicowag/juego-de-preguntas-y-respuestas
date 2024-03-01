const preguntas = ["¿Cómo se llaman los animales que solo se alimentan de vegetales y plantas?", "¿Cuántos minutos tiene una hora?", "¿Cómo se llama quien cuenta la historia en un cuento?"];
const respuestas = ["herbivoros", "60", "narrador"];

function jugarJuego() {
    const preguntaUsuario = Math.floor(Math.random() * preguntas.length);
    const respuestaCorrecta = respuestas[preguntaUsuario];

    const respuestaUsuario = prompt(preguntas[preguntaUsuario]);

    if (respuestaUsuario !== null) {
        if (respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
            console.log("¡Correcto!");
        } else {
            console.log("Incorrecto. La respuesta correcta es: " + respuestaCorrecta);
        }
    } else {
        console.log("Juego cancelado, lamentamos que te vayas pronto");
        return; // Terminar la ejecución del juego si el usuario cancela
    }

    const jugarDeNuevo = confirm("¿Quieres jugar de nuevo?");

    if (jugarDeNuevo) {
        jugarJuego(); 
    } else {
        console.log("Gracias por jugar. ¡Hasta luego!");
    }
}

jugarJuego();


