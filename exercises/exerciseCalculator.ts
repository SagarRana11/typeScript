import {argumentReader} from './utils/argumentReader'

interface WeeklyResults{
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: String,
    target: number,
    average: number,
}

export const calculateExercises = ( target:number, exer: number[]): WeeklyResults=>{
    const periodLength = exer.length;

    const NonTrainingDays = ():number=>{
        let count = 0;
       for (let i =0; i < periodLength; i++){
          if (exer[i] === 0) count++;
       }
       return count;
    }

    const trainingDays = periodLength - NonTrainingDays();
    const totalExerciseHour = exer.reduce((e, sum)=>e + sum , 0)
    const average = totalExerciseHour/periodLength;
    let ratingDescription = '';

    let rating = 0;

    let success = false;

    const calculateRating = (average:number)=>{
        if (average < target && average > target - 0.5){
            ratingDescription = 'not too bad but could be better';
            rating = 2;
        }
        else if (average >= target ){
            ratingDescription = 'excellent you met the weekly targets';
            rating = 3;
            success = true;
        }else{
            ratingDescription = 'ver poor';
            rating = 1;
        }
    }
    calculateRating(average)



    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average,
    }
}


if (require.main === module){
    try {
        const {target , inputArr} = argumentReader(process.argv);
        console.log(calculateExercises(target, inputArr))
    } catch (error) {
        let errorMessage = "Something went wrong :"
        if (error instanceof Error){
            errorMessage += error.message;
    
        }
        console.log(errorMessage);
    }
}
