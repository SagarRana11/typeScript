import {argumentReader} from './utils/bmiArgumentreader'
interface bmiStatus{
    weight: number,
    height: number,
    bmi: String 
}

export const calculateBmi = (height: number, weight: number): bmiStatus=>{
    const bmi = weight / ((height/100)*(height/100));

    if (bmi < 18 ){
        return {
            weight,
            height, 
            bmi: "low weight"
        };
    }else if ( bmi > 18 && bmi < 24){
        return {
            weight,
            height, 
            bmi: "Normal range"
        };    
    }
        else {
            return {
                weight,
                height, 
                bmi: "high range"
            };    
        }
}
if (require.main === module){
    try {
        const {height, weight} = argumentReader(process.argv);
        console.log(calculateBmi(height, weight));
    } catch (error) {
        let errorMessage = "Something went wrong :"
        if (error instanceof Error){
            errorMessage += error.message;
    
        }
        console.log(errorMessage);
    }
}

