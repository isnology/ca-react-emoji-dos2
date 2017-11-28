import React from 'react'

function EButton({ description, completed = false, onToggleCompleted }) {
  return (
    <button
      type='button'
      onClick={
        (event) => {
          onToggleCompleted()
        }
      }
    >
      { completed ? '✅' : '❎' }
      {' '}
      { description }
    </button>
  )
}

export default EButton