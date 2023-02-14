import axios from 'axios';
import { SetStateAction, SyntheticEvent, useEffect, useState } from 'react';
import './App.css';
import { addDiary, getAllDiaries } from './diaryService';

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

export enum Weather {
  Sunny = "sunny",
  Rainy = "rainy",
  Windy = "windy", 
  Stormy = "stormy",
  Cloudy = "cloudy"
}

export enum Visibility  {
  Great = "great",
  Good = "good", 
  Okay = "okay", 
  Poor = "poor"
}



function App() {

  
 const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
 const [newEntry, setNewEntry] = useState<DiaryEntry>();

 const [weather, setWeather] = useState('')
 const [visibility, setVisibility] = useState('');
 const [comment, setComment] = useState('');
 const [date, setDate] = useState('');


  useEffect(() => {
   getAllDiaries().then(data => {setDiaries(data)})
  }, [])

  const createNewDiary = ( event: SyntheticEvent) => {
    event.preventDefault();
    addDiary(newEntry).then(response => {
      setDiaries(d => d.concat(response))
    })
  }

  const handleVisibility = (event: { target: { value: SetStateAction<string>; }; }) => {
    setVisibility(event.target.value)
  }
  const handleWeather = (event: { target: { value: SetStateAction<string>; }; }) => {
    setWeather(event.target.value)
  }
  const handleComment = ( event: { target: { value: SetStateAction<string>; }; }) => {
    setComment(event.target.value)
  } 
  const handleDate = (event: { target: { value: SetStateAction<string>; }; }) => {
    setDate(event.target.value)
  }

  return (
    <div className="App">
      {diaries.map(d => <div>{d.id}</div>)}

      <form onSubmit={createNewDiary}>
        <input type='date' name='date' onChange={handleDate} value={date}/>
        <label>visibility</label>
          <input type='radio' value='great' name= 'great' onChange={handleVisibility}/>
          <input type='radio' value='good' name= 'good' onChange={handleVisibility}/>
          <input type='radio' value='okay' name= 'okay' onChange={handleVisibility}/>
          <input type='radio' value='poor' name= 'poor' onChange={handleVisibility}/>
        <label>weather</label>
          <input type='radio' value='sunny' name= 'sunny' onChange={handleWeather}/>
          <input type='radio' value='rainy' name= 'rainy' onChange={handleWeather}/>
          <input type='radio' value='cloudy' name= 'cloudy' onChange={handleWeather}/>
          <input type='radio' value='windy' name= 'windy' onChange={handleWeather}/>
          <input type='radio' value='stormy' name= 'stormy' onChange={handleWeather}/>
        <label>comment</label>
        <input type="text" value={comment} onChange={handleComment}/>
      </form>
      <button type="submit"></button>
    </div>
  );
}

export default App;
