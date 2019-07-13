import React from 'react';
import './App.css';
import TodoList from './Components/TodoList';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <TodoList />
      </div>
    )
  };
}

export default App;
