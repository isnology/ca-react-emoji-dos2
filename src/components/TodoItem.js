import React from 'react'

function TodoItem({ description, completed = false, onToggleCompleted }) {
  return (
    <label>
      <input
        type='checkbox'
        checked={ completed }
        onChange={
          (event) => {
            console.log('Clicked checkbox', description)
            // When user clicks checkbox
            // notify the powers above that the concept of completed has changed
            onToggleCompleted()
          }
        }
      />
      { description }
    </label>
  )
}

export default TodoItem