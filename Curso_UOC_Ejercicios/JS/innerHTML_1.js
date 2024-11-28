document.querySelector(".red").addEventListener("mouseover", function() {
    document.querySelector(".yellow").innerHTML = "Hola nois";
});

const cositasGuais = 'Holi'

const input = document.getElementById("inputEvent");
    input.addEventListener("input", function() {
        const numeroVecesParraf = input.value;
        for (let i = 0; i < numeroVecesParraf; i++) {
            const parrafo = document.createElement("p");
            parrafo.innerHTML = cositasGuais;
            document.body.appendChild(parrafo);
        }
});


document.querySelector("#map").addEventListener("click", function() {

    for (let i = 0; i < 10; i++) {
        const x = Math.floor(Math.random() * 675);  // Posición aleatoria en el eje X
        const y = Math.floor(Math.random() * 435);  // Posición aleatoria en el eje Y

        // Crear un nuevo elemento img
        const img = document.createElement("img");
        img.src = "https://pablomonteserin.com/res/javascript-es6/ex/mapa/img/goldcoin.png";
        img.style.width = "50px";
        img.style.position = "absolute";
        img.style.marginLeft = `${x}px`;
        img.style.marginTop = `${y}px`;

        // Añadir la imagen al div con id="map"
        document.querySelector("#map").appendChild(img);
    }
    
});


