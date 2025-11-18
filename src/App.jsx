import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);

    const handleAddTask = (task) => {
       setTodos([...todos, {...task, id: Date.now()}]);
    };

    const handleDeleteTask = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    return (
        <Container className="py-5">
            <div
                className="d-flex gap-4 p-4"
                style={{
                    background: "#ffffff",
                }}
            >

                <div style={{ flex: "0 0 360px" }}>
                    <TodoForm onSubmit={handleAddTask} />
                </div>


                {!!todos.length && <hr className="d-block d-md-none" />}
                <div style={{ flex: 1 }}>
                    <TodoList todos={todos} onDelete={handleDeleteTask} />
                </div>
            </div>
        </Container>
    );
}

export default App;
