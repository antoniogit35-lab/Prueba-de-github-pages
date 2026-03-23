"use strict";

let x=0, y=0, z=0, res=0;

// Elementos del DOM
const b_sumar = document.querySelector(".btn.increaseX");
const b_random = document.querySelector(".btn.randomY");
const b_binario = document.querySelector(".btn.binarioZ");
const resultado = document.getElementById("resultado");

//¿Es necesaria una funcion que actualice x y z?
//¿Como puedo guardar los valores?

function cambiarResultado () {
    res = x + y + z;
    resultado.textContent = `${x} + ${y} + ${z} = ${res}`;
}
 

// Evento sumar
b_sumar.addEventListener("click",
    () => {
        if(x < 20){
            x++;
        } else{
            x = 0;
        }
        
        cambiarResultado();
});

//¿existe la funcion upper para redondear al alza?
// Evento random
b_random.addEventListener("click",
    () => {
        y = Math.floor(Math.random() * 100) +1;
        cambiarResultado();
});

// Evento binario
b_binario.addEventListener("click",
    () => {
      if(z === 0){
        z = 1;
      cambiarResultado();
      return;
    }
      if(z === 1){
        z = 0;
        cambiarResultado();
        return;
    }
      
});
