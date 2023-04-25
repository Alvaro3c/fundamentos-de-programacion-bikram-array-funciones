let arrayVacio = [];
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumerosPares = [0, 2, 4, 6, 8];
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

function suma(a, b) {
    let result = a + b
    return result
}

function potenciacion(a, b) {
    let result = a ** b
    return result
}

function separarPalabras(unString) {
    return unString.split(' ')
}

function repetirString(unString, numero) {
    return unString.repeat(numero)
}

function esPrimo(unNumero) {
    for (let i = 2; i < unNumero; i++) {
        if (unNumero % i === 0) {
            return false
        } else if (unNumero % i !== 0) {
            return true
            //esto no funciona en realidad
        }
    }
}

function ordenarArray(unArrayDeNumeros) {
    return unArrayDeNumeros.sort((a, b) => { b - a })
}

//Ejercicico 11
function obtenerPares(unArrayDeNumeros) {
    unArrayDeNumeros.filter((n) => {
        if (n % 2 === 0) {
            return n
        }
    })
}


//Ejercicio 12
function pintarArray(unArray) {
    // se puede hacer con metodo filter
}

//Ejercicio 13 | no funciona
function arrayMapi(unArray, unaFuncion) {
    for (let i = 0; i < unArray.length; i++) {
        unaFuncion(unArray[i])
    }
}

//Ejercicio 14
function eliminarDuplicados(unArray) {

}

//Ejercicio 15
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]

//Ejercicio 16
let holaMundo = ['Hola', 'Mundo']

//Ejercicio 17
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal']

//Ejercicio 18
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

//Ejercicio 19
function multiplicacion(a, b) {
    return a * b
}

//Ejercicio 20
function division(a, b) {
    return a / b
}

//Ejercicio 21
function esPar(unNumero) {
    if (unNumero % 2 === 0) {
        return true
    } else {
        return false
    }
}

//Ejercicio 22
let arrayFunciones = [(a, b) => { return a + b }, (a, b) => { return a - b }, (a, b) => { return a * b }]

//Ejercicio 23
function ordenarArray2(unArrayDeNumeros) {
    let sortedArray = unArrayDeNumeros.sort()
    sortedArray.reverse()
    //no funciona, pendiente de revisar
}

//Ejercicio 24
function obtenerImpares(unArrayDeNumeros) {
    let newNumbers = [];
    for (let i = 0; i < myNumbers.length; i++) {
        if (myNumbers[i] % 2 !== 0) {
            newNumbers.push(myNumbers[i]);
        }
    }
    return newNumbers;

}

//Ejercicio 25
function sumarArray(unArrayNumerico) {
    let total = 0;
    for (let i = 0; i < unArrayNumerico.length; i++) {
        total += myArr[i]
    }
}


//Ejercicio 26
function multiplicarArray(unArrayNumerico) {
    let total = 1;
    for (i = 0; i < myArr.length; i++) {
        total *= myArr[i];
    }
    return total;
}