
const Part= (props: any) => {
    
    return(
        <div>
          {props.map((part: { kind: any; name: string; description: string; exerciseCount: number ; backroundMaterial: string; groupProjectCount: number}) => {
                switch(part.kind) {
                    case "basic": 
                    return <div> <h3>{part.name}</h3> <p>{part.description}</p> <p>project exercises: {part.exerciseCount}</p> </div>;
                    case "background":
                    return <div> <h3>{part.name}</h3> <p>{part.description}</p> <p>{part.backroundMaterial}</p><p>project exercises: {part.exerciseCount}</p></div>
                    case "group": 
                    return <div> <h3>{part.name}</h3> <p>{part.groupProjectCount}</p> <p>project exercises: {part.exerciseCount}</p> </div>
                }


            })}
        </div>
    )
}

export default Part;