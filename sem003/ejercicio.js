// Ejercicio de Moha

// 1.- Muestra un mensaje en consola mediante un callback. La función que escribas debe poder mostrar el mensaje como console.log

function showMsg(msg) {
  console.log(msg);
}
showMsg("Hola");

// 2.- Crear una función que reciba como
//     argumento una variable de cualquier tipo y un callback. La función debe retornar como resultado, mediante el callback, cual es el tipo de dato de la variable ingresada e imprimir su contenido.

let itsThis = (variable) => typeof variable;

function whatIs(fun, variable) {
  return console.log(fun(variable));
}

whatIs(itsThis, "Hey");

// 3.- Crear una función que reciba como
//     argumentos dos números y un callback. Según el callback
//     que se pase a la función, se devuelve la suma de los
//     dos números, la resta de los dos números o la
//     multiplicación de los dos números.

let add_ = (num1, num2) => num1 + num2;
let substract_ = (num1, num2) => num1 - num2;
let multiply_ = (num1, num2) => num1 * num2;

function basicMath(num1, num2, fun) {
  return console.log(fun(num1, num2));
}

basicMath(2, 3, multiply_);

// 4.- Escribe una función que reciba una cadena de
//     caracteres y debe devolver, mediante un callback, la
//     cadena de caracteres en mayúsculas o en minúsculas.
//             ordenSuperior("PejeLagarto", minus);
//             -> pejelagarto
//             ordenSuperior("PejeLagarto", mayus);
//             -> PEJELARTO

let minus = (str) => str.toLowerCase();
let mayus = (str) => str.toUpperCase();

function ordenSuperior(str, fun) {
  console.log(fun(str));
}
ordenSuperior("HEY", mayus);

