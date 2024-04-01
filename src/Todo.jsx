import react from 'react'
import "./Todo.css"

function Todo({ todo, index, removeTodo }) {
    return (
        <li>
            <span className='todo'>{todo.newTodo}</span>
            <button onClick={removeTodo}>X</button>
        </li>
    )
}

export default Todo