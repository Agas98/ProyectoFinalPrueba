let raperos = [];

const min = 60;
const max = 100;

let errorDatos, errorFlow, errorIngenio, errorEstilo, errorRespuesta, errorPunchline, errorAgresividad, rapero;

class Rapero {

    constructor(nombre, flow, estilo, ingenio, respuesta, punchline, agresividad, promedio) {
        this.nombre = nombre;
        this.flow = flow;
        this.estilo = estilo;
        this.ingenio = ingenio;
        this.respuesta = respuesta;
        this.punchline = punchline;
        this.agresividad = agresividad;
        this.promedio = promedio;
    }
}

function modificarDOM() {
    let contenido_card = document.createElement('div');
    contenido_card.classList.add("contenido_card");
    contenido_card.innerHTML =
        `
        <div class="card">
                    <div class="nombre">
                        <label for="" class="nombre">${rapero.nombre}</label>
                    </div>
                    <div class="card__img">
    
                    </div>
                    <div class="separador-horizontal"></div>
                    <div class="card__data">
                        <div class="card__data--left">
                            <div class="atributos">
                                <label class="style flow">${rapero.flow}</label>
                                <label>FLO</label>
                            </div>
                            <div class="atributos">
                                <label class="style estilo">${rapero.estilo}</label>
                                <label>EST</label>
                            </div>
                            <div class="atributos">
                                <label class="style ingenio">${rapero.ingenio}</label>
                                <label>ING</label>
                            </div>
                        </div>
                        <div class="separador-vertical"></div>
                        <div class="card__data--right">
                            <div class="atributos">
                                <label class="style respuesta">${rapero.respuesta}</label>
                                <label>RES</label>
                            </div>
                            <div class="atributos">
                                <label class="style punchline">${rapero.punchline}</label>
                                <label>PUN</label>
                            </div>
                            <div class="atributos">
                                <label class="style agresividad">${rapero.agresividad}</label>
                                <label>AGR</label>
                            </div>
                        </div>
                    </div>
                </div>
        `;

    let contenedor = document.querySelector(".container");
    contenedor.appendChild(contenido_card);
}

function almacenarDatosJSON() {
    json_rapero = JSON.stringify(raperos);
    localStorage.setItem("raperosJSON", json_rapero);
}


