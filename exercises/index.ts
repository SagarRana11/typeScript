import express from 'express';
import {calculateBmi} from './bmiCalculator';
import {calculateExercises} from './exerciseCalculator';
const app = express();
app.use(express.json());
app.use('/hello', (_req, res)=>{
    res.send("hello Full Stack");
});

app.use('/bmi', (_req, res)=>{
    const weight = Number(_req.query.weight);
    const height = Number(_req.query.height);

    if (!height || !weight|| isNaN(height) || height <= 0 || weight <= 0){
        res.status(400).send('Please provide both height and weight.')
    }
    
    try {
        const bmiObject = calculateBmi( height,weight);
        res.status(201).send(bmiObject);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.post('/exercise', (_req, _res)=>{
    //   eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
   const {daily_exercises, target} = _req.body;
   console.log(daily_exercises);

   if (!daily_exercises || !target || !Array.isArray(daily_exercises) || isNaN(Number(target))) {
    _res.status(400).send('Please provide an array for daily_exercises and a valid number for target.');
}

   try{
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
       const exerciseObject = calculateExercises(Number(target), daily_exercises);
      _res.status(201).send({exerciseObject});
   }catch(error){
       console.log(error);
       _res.status(401).send({ error: "malformatted parameters"});
   }

});

const port = 2001;
app.listen(port, ()=>{
    console.log(`app live at http://localhost:${port}`)
});
