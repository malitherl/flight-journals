import axios from 'axios';
import { DiaryEntry } from './App';

export const getAllDiaries = () => {
    return axios.get<DiaryEntry[]>('http://localhost:3001/diaries').then(response => {
        return (response.data)
      })
}

export const addDiary = (diary: DiaryEntry | undefined) => {
    return axios.post<DiaryEntry>('http://localhost:3001/diaries', diary).then(response => response.data)
}

