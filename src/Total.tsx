import { Course } from "./App";

interface ContentProps {
    courses: Course[]
}



const Total = ( props: ContentProps) => {

    const completeValues = props.courses.reduce((prev, current) => prev + current.exerciseCount, 0)



    return (
        <p>
            Total number of exercises: {completeValues}
        </p>
    )


}

export default Total


