import { CoursePart } from "./App";
import Part from "./Part";

interface ContentProps {
    courses: CoursePart[];
}

const Content = (props: ContentProps) => {

    return (
        <div>
            {props.courses.map(course => <Part course={course} />)}
        </div>
    )


}

export default Content;