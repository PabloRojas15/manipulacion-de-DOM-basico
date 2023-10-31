const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');   
const pResult = document.querySelector('#result');

form.addEventListener('submit', inputSumValues)

function inputSumValues(event) {
  const sum = parseInt(input1.value) + parseInt(input2.value);
  console.log({event});
  event.preventDefault();
  pResult.innerText = "Resultado: " + sum;  
}

// Segunda forma de hacer que funcione correctamente el formulario
// btn.addEventListener('click', inputSumValues);

// function inputSumValues(event) {
//   const sum = parseInt(input1.value) + parseInt(input2.value);
//   pResult.innerText = "Resultado: " + sum;  
// }
