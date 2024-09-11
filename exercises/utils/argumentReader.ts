import { isNotNumber } from "./checkNumber"
interface inputObj{
    target: number,
    inputArr: number[],
}
export const argumentReader = (args:String[]): inputObj=>{
    const length = args.length;
    let inputArr = [];
    let target = 0;
    if (length < 3 ) throw new Error("Incomplete input")
    if (isNotNumber(Number(args[2]))){
        throw new Error('The target is not a number')
    } else{
        target = Number(args[2]);    
    }  
    for (let i = 3; i < length; i++){
       let curr = Number(args[i]);
       if (isNotNumber(curr)) throw new Error('Invalid exercise data');
       inputArr.push(curr);
    }

    return{
        target,
        inputArr,
    }

    
}