import React, {useState} from 'react';
import './App.css';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'

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

      const columns = [
        {
          Header: 'Description',
          accessor: 'desc' 
        },
        {
          Header: 'Date',
          accessor: 'date'
        },
        {
          Cell: row => (
              <button onClick={() => deleteTodo(row.index)}>Delete</button>
          )
        }
      ]

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
          <ReactTable data={todos} columns={columns} defaultPageSize={10} filterable={true}/>
          
          
         {/*<Todotable todos={todos} deleteTodo={deleteTodo} />*/}
      

    </div>
  );
}

export default App;
