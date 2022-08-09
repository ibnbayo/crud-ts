import React from 'react';
import './App.css';
import InputField from './components/InputField';
import { useState } from 'react';
import { Todo } from './model';
import TodoList from './components/TodoList';

// let role: [string, number];
// let age: number | boolean;
// age = true;
// role = ["fire", 6];


// type Person = {
//   name: string;
//   age: number;
//   isAlive?: boolean;
// }
// let person: Person = {
//   name: "Agba",
//   age: 12,
// };

// let printCar: (car: string) => string;


// function printMonth(month: string) {
//   console.log(month)
// }
// printMonth("July")

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos,{id: Date.now(), todo, isCompleted:false}])
      setTodo("")
    
    }
  };

  console.log(todos)

  return (
    <div className="App">
      <header className="heading">
       TASKS
      </header>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
