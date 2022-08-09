import React, { useState } from 'react'
import { Todo } from '../model'
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import './styles.css'
import TodoList from './TodoList'

type Props= {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo = ({todo, todos, setTodos}:Props) => {
  const handleDelete = (id:number) => {
    setTodos(todos.filter((todo) => todo.id !== id))

  }
  const handleDone = (id: number) => {
    setTodos(todos.map((todo)=>todo.id===id?{...todo,isCompleted :!todo.isCompleted}: todo)
    )
  }
  const handleUpdate = (e:React.FormEvent, id:number) => {
    e.preventDefault()
    setTodos(todos.map((todo) => (
      todo.id===id? {...todo,todo:updateTodo}: todo
      
    )))
    setUpdate(false)
  }
  const [update,setUpdate] = useState<boolean>(false)
  const [updateTodo,setUpdateTodo] = useState<string>(todo.todo)

  return (
    <form className='todos__single'
    onSubmit={(e) => handleUpdate(e,todo.id)}>
      {
        update? (
          <input value={updateTodo} onChange={(e) => setUpdateTodo(e.target.value)}
          className="todos__single--text"/>

        ):(
            todo.isCompleted? (
              <s className='todos__single--text'>{todo.todo}</s>
    
            ):(
              <span className='todos__single--text'>{todo.todo}</span>
    
            )

        )
      }
      
        
        <div>
            <span className='icon' onClick={() => {
              if (!update && !todo.isCompleted){
                setUpdate(!update)
              }
            }}>
                <AiFillEdit/>
            </span>
            <span className='icon' onClick={()=>handleDelete(todo.id)}>
                <AiFillDelete/>
            </span>
            <span className='icon' onClick={()=>handleDone(todo.id)}>
                <MdDone/>
            </span>
        </div>
    </form>
  )
}

export default SingleTodo