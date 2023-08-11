import './CreateTodoButton.css'

export function CreateTodoButton() {
    return(
        <button className="CreateTodoButton" 
        onClick={
            (event)=> {
                console.log('Nueva tarea')
                console.log(event)
                console.log(event.target)
            }            
        }>
        +</button>
    );
}

// import { useState } from "react";
// function CreateTodoButton(){
//     const [count, setCounter] = useState(0)
    
//     const handle = () => {
//         setCounter(count + 1)
//     }
    
//     return(
//         <button onClick={handle}>{count} Tarea(s), Agregar(+)</button>
//     )
// }

 //return { CreateTodoButton }; 