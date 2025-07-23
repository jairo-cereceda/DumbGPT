let prompts = [];
let answers = [];
let knowledge = [];

fetch("js/bd/data.json")
  .then((response) => response.json())
  .then((data) => {
    knowledge = data;
  });

const promptBox = document.getElementById("prompt");
const messages = document.querySelector(".messages");
const sendBtn = document.querySelector(".send-btn");

promptBox.addEventListener("focus", () => {
  document.addEventListener("keydown", (e) => {
    if (promptBox.value.trim() !== "") {
      if (e.key === "Enter" && !event.shiftKey) {
        e.preventDefault();
        sendBtn.click();
      }
    }
  });
});

sendBtn.addEventListener("click", () => {
  prompts.push(promptBox.value);

  const newMessage = document.createElement("div");
  const text = document.createElement("p");
  newMessage.classList.add("user-message");
  text.textContent = promptBox.value;
  newMessage.appendChild(text);
  messages.appendChild(newMessage);

  const arrayIndex = messageTreatment(promptBox.value);
  createResponse(arrayIndex);

  promptBox.value = "";
});

function messageTreatment(message) {
  const messageArray = message.split(" ");
  let ticCounter = 0;
  let kitchenCounter = 0;
  let carCounter = 0;
  let animalCounter = 0;
  let allArray = [];

  messageArray.forEach((word) => {
    if (knowledge.tic.includes(word.toLowerCase())) {
      ticCounter++;
    } else if (knowledge.kitchen.includes(word.toLowerCase())) {
      kitchenCounter++;
    } else if (knowledge.car.includes(word.toLowerCase())) {
      carCounter++;
    } else if (knowledge.animals.includes(word.toLowerCase())) {
      animalCounter++;
    }

    knowledge.others.push(word.toLowerCase());
  });

  if (
    ticCounter > kitchenCounter &&
    ticCounter > carCounter &&
    ticCounter > animalCounter
  ) {
    return knowledge.tic;
  } else if (kitchenCounter > carCounter && kitchenCounter > animalCounter) {
    return knowledge.kitchen;
  } else if (carCounter > animalCounter) {
    return knowledge.car;
  } else if (animalCounter > 0) {
    return animalCounter;
  }

  Object.entries(knowledge).forEach(([cat, arr]) => {
    arr.forEach((data) => {
      allArray.push(data);
    });
  });

  return allArray;
}

function createResponse(index) {
  const length = Math.floor(Math.random() * 100);
  let iaMessage = "";

  for (let i = 0; i < length; i++) {
    let knowledgeThemeIndex = index;

    if (index === true) {
      knowledgeThemeIndex = Math.floor(Math.random() * knowledge.length);
    }

    knowledgeIndex = Math.floor(Math.random() * index.length);

    if (i == 0) {
      iaMessage += index[knowledgeIndex];
    } else {
      iaMessage += " " + index[knowledgeIndex];
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
