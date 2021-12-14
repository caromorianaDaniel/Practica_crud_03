export class Calculos{
    static getSuma(valor1: string, valor2: string) {
        throw new Error('Method not implemented.')
    }
    private _valor1: number
    private _valor2: number
    private _valor: string

    constructor(valor1:number,valor2:number,valor:string){
        this._valor1 = valor1
        this._valor2 = valor2
        this._valor = valor
    }

    suma(valor1:number,valor2:number){
        let suma = valor1 + valor2
        return suma
    }

    resta(){
        let _resta = this._valor1 - this._valor2
        return _resta
    }

    multiplicacion(){
        let _multiplicacion = this._valor1 - this._valor2
        return _multiplicacion
    }

    division(){
        let _division = this._valor1 - this._valor2
        return _division
    }

}
