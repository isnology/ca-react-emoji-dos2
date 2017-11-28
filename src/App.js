import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'

const items = [
  { description: 'First', completed: true },
  { description: 'Second', completed: false },
  { description: 'Third', completed: true },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          items.map((item, index) => (
            <TodoItem
                key={ index }
                description={ item.description }
                completed={ item.completed }
            />
          ))
        }
        <br />
        <TodoItem description='First' completed />
        <TodoItem description='Second' completed />
        <TodoItem description='Third'/>
      </div>
    );
  }
}

export default App;
