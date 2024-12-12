import { Pregunta, Respuesta } from './class/clases.js';

// Función para barajar un array usando el algoritmo de Fisher-Yates
function barajarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let preguntas = [];
let contador = 0;

function mostrarPregunta() {
    if (contador >= preguntas.length) {
        console.error('No hay más preguntas disponibles.');
        return;
    }

    // Crear un nuevo elemento <p>
    const nuevoParrafo = document.createElement("p");
    const contenedor = document.querySelector(".container");
    // Vaciar el contenido del div con la clase "container"
    contenedor.innerHTML = '';
    // Añadir contenido al párrafo
    nuevoParrafo.textContent = preguntas[contador].pregunta;
    contenedor.appendChild(nuevoParrafo);

    for (let i = 0; i < preguntas[contador].resultados.length; i++) {
        // Crear un nuevo elemento <div> para envolver el input y el label
        const nuevoDiv = document.createElement("div");

        // Crear un nuevo elemento <input>
        const nuevoInput = document.createElement("input");
        nuevoInput.type = "radio";
        nuevoInput.name = "respuesta";
        nuevoInput.id = `respuesta${i}`;
        if (i === 0) {
            nuevoInput.checked = true;
        }

        // Crear un nuevo elemento <label>
        const nuevoLabel = document.createElement("label");
        nuevoLabel.htmlFor = `respuesta${i}`;
        nuevoLabel.textContent = preguntas[contador].resultados[i][0];

        // Añadir el input y el label al div
        nuevoDiv.appendChild(nuevoInput);
        nuevoDiv.appendChild(nuevoLabel);

        // Añadir el div al contenedor
        contenedor.appendChild(nuevoDiv);
    }
}

// Cargar preguntas desde el JSON y crear instancias de Pregunta
fetch('../json/capitales.json')
    .then(response => response.json())
    .then(data => {
        preguntas = data.map(item => {
            const respuestas = item.respuestas.map(r => new Respuesta(r.radioSelect, r.solucion));
            return new Pregunta(item.pregunta, item.pais, barajarArray(respuestas));
        });

        // Barajar el array de preguntas
        preguntas = barajarArray(preguntas);

        // Mostrar todas las preguntas y respuestas barajadas
        preguntas.forEach(pregunta => {
            console.log(`Pregunta: ${pregunta.pregunta}`);
            pregunta.resultados.forEach((respuesta, index) => {
                console.log(`${index + 1}. ${respuesta[0]} - ${respuesta[1]}`);
            });
            console.log('---');
        });

        console.log('Preguntas barajadas:', preguntas[0]);

        // Mostrar la primera pregunta
        mostrarPregunta();
    })
    .catch(error => console.error('Error al cargar el JSON:', error));

document.querySelector('#respuesta').addEventListener('click', () => {
    let acierto = false;
    const respuesta = document.querySelectorAll('input[type="radio"]');
    respuesta.forEach((input, index) => {
        if (input.checked && preguntas[contador].resultados[index][1]) {
            acierto = true;
        }
    });
    acierto ? alert('Correcto') : alert('Incorrecto');
    contador++;
    mostrarPregunta();
});