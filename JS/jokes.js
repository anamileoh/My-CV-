// (function(window, document, undefined){
//     window.onload = init;

//       function init(){
//         const  buttonJoke = document.getElementById("one-more");
//         buttonJoke.addEventListener('click', randomJokes)
//       }

//     })(window, document, undefined);

window.addEventListener('DOMContentLoaded', init)

function init() {
    const buttonJoke = document.getElementById("one-more");
    buttonJoke.addEventListener('click', randomJokes)
}

window.addEventListener('DOMContentLoaded', randomJokes)

function randomJokes() {
    const endPoint = 'https://api.dadjokes.io/api/random/joke';

    fetch(endPoint)
        .then(response => response.json())
        .then(data => {
            document.getElementById("joke").textContent = data.body[0].setup
            document.getElementById("punchline").textContent = data.body[0].punchline
        }).catch(error => {
            document.getElementById("joke").textContent = "It seems we're having problems!"
        })
} 
