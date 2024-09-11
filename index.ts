import express from 'express';
import { calculator, Operation } from './calculator';
const app = express();

app.use(express.json());
app.get('/ping', (_req, res)=>{
    res.send('pong');
});


app.post('/calculate', (_req, _res)=>{
   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
   const {value1, value2, op} = _req.body;
   const result = calculator(Number(value1), Number(value2) , op as Operation);
   _res.send({result});
});

const port = 3001;
app.listen(port, ()=>{
    console.log(`the application is live at http://localhost:${port}`);
})
