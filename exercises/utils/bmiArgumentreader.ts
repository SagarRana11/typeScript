import {isNotNumber} from '../utils/checkNumber'
interface bodyParameters{
    height:number,
    weight:number,
}

export const argumentReader =(args:String[]):bodyParameters=>{
    const length = args.length;
    if (length < 3) throw new Error('Invalid input')
    
    const height = Number(args[2]);
    const weight = Number(args[3]);
    if (isNotNumber(height) && isNotNumber(weight)) throw new Error('malformatted parameters')    
    
    return {
        height,
        weight,
    }    
}