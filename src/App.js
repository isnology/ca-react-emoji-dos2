import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'
import EButton from './components/EButton'


// UI (view/controller)
class App extends Component {
  state = {
    items: [
      { description: 'First', completed: true },
      { description: 'Second', completed: false },
      { description: 'Third', completed: true },
      { description: 'Fouth', completed: false },
    ],
    buttons: [
      { description: 'First', completed: false },
      { description: 'Second', completed: false },
      { description: 'Third', completed: false },
      { description: 'Fouth', completed: false },
      { description: 'Fifth', completed: false }
    ]
  }

  onToggleItemAtIndex = (index) => {
    this.setState((prevState) => {
      // get current items
      const beforeItems = prevState.items

      const afterItems = beforeItems.map((item, currentIndex) => {
        if (currentIndex === index) {
          //  const copy = Object.assign({}, item { completed: !item.completed})
          //  return copy
          return { ...item, completed: !item.completed }
        }
        else
          return item
      })

      return { items: afterItems }
    })
  }

  onToggleButton = (index) => {
    this.setState((prevState) => {
      const beforeItems = prevState.buttons
      const afterItems = beforeItems.map((button, currentIndex) => {
        if (currentIndex === index)
          return { ...button, completed: !button.completed }
        else
          return button
      })
      return { buttons: afterItems }
    })
  }

  filterCompletedItems = (button, index) => {
    if (button.completed)
      return this.outputButton(button, index)
  }

  filterIncompletedItems = (button, index) => {
    if (!button.completed)
      return this.outputButton(button, index)
  }

  outputButton = (button, index) => {
    return (
      <EButton
          key={ index }
          description={ button.description }
          completed={ button.completed }
          onToggleCompleted={
            () => {
              this.onToggleButton(index)
            }
          }
      />
    )
  }

  render() {
    const items = this.state.items
    const total = items.length
    const buttons = this.state.buttons

    let totalCompleted = 0
    let totalIncomplete = 0
    items.forEach((item) => {
      if (item.completed)
        totalCompleted += 1
      else
        totalIncomplete += 1
    })

    return (
        <div className="App">
          <dl>
            <dt>Total</dt>
            <dd>{ total }</dd>
            <dt>Total Completed</dt>
            <dd>{ totalCompleted }</dd>
            <dt>Total incomplete</dt>
            <dd>{ totalIncomplete }</dd>
          </dl>
          {
            items.map((item, index) => (
                <TodoItem
                    key={ index }
                    description={ item.description }
                    completed={ item.completed }
                    onToggleCompleted={
                      () => {
                        console.log('TodoItem onToggleCompleted received', index)
                        this.onToggleItemAtIndex(index)
                      }
                    }
                />
            ))
          }
          <br/>
          <p>Completed</p>
          {
            buttons.map((button, index) => (
                this.filterCompletedItems(button, index)
            ))
          }
          <p>Incomplete</p>
          {
            buttons.map((button, index) => (
              this.filterIncompletedItems(button, index)
            ))
          }
        </div>
    );
  }
}

export default App;
