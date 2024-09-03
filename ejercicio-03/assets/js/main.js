const calculateFactorial = (numero) => {
    result = 1;
    for(let i = numero; i > 1; i--){

        result *= i;
    }
    return result;
}

const requestNumber = () => {
    let valor = prompt("Ingresa un numero no negativo para calcular su factorial:")
    return parseInt(valor);
}


const main = () => {
    let numero = requestNumber();
    let resultado = calculateFactorial(numero);
    if(numero < 0){
    alert("El numero debe ser positivo")
    return;
    } else {
    alert("El factorial del numero es " + resultado )
    }
}

main();
