const button = document.getElementById("button")
const body = document.body.classList
var currentTheme = localStorage.getItem("theme")
button.addEventListener("click", _onButtonActivated)


// Executed as the webpage finishes loading the "body"
function _onLoad() {
    currentTheme = (localStorage.getItem("theme") == "dark_mode")
    body.toggle("light-theme", currentTheme)
    body.toggle("dark-theme", !currentTheme)
}

// Executed as the "Change Theme" button is pressed
function _onButtonActivated()
{
    if (currentTheme == true) {
        localStorage.setItem("theme", "light_mode")
    }else {
        localStorage.setItem("theme", "dark_mode")
    }
    location.reload()
}

