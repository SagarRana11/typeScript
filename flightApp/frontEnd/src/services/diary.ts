import axios from 'axios'
import {DiaryEntry, newDiaryEntry} from '../types'
const baseUrl = 'http://localhost:3000/api/diaries/';

export const getData = async(): Promise<DiaryEntry[]>=>{
    try {
        const response = await axios.get<DiaryEntry[]>(baseUrl);
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error);
        throw error;
    }

}

export const addEntry = async(diaryData: newDiaryEntry): Promise<DiaryEntry>=>{
    try {
        const response = await axios.post<DiaryEntry>(baseUrl, diaryData );
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error);
        throw error;
    }

}