import { useRef, useState } from 'react'
import React from 'react';
import './App.css'

let nombreTodo = 0;

function App() {
  let [todos, setTodos] = React.useState([]);
  const ref = useRef();

  function addTodos() {
    let task = ref.current.value;
    console.log(task);
    setTodos([...todos, {id:task,value:task}]);
    nombreTodo++;
  }

  function removeTodos(todo) {
    setTodos(todos.filter((_,i) => i.id !== todo.id));
    nombreTodo--
 }

  return (

    <div>
      <div>You have {nombreTodo} Todos</div>
      <div>
        <input type="text" placeholder='Enter item...' id="newInput" ref={ref}/>
        <button onClick={() => addTodos()}>Add</button>
      </div>
      <span>
        <ul>
        {todos.map((item) => (
          <li>
            <label htmlFor="{`${item.id}'}">{item.value}</label>                
            <button onClick={removeTodos()}>X</button>
          </li>))}
        </ul>
      </span>
    </div>
      
  )
}

export default App
