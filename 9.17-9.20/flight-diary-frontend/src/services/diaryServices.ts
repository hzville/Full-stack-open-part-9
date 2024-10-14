import axios from "axios";
import { DiaryEntry, NewDiaryEntry } from "../types";

const diariesApiUrl = 'http://localhost:3000/api/diaries';

const getAllDiaries = async () => {
    const diaries = await axios.get<DiaryEntry[]>(diariesApiUrl);
    return diaries.data;
};

const addNewDiary = async (newDiaryObject: NewDiaryEntry) => {
  const response = await axios.post(diariesApiUrl, newDiaryObject);
  return response.data;
};

export default {getAllDiaries, addNewDiary};