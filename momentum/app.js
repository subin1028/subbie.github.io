const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const user_store = localStorage.getItem("username");

if(user_store){
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerHTML = `Hello ${user_store}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLoginSubmit(info) {
    info.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username", username)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    user_store = localStorage.getItem("username");
    // greeting.innerHTML = `Hello ${user_store}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", handleLoginSubmit);
