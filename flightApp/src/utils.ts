import { newDiaryEntry, Weather, Visibility } from "./types";
import {z} from 'zod';

export const NewEntrySchema = z.object({
    weather: z.nativeEnum(Weather),
    visibility: z.nativeEnum(Visibility),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date format",
      }),
    comment: z.string().optional()
  });

 
export const toNewDiaryEntry = (object: unknown): newDiaryEntry => {
    return NewEntrySchema.parse(object);
};
// const toNewDiaryEntry = (object: unknown): newDiaryEntry => {
//     if ( !object || typeof object !== 'object' ) {
//         throw new Error('Incorrect or missing data');
//     }
//     if ('comment' in object && 'date' in object && 'weather' in object && 'visibility' in object)  {
//         const newEntry: newDiaryEntry = {
//         comment: parseComment(object.comment),
//         date: parseDate(object.date),
//         weather: parseWeather(object.weather),
//         visibility: parseVisibility(object.visibility)
//         };
//         return newEntry;

//     }  
//   };
// const parseComment = (comment: unknown): string=>{
//     if (!comment && !isString(comment)){
//         throw new Error('Incorrect or missing comment');
//     }
//     return comment;
// };

// const parseDate = (date: string):string=>{
//     if (!date || isString(date) || !isDate(date)){
//         throw new Error('Incorrect date');
//     }
//     return date;
// };

// const parseWeather = (weather : unknown): Weather=>{
//     if(!weather || !isString(weather) || !isWeather(weather)){
//         throw new Error('Incorrect or missing weather: ' + weather);
//     }
//     return weather;
// };
// const parseVisibility = (visibility: unknown): Visibility => {
//     if (!visibility || !isString(visibility) || !isVisibility(visibility)) {
//         throw new Error('Incorrect or missing visibility: ' + visibility);
//     }
//     return visibility;
//   };

// // type guards                      // type predicate
// const isString = (text: unknown):text is string=>{
//     return typeof text === 'string' || text instanceof String;
// };
// const isDate = (date: unknown): boolean=>{
//     return Boolean(Date.parse(date));
// };
// const isWeather = (param: string ): param is Weather =>{
//     return Object.values(Weather).map(v => v.toString()).includes(param);
// };
// const isVisibility = (param: string): param is Visibility => {
//     return Object.values(Visibility).map(v => v.toString()).includes(param);
//   };

// export default toNewDiaryEntry;


