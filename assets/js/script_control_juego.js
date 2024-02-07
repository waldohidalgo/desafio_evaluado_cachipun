const btn_numero_juegos = document.getElementById("btn_numero_juegos");
const input_numero_juegos = document.getElementById("numero_juegos");
const span_numero_juegos = document.querySelector(".show_numero_juegos");
const span_numero_juegos_restantes = document.querySelectorAll(
  ".show_numero_juegos_restantes"
);

const division_hacer_jugada = document.getElementById("hacer_jugada");

const input_jugada_piedra = document.getElementById("piedra_input");
const input_jugada_papel = document.getElementById("papel_input");
const input_jugada_tijera = document.getElementById("tijera_input");

const boton_ejecutar_jugada = document.getElementById("boton_ejecutar_jugada");

const seccion_resultados = document.querySelector(".resultados");

const imagen_jugada_humano = document.getElementById("imagen_jugada_humano");
const imagen_jugada_maquina = document.getElementById("imagen_jugada_maquina");

const tag_informar_ganador = document.getElementById("informar_ganador");

let total_numero_jugadas_restantes = null;

btn_numero_juegos.addEventListener("click", () => {
  const numero_ingresado = +input_numero_juegos.value;
  if (numero_ingresado >= 0) {
    span_numero_juegos.innerHTML = `${numero_ingresado}`;
    total_numero_jugadas_restantes = numero_ingresado;
  }
  if (numero_ingresado > 0) {
    division_hacer_jugada.scrollIntoView({ behavior: "smooth" });
    input_jugada_piedra.disabled = false;
    input_jugada_papel.disabled = false;
    input_jugada_tijera.disabled = false;
    span_numero_juegos_restantes[0].innerHTML = `${total_numero_jugadas_restantes}`;
    span_numero_juegos_restantes[1].innerHTML = `${total_numero_jugadas_restantes}`;
  }
  if (numero_ingresado == 0) {
    resetearEstadosInputs();
    span_numero_juegos_restantes[0].innerHTML = `${total_numero_jugadas_restantes}`;
    span_numero_juegos_restantes[1].innerHTML = `${total_numero_jugadas_restantes}`;
  }
});

input_numero_juegos.addEventListener("input", (evento) => {
  const data_input = evento.target.value;
  const caracter_ingresado_input = +evento.data;

  if (isNaN(caracter_ingresado_input) || evento.data == " ") {
    input_numero_juegos.value = data_input.slice(0, -1);
  }
});

input_jugada_piedra.addEventListener("change", (evento) => {
  if (evento.target.checked) {
    boton_ejecutar_jugada.disabled = false;
  }
});
input_jugada_papel.addEventListener("change", (evento) => {
  if (evento.target.checked) {
    boton_ejecutar_jugada.disabled = false;
  }
});

input_jugada_tijera.addEventListener("change", (evento) => {
  if (evento.target.checked) {
    boton_ejecutar_jugada.disabled = false;
  }
});

function seleccionarImagenRandom() {
  const numero_random_0_a_2 = Math.floor(Math.random() * 3);
  const imagenes = [
    "./assets/img/rock.png",
    "./assets/img/paper.png",
    "./assets/img/scissors.png",
  ];
  const jugada_maquina = ["piedra", "papel", "tijera"];

  return [imagenes[numero_random_0_a_2], jugada_maquina[numero_random_0_a_2]];
}

function determinarGanador(jugada_humano, jugada_maquina) {
  let ganador = null;
  const mensajes = {
    humano: "🎉Felicitaciones, le has ganado a la máquina",
    maquina: "😔Has perdido contra la máquina",
  };
  if (jugada_humano == "papel" && jugada_maquina == "piedra") {
    ganador = mensajes["humano"];
  }
  if (jugada_humano == "piedra" && jugada_maquina == "papel") {
    ganador = mensajes["maquina"];
  }
  if (jugada_humano == "tijera" && jugada_maquina == "piedra") {
    ganador = mensajes["maquina"];
  }
  if (jugada_humano == "piedra" && jugada_maquina == "tijera") {
    ganador = mensajes["humano"];
  }
  if (jugada_humano == "papel" && jugada_maquina == "tijera") {
    ganador = mensajes["maquina"];
  }
  if (jugada_humano == "tijera" && jugada_maquina == "papel") {
    ganador = mensajes["humano"];
  }
  if (jugada_humano == jugada_maquina) {
    ganador = "Empate. Ambos han jugado lo mismo.";
  }
  return ganador;
}
function resetearEstadosInputs() {
  input_jugada_piedra.disabled = true;
  input_jugada_piedra.checked = false;
  input_jugada_papel.disabled = true;
  input_jugada_papel.checked = false;
  input_jugada_tijera.disabled = true;
  input_jugada_tijera.checked = false;
  boton_ejecutar_jugada.disabled = true;
  seccion_resultados.style.maxHeight = "0px";
}

function reducirNumeroJugadas() {
  total_numero_jugadas_restantes = total_numero_jugadas_restantes - 1;
  span_numero_juegos_restantes[0].innerHTML = `${total_numero_jugadas_restantes}`;
  span_numero_juegos_restantes[1].innerHTML = `${total_numero_jugadas_restantes}`;
  if (total_numero_jugadas_restantes == 0) {
    input_jugada_piedra.disabled = true;
    input_jugada_piedra.checked = false;
    input_jugada_papel.disabled = true;
    input_jugada_papel.checked = false;
    input_jugada_tijera.disabled = true;
    input_jugada_tijera.checked = false;
    boton_ejecutar_jugada.disabled = true;
  }
}

boton_ejecutar_jugada.addEventListener("click", () => {
  seccion_resultados.style.maxHeight = "1000px";
  setTimeout(() => {
    seccion_resultados.scrollIntoView({ behavior: "smooth" });
  }, 500);

  let jugada_humano = null;

  if (input_jugada_piedra.checked) {
    imagen_jugada_humano.src = "./assets/img/rock.png";
    jugada_humano = "piedra";
  }
  if (input_jugada_papel.checked) {
    imagen_jugada_humano.src = "./assets/img/paper.png";
    jugada_humano = "papel";
  }
  if (input_jugada_tijera.checked) {
    imagen_jugada_humano.src = "./assets/img/scissors.png";
    jugada_humano = "tijera";
  }
  const [source_imagen_maquina, jugada_maquina] = seleccionarImagenRandom();
  imagen_jugada_maquina.src = source_imagen_maquina;

  tag_informar_ganador.innerHTML = determinarGanador(
    jugada_humano,
    jugada_maquina
  );
  reducirNumeroJugadas();
});
