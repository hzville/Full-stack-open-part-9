import { useState, useEffect } from "react";
import Diary from "./components/Diary";
import diaryService from "./services/diaryServices";
import { DiaryEntry } from "./types";

function App() {
const [diarys, setDiarys] = useState<DiaryEntry[]>([]);

useEffect(() => {
  const fetchDiaries = async () => {
    const diaryData = await diaryService.getAllDiaries();
    setDiarys(diaryData);
  };
  fetchDiaries();
}, []);

  return (
    <>
      <b>Diary entries</b>
      {diarys.map( diary => (
        <Diary diary={diary} key={diary.id}/>
      ))}
    </>
  );
}

export default App;
