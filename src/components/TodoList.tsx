import Todo from './Todo'
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import type { todoType } from '../types/types'

function TodoList() {
  const { todos } = useSelector((state:RootState) => state.todo)
  return (
    <div>
      { todos && todos.map((todo:todoType)=> (
        <Todo key={todo.id} todoProps ={todo}/>
      ))}
       
    </div>
  )
}

export default TodoList