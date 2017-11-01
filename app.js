//por medio de u prompt, preguntar al usuario su número de tarjeta
var confirmCard = parseInt(prompt("¿Cuál es tu número de tarjeta?"));

//creamos el array para el conteo
var arrNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var arrayPosition = []; //creamos un array vacío para hacer el conteo en reversa.

function isValidCard(cardNumber) { //creamos la función isValidCard con el parámetro cardNumber.

  var space = cardNumber.length; //creamos una variable y le damos el valor del parámetro de la función con la propiedad length
  var lastIndex = space-1; //creamos otra variable para comenzar el conteo el reversa y es la longitud del sprint menos uno.

  for(var i = lastIndex; i >= 0; i--) { //creamos el bucle for para recorrer el índice del array.
    arrayPosition.push(cardNumber[i]);
  }
  return arrayPosition;
}
isValidCard(arrNumbers); //llamamos a la función para que haga el conteo en reversa

 for(var par = 0; par < arrayPosition.length; par = par + 2) { //creamos un nuevo bucle for para hacer la operación y validar la tarjeta.
   if(arrayPosition[par] *2 >= 10) { //aquí le decimos por medio de un if que si el resultado de arrayPosition en par multiplicado por 2 es mayor o igual a 10 hacer la suma.
     var sum = 0;
     sum = sum + arrayPosition[par];
   }
 }

 if(sum % 10 === 0) { //si la suma es divisor de 10, debe dar 0, entonces la tarjeta es válida.
   document.write("¡Felicidades!, tu tarjeta sí es válida");
 }
else {
  document.write("¡Lo sentimos, tu tarjeta no es válida! 😞"); //si no es 0, la tarjeta no es válida.
}
























/*var confirmCard = prompt("¿Cuál es tu número de tarjeta?");
//preguntar al usuario cuál es su número de tarjeta.

var arrNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

function isValidCard(myArray){
  var arrayPosition = [];
  var space = myArray.length;
  var lastIndex = space-1;

for(var i = lastIndex; i >= 0; i--) {
  arrayPosition.push(myArray[i]);
}

return arrayPosition;
}
isValidCard(arrNumbers);

for(var sum = 0; sum >= 10; i++){
  if(sum * 2 % 10 == 0) {
    console.log("Tu tarjeta es válida");
  } else {
    console.log("tu tarjeta no es valida");
  }
}


var size = arrNumbers.length;
var lastIndex = size-1;


for(var i = lastIndex; i >= 0; i--) {
  console.log(arrNumbers[i]);
}*/
