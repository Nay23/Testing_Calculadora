


function suma(a, b) {
   
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Error: Ambos argumentos deben ser números.";
    }
    return a + b;
}


function resta(a, b) {
   
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Error: Ambos argumentos deben ser números.";
    }
    return a - b;
}


function multiplicacion(a, b) {
    
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Error: Ambos argumentos deben ser números.";
    }
    return a * b;
}

function division(a, b) {
   
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Error: Ambos argumentos deben ser números.";
    }    
    if (b === 0) {
        return "Error: No se puede dividir por cero.";
    }    
    return a / b;
}




// Ejemplos
console.log(suma(5, 3));          
console.log(suma(5, '3'));        
console.log(resta(10, 4));        
console.log(resta(10, 'cuatro')); 
console.log(multiplicacion(7, 2)); 
console.log(division(7, 0)); 
