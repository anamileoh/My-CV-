window.addEventListener('DOMContentLoaded', init)

function init() {
    const buttonLite = document.getElementById("button-light");
    buttonLite.addEventListener('click', changeLight)
}

function changeLight() {
    document.querySelector("body").classList.toggle("body-change-mode");
    document.querySelector("a").classList.toggle("a-change-mode");

    document.querySelector(".nav-links").querySelectorAll("li a")
        .forEach(navElement => {
            navElement.classList.toggle("nav-change-mode")
        });


    document.querySelectorAll(".caja-info").forEach(caja => {
        caja.classList.toggle("caja-info-change-mode");
    })

    document.querySelectorAll(".logo-wwc").forEach(logoW => {
        logoW.classList.toggle("logo-wwc-change-mode");
    })

    if (document.querySelector(".logo-red")) {
        document.querySelector(".logo-red").classList.toggle("logo-red-change-mode");

    }
    if (document.querySelector(".joke-box")) {

        document.querySelector(".joke-box").classList.toggle("joke-box-change-mode");
        document.querySelector(".joke-box").querySelectorAll("div")
        .forEach(div => {
            div.classList.toggle("div-joke-change-mode")
        });

    }

    



    let variable = document.querySelector(".main-info");
    if (variable) {
        variable.classList.toggle("main-change-mode");
    }
}
