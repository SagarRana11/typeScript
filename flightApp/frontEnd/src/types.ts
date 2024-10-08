
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
export interface DiaryEntry{
    id: string,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
}  

export type newDiaryEntry = Omit<DiaryEntry, 'id'>

