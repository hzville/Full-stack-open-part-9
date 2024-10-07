import { Course } from "../types";

interface ContentProps {
  courses: Course[];
}

const Content = ({courses}: ContentProps) => {

  return(
    <div>
      <ul>
        {courses.map(course => (
          <li>{course.name} {course.exerciseCount}</li>
        ))}
      </ul>
    </div>
  )
}


export default Content;