import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { addTodo, deleteTodo } from "./store/todoSlice";

function App() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const handleAddTask = (task) => {
        dispatch(addTodo(task));
    };

    const handleDeleteTask = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <Container className="py-5">
            <div className="p-4 bg-white">
                <div className="row g-4">
                    <div className="col-12 col-md-4">
                        <TodoForm onSubmit={handleAddTask} />
                    </div>

                    {!!todos.length && <hr className="d-block d-md-none" />}

                    <div className="col-12 col-md-8">
                        <TodoList todos={todos} onDelete={handleDeleteTask} />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default App;
