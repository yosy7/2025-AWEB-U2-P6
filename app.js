const inputLado = document.getElementById('inputLado');
const btnCalcular = document.getElementById('btnCalcular');

const resultado = document.getElementById("resultado");

const inputLadoQuerySelector = document.querySelector('#inputLado');

const inputsX = document.querySelectorAll('.inputX');

btnCalcular.addEventListener(
    'click', 
    function(){
        
         let lado = parseFloat(inputLado.value);
        console.log(inputLado);
        console.log(inputLadoQuerySelector);
        console.log(inputsX);
        lado=inputLado.value
        console.log(lado);

    if (isNaN(lado) || lado <= 0) {
    resultado.textContent = "Error, debes ingresar un numero positivo";
    resultado.className = "mensaje-error";
  } else {
    let area = lado * lado;
    resultado.textContent = `El área: ${area} u2`;
    resultado.className = "mensaje-correcto";
  }
        

        


        

}

);