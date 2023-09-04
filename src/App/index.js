import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

function App() {
  return (
    <TodoProvider>
      <AppUI /*aqui habian props*/ />
    </TodoProvider>
  )
}

export default App;