import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue) return;

    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    }
    setTodos([...todos, newTodo]);

    setInputValue("");
  };

  return (
    <div className="App">
      <div>
        <h2>Todoリスト with Typescript</h2>
        <form onSubmit={(e) => {handleSubmit(e)}}>
          <input type="text" onChange={(e) => {handleChange(e)}} className="inputText" value={inputValue} />
          <input type="submit" value="作成" className='submitButton' />
        </form>

        <ul className='todoList'>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.inputValue}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
