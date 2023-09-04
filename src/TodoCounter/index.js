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
            {completedTodos === totalTodos ? (
                <>
                    Felicidades por Completar Todas tus Tareas! 🥳
                </>
            ) : (
                <>
                    Has Completado <span>{completedTodos}</span> de <span>{totalTodos}</span> Tareas
                </>
            )}
        </h1>
        // <h1 className="TodoCounter">{
        //     completed == total 
        //       ? `Felicidades por Completar Todas tus Tareas! 🥳`
        //       : `Has Completado ${<span>${completed}</span>} de ${<span> {total} </span>} Tareas`  }</h1>
        //<h1 className="TodoCounter">Has completado <span>{completed}</span> de <span> {total} </span> Tareas</h1>
    );
}

export { TodoCounter }