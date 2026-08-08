const goodTraits = [
  "Inteligente","Cariñoso","Fiel","Divertido","Trabajador",
  "Romántico","Deportista","Guapo","Alto","Detallista",
  "Paciente","Responsable","Sincero","Respetuoso","Ordenado",
  "Creativo","Cocinero","Aventurero","Empático","Seguro de sí mismo",
  "Generoso","Buen padre","Puntual","Educado","Leal",
  "Optimista","Honesto","Curioso","Maduro","Amable"
];

const badTraits = [
  "Celoso","Vago","Desordenado","Gruñón","Tacaño",
  "Impuntual","Ronca","Muy pesado","Cabezota","Olvidadizo",
  "Dramático","No cocina","No limpia","Videojugador extremo","Dormilón",
  "Despistado","Hace chistes malos","Compra tonterías","Come tu comida","Tímido",
  "Orgulloso","Frío","Lento","Ansioso","Quejica",
  "Terco","Ruidoso","Serio","Desconfiado","Mandón"
];

let length = 20;
let width = 0;

const goodContainer = document.getElementById("good");
const badContainer = document.getElementById("bad");

function createCheckbox(container, text, callback) {
    const label = document.createElement("label");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.addEventListener("change", callback);

    label.appendChild(input);
    label.append(" " + text);

    container.appendChild(label);
    container.appendChild(document.createElement("br"));
}

goodTraits.forEach(trait => {
    createCheckbox(goodContainer, trait, function () {

        if (this.checked) {
            length--;
        } else {
            length++;
        }

        if (length < 0) length = 0;
        if (length > 20) length = 20;

        document.getElementById("len").textContent = length;

        const collar = document.getElementById("collar");

        collar.style.height = (20 + length * 9) + "px";
    });
});

badTraits.forEach(trait => {
    createCheckbox(badContainer, trait, function () {

        if (this.checked) {
            width++;
        } else {
            width--;
        }

        if (width < 0) width = 0;
        if (width > 30) width = 30;

        document.getElementById("wid").textContent = width;

        const collar = document.getElementById("collar2");

        collar.style.width = (width * 6) + "px";
    });
});

document.getElementById("to2").addEventListener("click", () => {

    document.getElementById("s1").classList.remove("active");
    document.getElementById("s2").classList.add("active");

});

document.getElementById("to3").addEventListener("click", () => {

    document.getElementById("s2").classList.remove("active");
    document.getElementById("s3").classList.add("active");

    const calc = document.getElementById("calc");

    const mensajes = [
        "Analizando gustos...",
        "Buscando coincidencias...",
        "Comparando resultados...",
        "Calculando compatibilidad...",
        "Casi listo..."
    ];

    let i = 0;

    const intervalo = setInterval(() => {

        calc.textContent = mensajes[i];

        i++;

        if (i >= mensajes.length) {

            clearInterval(intervalo);

            setTimeout(() => {

                document.getElementById("result").style.display = "block";

            }, 800);

        }

    }, 900);

});