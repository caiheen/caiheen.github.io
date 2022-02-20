const loginForm = document.querySelector("#login-form");
const userNameInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY ="username";

function loginUser(e){
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const userNameVal = userNameInput.value;
    localStorage.setItem(USERNAME_KEY, userNameVal);
    getUserNameVAl(userNameVal);
}

function getUserNameVAl(username) {
    greeting.classList.remove(HIDDEN_CLASS);
    greeting.innerText = `Hello ${username}!`;
}


const savedUserName = localStorage.getItem(USERNAME_KEY);
console.log(savedUserName);

if(savedUserName == null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", loginUser);
} else {
    getUserNameVAl(savedUserName);
}