import react from 'react'
import { v4 as uuid } from 'uuid';
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import './TodoList.css'

function TodoList() {

    const [todos, setTodos] = react.useState([])

    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, { ...newTodo, id: uuid() }])
    }

    const removeTodo = (index) => {
        setTodos(todos => todos.filter((todo, i) => i !== index))
    }


    return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            <h1>To-do List</h1>
            <ul className='todo-list'>
                {todos.map((todo, i) => (
                    <Todo
                        key={todo.id}
                        index={i}
                        todo={todo}
                        removeTodo={() => removeTodo(i)}
                    />
                ))}
            </ul>
        </div>
    )


}

export default TodoList