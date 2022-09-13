window.addEventListener('DOMContentLoaded', init)

function init() {
    const buttonLite = document.getElementById("button-light");
    buttonLite.addEventListener('click', changeLight)
}

function changeLight() {
    document.querySelector("body").classList.toggle("body-change-mode");
    document.querySelector("a").classList.toggle("a-change-mode");

    // document.querySelector(".main-index").classList.toggle("main-change-mode");
    document.querySelector(".nav-links").querySelectorAll("li a")
        .forEach(navElement => {
            navElement.classList.toggle("nav-change-mode")
        })


    let variable = document.querySelector(".main-info");
    if (variable) {
        variable.classList.toggle("main-change-mode");
    }
}