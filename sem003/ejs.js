// 1.- Muestra un mensaje en consola mediante un callback. La función que escribas debe poder mostrar el mensaje como console.log

function studentName(name) {
    console.log(name);
};

function turnOn(aFunc, name) {
    return aFunc(name);
};

turnOn(studentName, '(the name)');

// 2.- Crear una función que reciba como
//     argumento una variable de cualquier tipo y un callback. La función debe retornar como resultado, mediante el callback, cual es el tipo de dato de la variable ingresada e imprimir su contenido.

let loquesea = 'hola';

function theFunc(type) {
    console.log(typeof(loquesea));
    console.log(loquesea);
};

function activador(on, type) {
    return on(type);
};

activador(theFunc)

// 3.- Crear una función que reciba como 
//     argumentos dos números y un callback. Según el callback
//     que se pase a la función, se devuelve la suma de los
//     dos números, la resta de los dos números o la
//     multiplicación de los dos números.

let num1 = 7;
let num2 = 13;

function numFunc(nums) {
    
}

// 4.- Escribe una función que reciba una cadena de
//     caracteres y debe devolver, mediante un callback, la
//     cadena de caracteres en mayúsculas o en minúsculas.
//             ordenSuperior("PejeLagarto", minus);
//             -> pejelagarto
//             ordenSuperior("PejeLagarto", mayus);
//             -> PEJELARTO

