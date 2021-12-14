import {leerTeclado} from './util/entradaTeclado'
import {Calculos} from './util/Calculos'

let suma = async () =>{
    let valor1 = await leerTeclado('Introduzca un número:')
    let valor2 = await leerTeclado('Introduzca un número:')
    let suma = getSuma(Number(valor1),Number(valor2)) //Number(valor1) + Number(valor2)
    console.log(`El resultado de sumar ${valor1} y ${valor2} es ${suma}`)
}
let resta = async () =>{
    let valor1 = await leerTeclado('Introduzca un número:')
    let valor2 = await leerTeclado('Introduzca un número:')
    let resta = Number(valor1) - Number(valor2)
    console.log(`El resultado de restar ${valor1} y ${valor2} es ${resta}`)
}
let multiplicacion = async () =>{
    let valor1 = await leerTeclado('Introduzca un número:')
    let valor2 = await leerTeclado('Introduzca un número:')
    let multiplicacion = Number(valor1) * Number(valor2)
    console.log(`El resultado de multiplicar ${valor1} y ${valor2} es ${multiplicacion}`)
}
let division= async () =>{
    let valor1 = await leerTeclado('Introduzca un número:')
    let valor2 = await leerTeclado('Introduzca un número:')
    let division = Number(valor1) / Number(valor2)
    console.log(`El resultado de dividir ${valor1} y ${valor2} es ${division}`)
}

let main = async () => {
    /*console.log("1.Sumar")
    console.log("2.Restar")
    console.log("3.Dividir")
    console.log("4.Multiplicar")*/
    let valor
    do {
        console.log("1.Sumar")
        console.log("2.Restar")
        console.log("3.Dividir")
        console.log("4.Multiplicar")
        valor = await leerTeclado('¿Qué quiere hacer?')
        switch (valor) {
            case "Sumar":
                await suma();
                break
            case "Restar":
                await resta();
                break
            case "Multiplicar":
                await multiplicacion();
                break
            case "Dividir":
                await division();
                break
            case "Salir":
                break;
        }
    } while ( valor != "Salir")
}

main();