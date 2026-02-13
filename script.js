// const boton = document.getElementById("mi-boton");

// boton.addEventListener("click", () => {
//     alert("Hola has apretado el boton");
// });

// const boton2 = document.querySelector(".boton-design");

// boton2.addEventListener("click", () => {
//     alert("Hola has apretado el boton design");
// });

const boton = document.querySelector(".boton-design");
const mensaje = document.getElementById("mensaje");

let contador = 0;

boton.addEventListener("click", () => {
    if (contador % 2 === 0) {
        mensaje.textContent = "¡Has hecho clic en el botón!";
    } else {
        mensaje.textContent = "Texto original";
    }
    contador++;
    console.log(contador)
});

