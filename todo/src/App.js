import React from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <TodoList />
        <TodoForm />
      </div>
    )
  };
}

export default App;
