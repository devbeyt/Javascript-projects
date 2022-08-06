let username = document.querySelector("#username");
let password = document.querySelector("#password");

let loginBtn = document.querySelector("#signIn_btn")

let getUser = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")

events();

function events() {
    loginBtn.addEventListener("click", loginControl)
}


// login Control

function loginControl(e) {

    e.preventDefault();
    if (username.value === "" || password.value === "") {
        alert("please insert value")
    } else {
        if (getUser && getUser.trim() === username.value && getPassword && getPassword.trim() === password.value) {
            setTimeout(() => {
                window.location = "index.html"
            }, 1000)
        } else {
            alert("username or password wrong!")
        }
    }
}



