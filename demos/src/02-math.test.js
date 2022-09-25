
const {sum, multiply, divide} = require ('./02-math');

// En la palabra reservada test vamos a poner 2 parametros, el primero es el mensaje de la prueba,
// El segundo es un funcion que contenga la prueba en si
test ('1 + 3 should be 4', () => {
  const rta = sum (1,3);
  // La palabra clave expect toBe, ponemos el resultado que esperamos obtener.
  expect(rta).toBe(4);
});

test ('should be 4', () => {
  const rta = multiply (1,4);
  expect(rta).toBe(4);
});

test ('should divide', () => {
  const rta = divide (6,3);
  expect(rta).toBe(2);
  const rta2 = divide (5,2);
  expect(rta2).toBe(2.5);

});


// En el caso de querer realizar una prueba para dividir por cero, el testing nos arrojaria un error, ya que el toBe nos daria infinit no null
// Para ello debemos refactorizar nuestra funcion divide, para que si el ingreso del denominador sea cero nos devuelva un null
test ('should divide by zero', () => {
  const rta = divide (6,0);
  expect(rta).toBeNull();
  const rta2 = divide (5,0);
  expect(rta2).toBeNull();

});


