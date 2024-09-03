
    const plus = (numeros) => {
        let resultado = parseInt(numeros[0]) + parseInt(numeros[1]);
        return resultado;
    };

    const subtract = (numeros) =>{
        let resultado = parseInt(numeros[0]) - parseInt(numeros[1]);
        return resultado;
    } ;

    const multiply = (numeros) =>{
        let resultado = parseInt(numeros[0]) * parseInt(numeros[1]);
        return resultado;
    } ;

    const split = (numeros) => {
        let resultado;
        if(parseInt(numeros[0]/parseInt(numeros[1]) === 0 )){
            resultado = NaN;
        } else{
            resultado = parseInt(numeros[0]) / parseInt(numeros[1]);
        }

        return resultado;
    };

    const requestNumber = () => {
        let valor1 = prompt("Escribe el primer numero",1);
        let valor2 = prompt("Escribe el segundo numero",1);
        
        return [parseInt(valor1),parseInt(valor2)];
    };

    const selectOperation = (numeros) => {
        let resultado;
        let seleccion = prompt("Escribe tu seleccion: " + " " +
            "+. Suma" + " " +
            "-. Resta" + " " +
            "*. Multiplicación" + " " +
            "/. División"
        )
        switch(seleccion){
            case "+":
                resultado = plus(numeros);
            break;
            case "-":
                resultado = subtract(numeros);
            break;
            case "*":
                resultado = multiply(numeros);
            break;
            case "/": 
                resultado = split(numeros);
            break;
            default:
                resultado = "p";
                alert("La opcion no es valida")
            break;
        }
        return resultado;
    };

    const main = () => {
        let numeros = requestNumber();  
        let resultado = selectOperation(numeros);
        if(resultado === "p"){
            return;
        }else if(isNaN(resultado)){
            alert("No se puede dividir entre 0")
        } else {
            alert("El resultado es: " + `${resultado}`)
        }
    }

    main();
