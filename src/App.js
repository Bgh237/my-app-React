import React, {useState} from 'react';
import './App.css';
import Todotable from './components/Todolist';

function App() {
      
      const [todo, setTodo] = useState({desc: '', date: ''});
      const [todos, setTodos] = useState([]);

      const addTodo = (event) => {
        event.preventDefault();
        setTodos([{desc: todo.desc, date: todo.date}, ...todos])
      }

      const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value});
      }      

      const deleteTodo = (row) => {
        setTodos(todos.filter((_todo, index) => row !== index))
      }

      return (
        
        <div className="App">
          <header className="App-header">
          Simple Todolist
          </header>
          <form onSubmit={addTodo}>
            Description: <input type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
            Date: <input type="date" name="date" value={todo.date} onChange={inputChanged}/>
            <input type="submit" value="Add" />
          </form>
          <Todotable todos={todos} deleteTodo={deleteTodo} />
          
         {/* <Todotable todos={todos} deleteItem={deleteItem}/> */}
      

    </div>
  );
}

export default App;
