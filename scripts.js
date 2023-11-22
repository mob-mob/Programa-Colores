input = document.querySelector(".input");
parrafo = document.querySelector(".parrafo");
span = document.querySelector(".span");

input.addEventListener("input", leerinput);

function leerinput(e) {
    if (e.target.value.charAt(0) === "a" || e.target.value.charAt(0) === "A") {
        span.style.color = "#50fa7b";
    } else if (e.target.value.charAt(0) === "e" || e.target.value.charAt(0) === "E") {
        span.style.color = "#ffb86c";
    } else if (e.target.value.charAt(0) === "i" || e.target.value.charAt(0) === "I") {
        span.style.color = "#ff79c6";
    } else if (e.target.value.charAt(0) === "o" || e.target.value.charAt(0) === "O") {
        span.style.color = "#bd93f9";
    } else if (e.target.value.charAt(0) === "u" || e.target.value.charAt(0) === "U") {
        span.style.color = "#ff5555";
    } else {
        span.style.color = "#f8f8f2";
    }
    corte(e);
    span.textContent = " " + e.target.value;
}

function corte(e) {
    if (e.target.value.charAt(e.target.value.length - 1) === "#") {
        nspan = document.createElement("span");
        parrafo.appendChild(nspan);
        span = nspan;
        e.target.value = "";
    }
}

