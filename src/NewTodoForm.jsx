import React from "react";
import "./NewTodoForm.css";

function NewTodoForm({ addTodo }) {

    const INITIAL_STATE = {
        newTodo: ""
    }

    const [formData, setFormData] = React.useState(INITIAL_STATE);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({
            newTodo: formData.newTodo
        });
        setFormData(INITIAL_STATE);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="newTodo">New Todo </label>
            <input
                type="text"
                id="newTodo"
                name="newTodo"
                placeholder="New Todo"
                value={formData.newTodo}
                onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodoForm;