/*
//map

let miMapa = new Map();


miMapa.set('a', 1);
miMapa.set('b', 2);
miMapa.set('c', 3);


alert('Tamaño del Map: ' + miMapa.size);

alert('Valor asociado a "b": ' + miMapa.get('b'));

alert('¿La clave "c" existe en el Map? ' + miMapa.has('c'));

// Iterar sobre las claves y valores del Map
miMapa.forEach((valor, clave) => {
  alert('Clave: ' + clave + ', Valor: ' + valor);
});

// Eliminar un elemento por clave
miMapa.delete('a');

alert('Nuevo tamaño del Map: ' + miMapa.size);

miMapa.clear();


alert('Tamaño después de limpiar el Map: ' + miMapa.size);


//set

let miSet = new Set();

miSet.add('valor1');
miSet.add(2);
miSet.add({nombre: 'Maria'});

alert('Tamaño del Set: ' + miSet.size);

alert('¿El valor 2 existe en el Set? ' + miSet.has(2));

miSet.delete('valor1');

miSet.forEach(valor => {
  alert('Valor: ' + valor);
});

miSet.clear();

//Object.keys, values, entries

let miObjeto = {
    a: 1,
    b: 2,
    c: 3
  };
  
  // Obtener las claves del objeto
  let claves = Object.keys(miObjeto);
  alert('Claves del objeto: ' + claves.join(', '));
  
  // Obtener los valores del objeto
  let valores = Object.values(miObjeto);
  alert('Valores del objeto: ' + valores.join(', '));
  
  // Obtener pares clave-valor como matrices
  let entradas = Object.entries(miObjeto);
  alert('Pares clave-valor del objeto:');
  entradas.forEach(([clave, valor]) => {
    alert('Clave: ' + clave + ', Valor: ' + valor);
  });
 
  // asignacion desestructurante

  let miObjeto = {a: 1, b: 2, c: 3};

// Desestructuración con Object.keys
let [primeraClave, segundaClave, terceraClave] = Object.keys(miObjeto);
alert(primeraClave + ', ' + segundaClave + ', ' + terceraClave);  // Salida: 'a, b, c'

// Desestructuración con Object.values
let [primerValor, segundoValor, tercerValor] = Object.values(miObjeto);
alert(primerValor + ', ' + segundoValor + ', ' + tercerValor);  // Salida: 1, 2, 3

// Desestructuración con Object.entries
let [[primeraClaveD, primerValorD], [segundaClaveD, segundoValorD], [terceraClaveD, tercerValorD]] = Object.entries(miObjeto);
alert(primeraClaveD + ', ' + primerValorD + ', ' + segundaClaveD + ', ' + segundoValorD + ', ' + terceraClaveD + ', ' + tercerValorD);
// Salida: 'a, 1, b, 2, c, 3
*/
//fecha y hora 
// Obtener la fecha y hora actual
let fechaActual = new Date();

// Mostrar la fecha y hora actual
alert('Fecha y Hora Actual: ' + fechaActual);

// Obtener el año
let anio = fechaActual.getFullYear();
alert('Año: ' + anio);

// Obtener el mes (0-11, donde 0 es enero)
let mes = fechaActual.getMonth() + 1; // Sumar 1 para obtener el mes correcto
alert('Mes: ' + mes);

// Obtener el día del mes
let dia = fechaActual.getDate();
alert('Día del Mes: ' + dia);

// Obtener el día de la semana (0-6, donde 0 es domingo)
let diaSemana = fechaActual.getDay();
alert('Día de la Semana: ' + diaSemana);

// Obtener la hora
let hora = fechaActual.getHours();
alert('Hora: ' + hora);

// Obtener los minutos
let minutos = fechaActual.getMinutes();
alert('Minutos: ' + minutos);

// Obtener los segundos
let segundos = fechaActual.getSeconds();
alert('Segundos: ' + segundos);
