import './CreateTodoButton.css'

export function CreateTodoButton( {setOpenModal} ) {
    return(
        <button className="CreateTodoButton" 
        onClick={
            () => {
                setOpenModal(state => !state)
            }           
        }
        >+</button>
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