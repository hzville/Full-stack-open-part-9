import { DiaryEntry } from "../types";

const diaryStyle = {
  border: '2px solid black',
  borderRadius: '10px',
  padding: '10px',
  margin: '10px 0',
  width: 'fit-content',
};

const Diary = ({diary}:{diary: DiaryEntry}) => {
  return (
    <>
      <div style={diaryStyle}>
        <p>
          <b>
            {diary.date}
          </b>
        </p>
        visibility: {diary.visibility}
        <br/>
        weather: {diary.weather}
      </div>
    </>
  );
};

export default Diary;