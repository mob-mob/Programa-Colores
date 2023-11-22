let la = new RegExp("(^a|^A)");
let le = new RegExp("(^e|^E)");
let li = new RegExp("(^i|^I)");
let lo = new RegExp("(^o|^O)");
let lu = new RegExp("(^u|^U)");
let ensaje = new RegExp(/ensaje\([^()]*\)$/i);
let inicio = new RegExp(/inicio$/i);
let out = new RegExp(/out$/i);

input = document.querySelector(".input");
contenedor = document.querySelector(".contenedor");
parrafo = document.querySelector(".parrafo");
boton = document.querySelector(".botonD");

input.addEventListener("input", leerInput);
boton.addEventListener("click", validar);

function leerInput(e) {

    if (la.test(e.target.value)) {
        parrafo.style.color = "#50fa7b";
    } else if (le.test(e.target.value)) {
        parrafo.style.color = "#ffb86c";
    } else if (li.test(e.target.value)) {
        parrafo.style.color = "#ff79c6";
    } else if (lo.test(e.target.value)) {
        parrafo.style.color = "#bd93f9";
    } else if (lu.test(e.target.value)) {
        parrafo.style.color = "#ff5555";
    } else {
        parrafo.style.color = "#f8f8f2";
    }
    //parentesis(e);
    corte(e);
    parrafo.textContent = e.target.value;
}

function corte(e) {
    if (e.target.value.charAt(e.target.value.length - 1) === "#") {
        nParrafo = document.createElement("p");
        nParrafo.classList.add("parrafo")
        contenedor.appendChild(nParrafo);
        parrafo = nParrafo;
        e.target.value = "";
    }
}

/*function parentesis(e) {
    if (e.target.value.charAt(e.target.value.length - 1) === "(") {
        nspan = document.createElement("span");
        parrafo.appendChild(nspan);
        parrafo.textContent += "(";
        parrafo = nspan;
        e.target.value = "";
    }
}*/

function validar(e) {
    let m = "";
    let c = 0;
    if (inicio.test(contenedor.children[0].textContent)) {
        c++;
        for (let i = 1; ensaje.test(contenedor.children[i].textContent); i++) {
            if (ensaje.test(contenedor.children[i].textContent)) {
                console.log("Si");
                m += contenedor.children[i].textContent.substring(7).replace(")", "") + "\n";
                c++;
            }
        }
        if (out.test(contenedor.children[contenedor.children.length - 2].textContent)) {
            c++;
        } else {
            c = 0;
        }
    }

    console.log(c);
    if (c >= 3) {
        alert(m);
    } else {
        alert("Está mal");
    }
}
