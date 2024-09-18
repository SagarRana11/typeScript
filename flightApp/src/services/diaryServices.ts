import diaryData from '../../data/entries';

import { NonSensitiveDiaryEntry, DiaryEntry, newDiaryEntry} from '../types';

//type assertion done here
const diaries:DiaryEntry[] = diaryData;

const getEntries =(): DiaryEntry[]=>{
    return diaries;
};

const getNonSensitiveEntires = ():NonSensitiveDiaryEntry[]=>{
    return diaries.map(({id, date, weather, visibility})=>({
        id,
        date,
        weather,
        visibility,
    }));
};

const findById = (id: number): DiaryEntry | undefined =>{
    const entry = diaries.find(d=> d.id ===id);
    return entry;
};

const addDiary = (entry : newDiaryEntry ): DiaryEntry =>{
    const newDiaryEntry = {
        id: Math.max(...diaries.map(d=> d.id)) + 1,
        ...entry
    };
    diaries.push(newDiaryEntry);
    return newDiaryEntry;
};
  
  export default {
    getEntries,
    addDiary,
    getNonSensitiveEntires,
    findById,
  };