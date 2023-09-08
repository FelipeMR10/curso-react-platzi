import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    //console.log(completed, total)
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext)
    return (
        <h1 className="TodoCounter">
            Has Completado <span>{completedTodos}</span> de <span>{totalTodos}</span> Tareas           
        </h1>
    );
}

export { TodoCounter }

 {/* {completedTodos === totalTodos ? (
                <>
                    Felicidades por Completar Todas tus Tareas! 🥳
                </>
            ) : (
                <>
                    Has Completado <span>{completedTodos}</span> de <span>{totalTodos}</span> Tareas
                </>
            )} */}