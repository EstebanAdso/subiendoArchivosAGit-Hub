//Variables
//var -- una variable que puede tomar otro valor
//let -- una variable que puede tomar otro valor. solo que este es mas moderno y mas usado
//const- constante -- siempre tiene que tener el mismo valor


//camelCase que significa que la primera letra de cada palabra sera en mayuscula.
// si en javaScript es && y no ||

const Numero1 = document.getElementById("operador1") // llamando el id del html
const Operador = document.getElementById("operacion") // + - * /
const Numero2 = document.getElementById("operador2")
const Boton = document.getElementById("btn")
const parrafoResultado = document.getElementById("pResultado")


Boton.addEventListener("click",calcular)

function calcular (){
    const operando = Operador.value;// Que toma el valor que le escriben
    const num1 =parseFloat(Numero1.value);
    const num2 =parseFloat(Numero2.value);
    

    if( operando == "+" || operando == "-" || operando == "*" || operando == "/"){
        let resultado;
        switch (operando) {
            case "+":resultado = num1+num2;
                break;
            case "-":resultado = num1-num2;
                break;
            case "*":resultado = num1*num2;
                break;
            case "/":resultado = num1/num2;
                break;       
        }
        console.log(resultado)
        parrafoResultado.innerText = " el resultado es =" + resultado
    }else{
        console.log("no va a funcionar ")
        parrafoResultado.innerText ="sintaxis invalida"
    }
    
    
    console.log("diste click en el boton")
    
}