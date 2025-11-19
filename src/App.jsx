import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);

    const handleAddTask = (task) => {
        setTodos(prevTodos => [
            ...prevTodos,
            {
                ...task,
                id: crypto.randomUUID(),
            }
        ]);
    };

    const handleDeleteTask = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
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
