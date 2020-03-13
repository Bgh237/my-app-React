import React, {useState} from 'react';
import './App.css';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Tooltip from '@material-ui/core/Tooltip';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import Grid from '@material-ui/core/Grid';

function App() {
      
      const [todo, setTodo] = useState({desc: '', date: new Date()});
      const [todos, setTodos] = useState([]);

      const addTodo = (event) => {
        event.preventDefault();
        setTodos([{desc: todo.desc, date: todo.date.toLocaleDateString()}, ...todos])
      }

      const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value});
      }      

      const deleteTodo = (row) => {
        setTodos(todos.filter((_todo, index) => row !== index))
      }
      const handleDateChange = date => {
        setTodo({...todo, date: date});
      };

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
              <Button color="secondary" size="small" onClick={() => deleteTodo(row.index)}>Delete</Button>
          )
        }
      ]

      return (
        
        <div className="App">
          <AppBar position="static">
        <Toolbar>
          <Typography style={{flex: 10, alignItems: 'center'}} variant="h6">
            My To Do List
          </Typography>
        </Toolbar>
      </AppBar>
          <form onSubmit={addTodo}>
            <TextField style={{marginRight: 10}} label="Descpription" name="desc" value={todo.desc} onChange={inputChanged}/>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                format="dd/MM/yyyy"
                label="Date"
                value={todo.date}
                onChange={date => handleDateChange(date)}
              />            
            </MuiPickersUtilsProvider>
            <Tooltip title="Add">
              <IconButton color="primary" onClick={addTodo}><AddCircleOutlineIcon fontSize="large" /></IconButton>
            </Tooltip>
          </form>
          <ReactTable data={todos} columns={columns} defaultPageSize={10} filterable={true}/>
          
          
         {/*<Todotable todos={todos} deleteTodo={deleteTodo} />*/}
      

    </div>
  );
}

export default App;
