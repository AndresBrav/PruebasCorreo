

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

const boton2 = document.getElementById("boton-2");

const mensaje2 = document.getElementById("hola");

let contador2 =0;
boton2.addEventListener("click",() => {
    if (contador2 % 2 === 0) {
        mensaje2.textContent = "¡Has hecho clic en el botón 2!";
    } else {
        mensaje2.textContent = "Texto original";
    }
    contador2++;
    console.log(contador2)
});