let botonSubmit = document.querySelector("#submit-datos");
botonSubmit.onclick = () => {

    let nombreIngresado = document.querySelector("#nombreIngresado").value;
    let flowIngresado = Number(document.querySelector("#flowIngresado").value);
    let estiloIngresado = Number(document.querySelector("#estiloIngresado").value);
    let ingenioIngresado = Number(document.querySelector("#ingenioIngresado").value);
    let respuestaIngresado = Number(document.querySelector("#respuestaIngresado").value);
    let punchlineIngresado = Number(document.querySelector("#punchlineIngresado").value);
    let agresividadIngresado = Number(document.querySelector("#agresividadIngresado").value);

    let promedio = (flowIngresado + estiloIngresado + ingenioIngresado + respuestaIngresado + punchlineIngresado + agresividadIngresado) / 6;
    let promedioIngresado = Number(promedio.toFixed(2));

    if (!isNaN(nombreIngresado) || nombreIngresado == "") {
        document.querySelector("#nombreIngresado").style.background = 'red';
        nombreIngresado = "NOMBRE INVALIDO";
        errorNombre = true;
    } else {
        errorNombre = false;
        document.querySelector("#nombreIngresado").style.background = 'white';
    }

    if (flowIngresado < min || flowIngresado > max) {
        document.querySelector("#flowIngresado").style.background = 'red';
        flowIngresado = 0;
        errorFlow = true;
    } else {
        errorFlow = false;
        document.querySelector("#flowIngresado").style.background = 'white';
    }

    if (estiloIngresado < min || estiloIngresado > max) {
        document.querySelector("#estiloIngresado").style.background = 'red';
        estiloIngresado = 0;
        errorEstilo = true;
    } else {
        errorEstilo = false;
        document.querySelector("#estiloIngresado").style.background = 'white';
    }

    if (ingenioIngresado < min || ingenioIngresado > max) {
        document.querySelector("#ingenioIngresado").style.background = 'red';
        ingenioIngresado = 0;
        errorIngenio = true;
    } else {
        errorIngenio = false;
        document.querySelector("#ingenioIngresado").style.background = 'white';
    }

    if (respuestaIngresado < min || respuestaIngresado > max) {
        document.querySelector("#respuestaIngresado").style.background = 'red';
        respuestaIngresado = 0;
        errorRespuesta = true;
    } else {
        document.querySelector("#respuestaIngresado").style.background = 'white';
        errorRespuesta = false;
    }

    if (punchlineIngresado < min || punchlineIngresado > max) {
        document.querySelector("#punchlineIngresado").style.background = 'red';
        punchlineIngresado = 0;
        errorPunchline = true;
    } else {
        document.querySelector("#punchlineIngresado").style.background = 'white';
        errorPunchline = false;
    }

    if (agresividadIngresado < min || agresividadIngresado > max) {
        document.querySelector("#agresividadIngresado").style.background = 'red';
        agresividadIngresado = 0;
        errorAgresividad = true;
    } else {
        document.querySelector("#agresividadIngresado").style.background = 'white';
        errorAgresividad = false;
    }

    if (errorNombre == false && errorFlow == false && errorEstilo == false && errorIngenio == false && errorRespuesta == false && errorPunchline == false && errorAgresividad == false) {
        errorDatos = false;
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: `Datos invalidos`,
        })
        errorDatos = true;
    }

    rapero = new Rapero(nombreIngresado, flowIngresado, estiloIngresado, ingenioIngresado, respuestaIngresado, punchlineIngresado, agresividadIngresado, promedioIngresado);

    if (errorDatos == false) {
        Swal.fire({
            title: 'Exito!',
            text: `Nuevo rapero "${rapero.nombre}" creado correctamente`,
            icon: 'success'
        })
        raperos.push(rapero);
        document.querySelector("#nombreIngresado").value = "";
        document.querySelector("#flowIngresado").value = "";
        document.querySelector("#estiloIngresado").value = "";
        document.querySelector("#ingenioIngresado").value = "";
        document.querySelector("#respuestaIngresado").value = "";
        document.querySelector("#punchlineIngresado").value = "";
        document.querySelector("#agresividadIngresado").value = "";

        /* ALMACENAMIENTO LOCAL */
        almacenarDatosJSON();

        /* MODIFICACION DOM */
        modificarDOM();

    }
}

let botonMostrar = document.querySelector("#mostrarRaperos");
botonMostrar.onclick = () => {
    raperos = JSON.parse(localStorage.getItem("raperosJSON"));

    for (let i = 0; i < raperos.length; i++) {
        mostrarRaperos(raperos[i].nombre, raperos[i].flow, raperos[i].estilo, raperos[i].ingenio, raperos[i].respuesta, raperos[i].punchline, raperos[i].agresividad, );
    }
}

function mostrarRaperos(nombre, flow, estilo, ingenio, respuesta, punchline, agresividad) {
    let contenido_card = document.createElement('div');
    contenido_card.classList.add("contenido_card");
    contenido_card.innerHTML =
        `
        <div class="card">
                    <div class="nombre">
                        <label for="" class="nombre">${nombre}</label>
                    </div>
                    <div class="card__img">
    
                    </div>
                    <div class="separador-horizontal"></div>
                    <div class="card__data">
                        <div class="card__data--left">
                            <div class="atributos">
                                <label class="style flow">${flow}</label>
                                <label>FLO</label>
                            </div>
                            <div class="atributos">
                                <label class="style estilo">${estilo}</label>
                                <label>EST</label>
                            </div>
                            <div class="atributos">
                                <label class="style ingenio">${ingenio}</label>
                                <label>ING</label>
                            </div>
                        </div>
                        <div class="separador-vertical"></div>
                        <div class="card__data--right">
                            <div class="atributos">
                                <label class="style respuesta">${respuesta}</label>
                                <label>RES</label>
                            </div>
                            <div class="atributos">
                                <label class="style punchline">${punchline}</label>
                                <label>PUN</label>
                            </div>
                            <div class="atributos">
                                <label class="style agresividad">${agresividad}</label>
                                <label>AGR</label>
                            </div>
                        </div>
                    </div>
                </div>
        `;

    let contenedor = document.querySelector(".container");
    contenedor.appendChild(contenido_card);
}