const singlePlayerButton = document.getElementById("singlePlayerButton");
const twoPlayerButton = document.getElementById("doublePlayerButton");
const startingMessageElement = document.getElementById("startingMessage");

ePlayerButton.addEventListener("click", function () {
  single();
  startingMessageElement.classList.remove("show");
});

twoPlayerButton.addEventListener("click", function () {
  double();
  startingMessageElement.classList.remove("show");
});
