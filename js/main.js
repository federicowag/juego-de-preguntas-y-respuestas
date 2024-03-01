const preguntas = ("¿Cómo se llaman los animales que solo se alimentan de vegetales y plantas?", "¿Cuántos minutos tiene una hora?", "¿Cómo se llama quien cuenta la historia en un cuento?");
const respuestas = ("herbivoros", "60", "narrador");

function jugarJuego() {
    const preguntaUsuario = Math.floor(Math.random() * preguntas.length);
    const respuestaCorrecta = respuestas(preguntaUsuario);

    const respuestaUsuario = prompt(preguntas[preguntaUsuario]);

    if (respuestaUsuario !== null && respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
        console.log("¡Correcto!");
    } else if (respuestaUsuario !== null) {
        console.log("Incorrecto. La respuesta correcta es: " + respuestaCorrecta);
    } else {
        console.log("Juego cancelado, lamentamos que te vayas pronto");
    }

    const jugarDeNuevo = confirm("¿Quieres jugar de nuevo?");

    if (jugarDeNuevo) {
        jugarJuego(); 
    } else {
        console.log("Gracias por jugar. ¡Hasta luego!");
    }
}

jugarJuego();

