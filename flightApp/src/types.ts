import {z} from 'zod';
import { NewEntrySchema } from './utils';
export enum Weather{
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Stormy = 'stormy',
    Windy = 'windy',
}
export enum Visibility {
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor = 'poor',
  }
export interface DiaryEntry extends newDiaryEntry{
    id: number,
}

export type NonSensitiveDiaryEntry = Omit<DiaryEntry , 'comment'>;
export type newDiaryEntry = z.infer<typeof NewEntrySchema>;