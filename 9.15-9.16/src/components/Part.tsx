import { CoursePart } from "../types";
import { assertNever } from "../utils/utils";


const Part = ({course}: {course: CoursePart}) => {
  switch (course.kind) {
    case "basic":
      return(
        <p>
          <b>{course.name} {course.exerciseCount}</b>
          <br/>
          <i>{course.description}</i>
        </p>
      );
    case "group":
      return(
        <p>
          <b>{course.name} {course.exerciseCount}</b>
          <br/>
          group exercises {course.groupProjectCount}
        </p>
      );
    case "background":
      return(
        <p>
          <b>{course.name} {course.exerciseCount}</b>
          <br/>
          <i>{course.description}</i>
          <br/>
          submit to {course.backgroundMaterial}
        </p>
      );
    case "special":
      return(
        <p>
          <b>{course.name} {course.exerciseCount}</b>
          <br/>
          <i>{course.description}</i>
          <br/>
          required skills: {course.requirements.join(', ')}
        </p>
      )
    default:
      return assertNever(course);
  }
};

export default Part;