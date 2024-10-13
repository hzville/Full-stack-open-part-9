import axios from "axios";
import { DiaryEntry } from "../types";

const diariesApiUrl = 'http://localhost:3000/api/diaries';

const getAllDiaries = async () => {
    const diaries = await axios.get<DiaryEntry[]>(diariesApiUrl);
    return diaries.data;
};

export default {getAllDiaries};