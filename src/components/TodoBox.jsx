import React, {useState} from "react";
import Item from "./Item";

const TodoBox = () => {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState("")

    const handleRemove = (id) => {
        const newArr = todos.filter((item) => item.id !== id)
        setTodos(newArr)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newTodo.trim()) return;
        setTodos([{
            id: getUniqueId(),
            text: newTodo
        },
            ...todos,

        ])
        setNewTodo('')
    }

    const getUniqueId = () => { return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}

    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <h4 className="card-title mb-3 text-center text-primary">
                                📝 To-Do List
                            </h4>

                            <form
                                className="d-flex mb-3"
                                onSubmit={handleSubmit}
                            >
                                <input
                                    type="text"
                                    value={newTodo}
                                    required
                                    className="form-control me-2"
                                    placeholder="Enter a new task"
                                    onChange={(e) => setNewTodo(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Add
                                </button>
                            </form>

                            {todos.length === 0 ? (
                                <p className="text-muted text-center mt-3">
                                    You don’t have any tasks 🤷‍♀️
                                </p>
                            ) : (
                                todos.map((todo) => (
                                    <Item
                                        key={todo.id}
                                        task={todo}
                                        onRemove={handleRemove}
                                    />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TodoBox;
