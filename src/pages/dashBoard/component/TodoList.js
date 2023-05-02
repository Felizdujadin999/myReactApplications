import React, { useReducer } from 'react';

function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: action.id, text: action.text, completed: false }];
        case 'TOGGLE_TODO':
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        case 'DELETE_TODO':
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
}

function TodoList() {
    const [todos, dispatch] = useReducer(todoReducer, []);

    function handleAddTodo() {
        const text = prompt('Enter new task:');
        if (text) {
            dispatch({ type: 'ADD_TODO', id: Date.now(), text });
        }
    }

    function handleToggle(todo) {
        dispatch({ type: 'TOGGLE_TODO', id: todo.id });
    }

    function handleDelete(todo) {
        dispatch({ type: 'DELETE_TODO', id: todo.id });
    }

    return (
        <div>
            <h2>Todo List</h2>
            <button onClick={handleAddTodo}>Add Task For The Day:: </button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        <span onClick={() => handleToggle(todo)}>{todo.text}</span><br/>
                        <button onClick={() => handleDelete(todo)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;