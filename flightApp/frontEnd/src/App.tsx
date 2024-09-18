import { getData, addEntry} from './services/diary'
import { useState, useEffect } from 'react'
import {DiaryEntry, Visibility, Weather} from './types';
const App = () => {
  const [diaryEntry, setDiaryEntry] = useState<DiaryEntry[]>([])
  const [date, setDate] = useState<string>('');
  const [visibility, setVisibility] = useState<Visibility>('ok');
  const [weather, setWeather] = useState<Weather>('cloudy');
  const [comment, setComment] = useState<string>('');
  useEffect(()=>{
    async function fetchData() {
      const response = await getData();
      setDiaryEntry(response)
    }
    fetchData();
  },[])

  const handleSubmit =async(event: React.SyntheticEvent )=>{
    event.preventDefault()
    const entryToAdd = {
       date,
       weather,
       visibility,
       comment
    }
    const data = await addEntry(entryToAdd);
    setDiaryEntry(diaryEntry.concat(data))
    setComment('')
    setDate('')
  }
  const handleRadioChangeW =(event:  React.ChangeEvent<HTMLInputElement>)=>{
    event.preventDefault();
    setWeather(event.target.value as Weather)
  }
  const handleRadioChangeV =(event:  React.ChangeEvent<HTMLInputElement>)=>{
    event.preventDefault();
    setVisibility(event.target.value as Visibility)
  }
  return (
    <div>
      Diary entries
      {diaryEntry.map(entry =>{
        return (
          <div>
            <h2>{entry.date}</h2>
            <p>visibility : {entry.visibility}</p>
            <p>weather : {entry.weather}</p>
          </div>
        )
      })}
      <form onSubmit={handleSubmit}>
        <label>Date</label>
        <input type='date' value={date} onChange={(e)=> setDate(e.target.value)} />
        <br></br>
        <label>Weather</label>
        <label>
          <input
            type="radio"
            name="weather"
            value="sunny" 
            checked={weather === "sunny"}
            onChange={handleRadioChangeW}
          />
          Sunny
        </label>

        <label>
          <input
            type="radio"
            name="color"
            value="rainy"
            checked={weather === "rainy"}
            onChange={handleRadioChangeW}
          />
          Rainy
        </label>

      <label>
        <input
          type="radio"
          name="color"
          value="cloudy"
          checked={weather === "cloudy"}
          onChange={handleRadioChangeW}
        />
        Cloudy
      </label>

      <label>
        <input
          type="radio"
          name="color"
          value="yellow"
          checked={weather === "windy"}
          onChange={handleRadioChangeW}
        />
        Windy
      </label>

        <br></br>

        <label>Visibility</label>
        <label>Visibility</label>
        <label>
          <input
            type="radio"
            name="visibility"
            value="great"
            checked={visibility === 'great'}
            onChange={handleRadioChangeV}
          />
          Great
        </label>

        <label>
          <input
            type="radio"
            name="visibility"
            value="good"
            checked={visibility === 'good'}
            onChange={handleRadioChangeV}
          />
          Good
        </label>

        <label>
          <input
            type="radio"
            name="visibility"
            value="ok"
            checked={visibility === 'ok'}
            onChange={handleRadioChangeV}
          />
          Ok
        </label>

        <label>
          <input
            type="radio"
            name="visibility"
            value="poor"
            checked={visibility === 'poor'}
            onChange={handleRadioChangeV}
          />
          Poor
        </label>
        <br></br>

        <label>comments</label>
        <input value={comment} onChange={(e)=> setComment(e.target.value)} />
        <button type='submit'>add</button>

      </form>
    </div>
  )
}

export default App
