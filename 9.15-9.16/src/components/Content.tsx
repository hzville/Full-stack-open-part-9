import { CoursePart } from "../types";
import Part from "../components/Part";

interface ContentProps {
  courses: CoursePart[];
}

const Content = ({courses}: ContentProps) => {

  return(
    <ul>
      {courses.map(course => (
        <li key={course.name}> 
          <Part course={course}/> 
        </li>
      ))}
    </ul>
  );
};

export default Content;