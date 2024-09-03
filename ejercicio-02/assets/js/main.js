
const plus = () => {
    let numeros = [requestNumber]
    let resultado = parseInt(numeros[1]) + parseInt(numeros[2]);
    return resultado;
};
const subtract = () =>{
    let numeros = [requestNumber]
    let resultado = parseInt(numeros[1]) - parseInt(numeros[2]);
    return resultado;
} ;

const multiply = () =>{
    let numeros = [requestNumber]
    let resultado = parseInt(numeros[1]) * parseInt(numeros[2]);
    return resultado;
} ;
const split = () => {
    let numeros = [requestNumber]
    if(numeros[1]/numeros[2] === 0){
        return "No se puede dividir por cero";
    } else {
        let resultado = parseInt(numeros[1]) / parseInt(numeros[2]);
    }
    return resultado;
};
const requestNumber = () => {
    let valor1 = prompt("Escribe el primer numero",1);
    let valor2 = prompt("Escribe el segundo numero",1);
    
    return [parseInt(valor1),parseInt(valor2)];
};

const selectOperation = () => {
    let resultado;
    let seleccion = prompt("Escribe tu seleccion: " + " " +
        "+. Suma" + " " +
        "-. Resta" + " " +
        "*. Multiplicación" + " " +
        "/. División"
    )
    switch(seleccion){
        case "+":
            resultado = plus();
        break;
        case "-":
            resultado = subtract();
        break;
        case "*":
            resultado = multiply();
        break;
        case "/": 
            resultado = split();
        break;
    }
    return resultado;
};

const main = () => {
    let numbers = [requestNumber()]  
    let resultado = selectOperation();
    alert("El resultado es: " + `${resultado}`)
}

main();
