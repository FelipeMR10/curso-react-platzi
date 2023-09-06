import React from "react"
import { TodoContext }  from '../TodoContext'
import './TodoForm.css'

function TodoForm() {
    const {
        setOpenModal,
        AddTodo

    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        AddTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = (event) => {
        event.preventDefault()
        setOpenModal(false)
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    return (        
        <form onSubmit={onSubmit}>
            <label>Agrega tu nueva Tarea</label>
            <textarea
                placeholder="Escriba aqui su nueva Tarea"
                value={newTodoValue}
                onChange={onChange}
                required
            />
            <div className="TodoForm-buttonContainer">
                <button 
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
                >Cancelar</button>
                <button 
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                >Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm }