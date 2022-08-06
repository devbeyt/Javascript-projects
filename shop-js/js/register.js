
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password")

let signUp = document.querySelector("#sign_up");

events();

function events() {
    signUp.addEventListener("click", registerControl)
}


// register control

function registerControl(e) {

    e.preventDefault();
    if (username.value === "" || email.value === "" || password.value === "") {
        alert("please insert value")
    } else {
        setLocalStorage()
        // go Home page
        setTimeout(()=>{
            window.location = "login.html"
        },1000)
    }
}


// set data to localstorage 

function setLocalStorage() {
    localStorage.setItem("username", username.value)
    localStorage.setItem("email", email.value)
    localStorage.setItem("password", password.value)
}

