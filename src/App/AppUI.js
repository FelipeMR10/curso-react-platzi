import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { TodoError } from '../TodoError'
import { TodoLoading } from '../TodoLoading'
import { EmpyTodos } from '../EmpyTodos'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoContext } from '../TodoContext'

function AppUI(/*aqui habian props*/) {
    return (
        <>
            <TodoCounter /*aqui habian props*/ />
            <TodoSearch /*aqui habian props*/ />

            <TodoContext.Consumer >
                {({
                    loading,
                    error,
                    searchedTodos,
                    todoDone,
                    todoDelete

                }) => (
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
                )}
            </TodoContext.Consumer>

            <CreateTodoButton />
            {/* <Modal>
                Add Tarea
            </Modal> */}
        </>
    );
}

export { AppUI }