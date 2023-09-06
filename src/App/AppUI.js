import React from 'react'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { TodoLoading } from '../TodoLoading'
import { TodoError } from '../TodoError'
import { EmpyTodos } from '../EmpyTodos'
import { CreateTodoButton } from '../CreateTodoButton'
import { Modal } from '../Modal'
import { TodoContext } from '../TodoContext'

function AppUI(/*aqui habian props*/) {
    const {
        loading,
        error,
        searchedTodos,
        todoDone,
        todoDelete,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)

    return (
        <>
            <TodoCounter /*aqui habian props*/ />
            <TodoSearch /*aqui habian props*/ />

            <TodoList>
                {loading && <TodoLoading />}
                {error && <TodoError />}
                {(!loading && searchedTodos.length === 0) && <EmpyTodos />}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => todoDone(todo.text)}
                        onDelete={() => todoDelete(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
            
            {openModal && (
                <Modal>
                    Add Tarea............
                </Modal>
            )}

        </>
    );
}

export { AppUI }