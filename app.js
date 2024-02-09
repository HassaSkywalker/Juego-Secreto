let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

let listaGenerica = [];
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

function mostrarLenguajes() {
    let indice = lenguagesDeProgramacion.length - lenguagesDeProgramacion.length;
    while (indice < lenguagesDeProgramacion.length) {
        let mensaje = console.log(lenguagesDeProgramacion[indice]);
        indice++    
    }
}
mostrarLenguajes();

function mostrarLenguajesInverso() {
    let indice = lenguagesDeProgramacion.length-1;
    while (indice >= 0) {
        let mensaje = console.log(lenguagesDeProgramacion[indice]);
        indice --;
    }
}
mostrarLenguajesInverso();

let calificaciones = [8,7,6,5,10];
function promedio() {
    let suma = calificaciones[0] + calificaciones[1] + calificaciones[2] + calificaciones[3] + calificaciones[4];
    let promediofin = suma / calificaciones.length;
    console.log(promediofin);
}
promedio();

function numerosMayorMenor() {
    let numeros = [1, 5, 10];
    let numeroMenorAndMayor = [0,0];
    if (numeros[0] < numeros[1] && numeros[0] < numeros[2]) {
        numeroMenorAndMayor [0] = numeros[0]
    }else{
        if (numeros[0] > numeros[1] && numeros[0] > numeros[2]) {
            numeroMenorAndMayor [1] = numeros[0]
        }
    }
    if (numeros[1] < numeros[0] && numeros[1] < numeros[2]) {
        numeroMenorAndMayor [0] = numeros[1]
    }else{
        if (numeros[1] > numeros[0] && numeros[1] > numeros[2]) {
            numeroMenorAndMayor [1] = numeros[1]
        }
    }
    if (numeros[2] < numeros[0] && numeros[2] < numeros[1]) {
        numeroMenorAndMayor [0] = numeros[2]
    }else{
        if (numeros[2] > numeros[0] && numeros[2] > numeros[1]) {
            numeroMenorAndMayor [1] = numeros[2]
        }
    }
    return console.log(numeroMenorAndMayor);
}
numerosMayorMenor();

function sumaDeNumeros() {
    let suma = 0, numeros = [7,7,7];
    numeros.forEach(function(a){
        suma += a;
    });
    return console.log(suma);
}
sumaDeNumeros();

function posicionDeParametro(x) {
    let numeros = [1, 2, x]
    let posicion = numeros.length;
    return console.log(posicion - 1);
}
posicionDeParametro(6);

function dosListas() {
    let numeros1 = [1,2,3];
    let numeros2 = [1,2,3];
    let newLista = [];
    let contador = 0;
    for (numeros1[contador], numeros2[contador]; contador < numeros1.length; contador++) {
        let suma = numeros1[contador] + numeros2[contador]; 
        newLista.push(suma);
        console.log(newLista[contador]);
    }
}
dosListas();

function numerosAlCuadrado() {
    let numeros = [1, 2, 3, 4, 5];
    let numerosAlCuadrado = [];
    let contador = 0;
    for (numeros [contador]; contador < numeros.length; contador++){
        let cuadrado = numeros[contador] * numeros[contador];
       numerosAlCuadrado.push(cuadrado);
       console.log(numerosAlCuadrado[contador]);
    }
}
numerosAlCuadrado();