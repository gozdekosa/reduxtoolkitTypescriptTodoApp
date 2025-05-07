import React, { useState } from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import type { todoType } from '../types/types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../redux/todoSlice';

interface todoProps {
  todoProps: todoType
}

function Todo({todoProps}:todoProps) {
  const {id, content} = todoProps;

  const [editable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);

  const dispatch = useDispatch();

  const handleRemoveTodo = ()=>{
      dispatch(removeTodoById(id));
  }

  const handleUpdateTodo = ()=>{
      const payload:todoType = {
        id:id,
        content:newTodo
      }

      dispatch(updateTodo(payload));

      setEditable(false);
  }
  return (
    <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',
        border:'1px solid lightgray', marginTop:'25px', padding:'12px', borderRadius:'5px'
    }}>
        <div>
          {editable ? 
          <input value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewTodo(e.target.value)} className='todo-input' type='text'/> 
          : content }  
        </div>

        <div>
            <IoMdRemoveCircleOutline onClick={handleRemoveTodo} className='icons'/>
            
            {
              editable ? <FaCheck onClick={handleUpdateTodo} className='icons'/>:<FaRegEdit onClick={()=> setEditable(true)} className='icons'/>
            }
        </div>
    </div>

  )
}

export default Todo