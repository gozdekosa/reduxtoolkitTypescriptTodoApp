import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import type { todoType } from '../types/types';
import { createTodo } from '../redux/todoSlice';

function TodoCreate() {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState<string>('');

  const handleCreateTodo = ()=>{
    if(newTodo.trim().length==0){
      alert('todo girmediniz')
      return;
    }

    const payload:todoType = {
      id: Math.floor(Math.random()*99999),
      content: newTodo
    }
    dispatch(createTodo(payload));
    setNewTodo('');
  }
  return (
    <div className='todo-create'>
        <input 
        value={newTodo}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setNewTodo(e.target.value)}
        placeholder='Todo Giriniz..' className='todo-input' type='text'/>
        <button onClick={handleCreateTodo} className='todo-create-button'>Oluştur</button>
    </div>
  )
}

export default TodoCreate