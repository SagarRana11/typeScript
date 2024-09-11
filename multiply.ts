interface MultiplyValue{
    value1:number,
    value2:number,
}

const parseArgument = (args: String[]): MultiplyValue=>{
    if(args.length < 4) throw new Error('Not enough argument');
    if(args.length > 4) throw new Error('Too many arguments')
    
    if (!isNaN(Number(args[2]) ) && !isNaN(Number(args[3]))){
        return{
            value1: Number(args[2]),
            value2: Number(args[3])
        }
    }else{
        throw new Error("Provided values are not numbers")
    }     

}


const multiplier = (a:number, b:number , text:String)=>{
    console.log(text, a*b);
}

try {
    const {value1, value2} = parseArgument(process.argv)
    multiplier(value1, value2, `the multiplication of ${value1} and ${value2} is `)
} catch (error) {
    let errorMessage = 'Something went bad ';
    if (error instanceof Error){
        errorMessage += error.message;
        console.log(errorMessage)
    }
}