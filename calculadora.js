let displayValue = '';

// Función para actualizar el valor mostrado
function actualizarPantalla() {
    document.getElementById('display').value = displayValue;
}

// Funciones para manejar los clics individuales de los botones
function agregarNumero(numero) {
    displayValue += numero;
    actualizarPantalla();
}

function agregarOperador(operador) {
    if (displayValue === '') {
        return;
    }
    
    const ultimoCaracter = displayValue[displayValue.length - 1];
    if (esOperador(ultimoCaracter)) {
        displayValue = displayValue.slice(0, -1);
    }
    
    displayValue += operador;
    actualizarPantalla();
}

function agregarPunto() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        actualizarPantalla();
    }
}

function limpiarPantalla() {
    displayValue = '';
    actualizarPantalla();
}

function calcular() {
    if (displayValue === '' || esOperador(displayValue[displayValue.length - 1])) {
        return;
    }
    
    try {
        const resultado = eval(displayValue);
        displayValue = resultado.toString();
        actualizarPantalla();
    } catch (error) {
        displayValue = 'Error';
        actualizarPantalla();
    }
}

function esOperador(caracter) {
    return ['+', '-', '*', '/'].includes(caracter);
}

// Función para detectar la tecla Enter y ejecutar el cálculo
document.addEventListener('keydown', function(evento) {
    if (evento.keyCode === 13) {
        calcular();
    }
});