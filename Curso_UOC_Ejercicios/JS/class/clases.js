export class Respuesta {
    constructor(radioSelect, solucion) {
        this.radioSelect = radioSelect;
        this.solucion = solucion;
    }
}

export class Pregunta {
    constructor(pregunta, pais, respuestas) {
        this.pais = pais;
        this.pregunta = pregunta;
        this.resultados = respuestas.map(respuesta => [respuesta.radioSelect, respuesta.solucion]);
    }
}
