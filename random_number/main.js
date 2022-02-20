const numberGameForm = document.querySelector("#numberGame");
const range = document.querySelector("#range");
const user = document.querySelector("#user");
const userChose = document.querySelector("#userChose");
const machineChose = document.querySelector("#machineChose");

let result = document.querySelector("#result");

function onNumberGame(e) {
  e.preventDefault();
  let userRange = range.value;
  let randomRange = Math.floor(Math.random() * userRange);
  userChose.innerText = user.value;
  machineChose.innerText = randomRange;
  if (user.value === randomRange) {
    result.innerText = "You win";
  } else {
    result.innerText = "You lost";
  }
  console.log(isNaN(user.value))
}
numberGameForm.addEventListener("submit", onNumberGame);