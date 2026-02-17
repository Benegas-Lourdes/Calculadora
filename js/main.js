
const pantalla = document.querySelector(".pantalla"); //busca el elemento con clase pantalla
const numeros = document.querySelectorAll(".numero"); //busca todos los elementos con clase numero
const operadores = document.querySelectorAll(".operador");
const borrar = document.querySelector(".borrar");
const igual = document.querySelector(".igual");

// recorre todos los elementos que hay en la variable numeros, cuando haces click agrega el numero a la pantalla
numeros.forEach((numero) => {
    numero.addEventListener("click", () => {
       pantalla.textContent += numero.textContent;

    });
});

operadores.forEach(operador => {
    operador.addEventListener("click", () => {
        pantalla.textContent += operador.textContent;
    });
});

borrar.addEventListener("click", () => {
    pantalla.innerHTML = "";
});

igual.addEventListener("click", () => {
    pantalla.textContent = eval(pantalla.textContent);
});

