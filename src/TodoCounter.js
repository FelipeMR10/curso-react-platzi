import './TodoCounter.css'
function TodoCounter({ total, completed }) {
    //console.log(completed, total)
    return (

        <h1 className="TodoCounter">
            {completed === total ? (
                <>
                    Felicidades por Completar Todas tus Tareas! 🥳
                </>
            ) : (
                <>
                    Has Completado <span>{completed}</span> de <span>{total}</span> Tareas
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