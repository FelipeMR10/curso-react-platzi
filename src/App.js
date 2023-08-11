import React from 'react';
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'

// const tareasDefault = [
//   { text: 'Comer comida', completed: true },
//   { text: 'Terminar el curso de React.js', completed: false },
//   { text: 'Hacer Ejercicio', completed: false },
//   { text: 'Leer un libro', completed: false },
//   { text: 'APRENDER A DECIR NO', completed: false },

// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(tareasDefault))

// localStorage.removeItem('TODOS_V1')

function App() {
  const localStorageTareas = localStorage.getItem('TODOS_V1')
  let parsedTodos
  if (!localStorageTareas) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = []
  } else {
    parsedTodos = JSON.parse(localStorageTareas)
  }
  //let parsedTodos = JSON.parse(localStorageTareas)

  const [todos, setTodos] = React.useState(parsedTodos)
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()
    return todoText.includes(searchText)
  })

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  const todoDone = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const todoDelete = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1)
    //delete newTodos[todoIndex]
    saveTodos(newTodos)
  }

  return (
    <>

      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
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
    </>
    //NOTA: es lo mismo si se pone 👇🏻, que es para definir lo que renderiza el root,ya que no puede retornar componentes directamente estos deben estar envuentos y dentro de este "envoltorio" si se pueden usar todos los componentes que sean necesarios 
    //<React.Fragment>
    // 	Componentes
    //</React.Fragment>
  );
}


export default App;
