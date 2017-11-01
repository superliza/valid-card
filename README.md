TARJETA DE CRÉDITO

¿QUÉ ME PIDEN?

Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn. Lee este blog que explica cómo funciona el algoritmo de Luhn.

CONSIDERASIONES ESPECÍFICAS:

- Tu código debe estar compuesto por 1 función: isValidCard.
- El usuario no debe poder ingresar un campo vacío.

¿CÓMO LO HAGO?

- creamos una variable y por medio de un prompt le preguntamos al usuario cuál es su número de tarjeta
  * Lo parseamos para que no aparezca en string y sea number.
- Declaro un array del 0 al 9.
- Declaro otro array vacío para empezar el conteo de reversa del array anterior.
- Creamos la función isValidCard con un parámetro.
- Dentro de la función declaramos otra variable con el valor del parámetro de la función.
 * Agregamos la propiedad .length al valor de la variable.
- Creamos otra variable para que el array se empiece a contar de derecha a izquierda.
- Creamos un for para recorrer los índices del array.
- Abajo del for "llamamos" a la variable arrayPosition.
 * Le agreammo el método .push() para que vaya agragando los índices al parámetro de la función
   de izquierda a derecha, empezando por el 9.
- Después le decimos que retorne arrayPosition.
- Llamamos a la función y le damos el argumento de la variable arrNumbers.
- Creamos otro for para que recorra los número pares y la longitud de estos.
- Por me dio de un if le decimos que si los números pares, multiplicados por 2 son mayores o iguales a 10.
  * Debe hacer la suma.
- Si la suma de estos es divisible entre 10, debe dar 0.
  * Si da 0, la tarjeta es válida.
  * Si no da 0, la tarjeta no es válida.
