let prompts = [];
let answers = [];

let knowledge = [
  "luz",
  "pingüino",
  "escalar",
  "telescopio",
  "murmullo",
  "galaxia",
  "alfiler",
  "dragón",
  "nube",
  "azúcar",
  "sabiduría",
  "colina",
  "susurro",
  "destello",
  "caracol",
  "hormiga",
  "tiza",
  "relámpago",
  "circo",
  "globo",
  "teclado",
  "papiro",
  "anzuelo",
  "misterio",
  "tornado",
  "alfombra",
  "cereza",
  "huracán",
  "nácar",
  "búho",
  "cactus",
  "eco",
  "marfil",
  "jirafa",
  "ropero",
  "cosmos",
  "hielo",
  "túnel",
  "burbuja",
  "cuaderno",
  "ruido",
  "sombra",
  "paradoja",
  "rincón",
  "ventisca",
  "silencio",
  "ceniza",
  "espejo",
  "quimera",
  "lluvia",
  "esfera",
  "monzón",
  "cóndor",
  "neón",
  "sándalo",
  "fósil",
  "abrazo",
  "puente",
  "silla",
  "solapa",
  "destino",
  "labrador",
  "rastro",
  "pestaña",
  "barco",
  "viento",
  "sierra",
  "fantasma",
  "cráter",
  "venado",
  "aurora",
  "estanque",
  "barro",
  "eco",
  "brújula",
  "almendra",
  "trineo",
  "pantalla",
  "lente",
  "papiroflexia",
  "madera",
  "cíclope",
  "pétalo",
  "vibración",
  "alga",
  "relámpago",
  "travesía",
  "mochila",
  "horizonte",
  "eslabón",
  "telaraña",
  "péndulo",
  "velcro",
  "lienzo",
  "orilla",
  "gruta",
  "látigo",
  "melodía",
  "destello",
  "poema",
  "arena",
];

const promptBox = document.getElementById("prompt");
const messages = document.querySelector(".messages");
const sendBtn = document.querySelector(".send-btn");

sendBtn.addEventListener("click", () => {
  prompts.push(promptBox.value);

  const newMessage = document.createElement("div");
  const text = document.createElement("p");
  newMessage.classList.add("user-message");
  text.textContent = promptBox.value;
  newMessage.appendChild(text);
  messages.appendChild(newMessage);

  messageTreatment(promptBox.value);
  createResponse();

  promptBox.value = "";
});

function messageTreatment(message) {
  const messageArray = message.split(" ");

  messageArray.forEach((word) => {
    knowledge.push(word);
  });
}

function createResponse() {
  const length = Math.floor(Math.random() * 100);
  let iaMessage = "";

  for (let i = 0; i < length; i++) {
    knowledgeIndex = Math.floor(Math.random() * knowledge.length);

    if (i == 0) {
      iaMessage += knowledge[knowledgeIndex];
    } else {
      iaMessage += " " + knowledge[knowledgeIndex];
    }
  }

  const newMessage = document.createElement("div");
  newMessage.classList.add("ia-message");
  newMessage.textContent = iaMessage;
  newMessage.style.opacity = "0";
  messages.appendChild(newMessage);
  setTimeout(() => {
    newMessage.style.opacity = "1";
  }, 10);
}
