import { useState } from "react";
import diaryService from "../services/diaryServices";
import { DiaryEntry } from "../types";

interface AddDiaryFormProps {
  setDiarys: React.Dispatch<React.SetStateAction<DiaryEntry[]>>;
}

const AddDiaryForm = ({setDiarys}: AddDiaryFormProps) => {
  const [date, setDate] = useState('');
  const [visibility, setVisibility] = useState('');
  const [weather, setWeather] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const newDiaryObject = {
      date: date,
      visibility: visibility,
      weather: weather,
      comment: comment,
    };

    await diaryService.addNewDiary(newDiaryObject);
    const diaryData = await diaryService.getAllDiaries();
    setDiarys(diaryData);

    setDate('');
    setVisibility('');
    setWeather('');
    setComment('');
  };

  return(
    <div>
      <p><b>Add new entry</b></p>
        <form onSubmit={handleSubmit}>
          date <input value={date} onChange={({target}) => setDate(target.value)}/>
          <br/>
          visibility <input value={visibility} onChange={({ target }) => setVisibility(target.value) }/>
          <br/>
          weather <input value={weather} onChange={({target}) => setWeather(target.value)}/>
          <br/>
          comment <input value={comment} onChange={({target}) => setComment(target.value)}/>
          <br/>
          <button type="submit"> Add </button>
        </form>
      </div>
  );
};

export default AddDiaryForm;