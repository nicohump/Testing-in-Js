//  en otras aplicaciones se llaman tambien Matchers
test('test in obj', () => {
  const data = { name: 'nico' };
  data.lastname = 'humpola';
  expect(data).toEqual({ name: 'nico', lastname: 'humpola' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull(); // Esperamos un null
  expect(data).toBeDefined(); // Esperamos un valor definido
  expect(data).not.toBeUndefined(); // Esta un valor que no sera indefinido
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);
  expect(0).toBeFalsy(); // Aca consideramos que un ingreso de 0 debe ser 0
  expect('').toBeFalsy(); // Consideramos un espacio vacio como false
  expect(false).toBeFalsy();
});

test('string', () => {
  expect('Cristoph').toMatch(/stop/); // Aca probamos que la exp reg stop este en la cadena
});

test('list / arrays', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(3); // Utilizamos el assertion toContain para saber si un valor esta
});
