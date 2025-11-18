import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

function TodoList({ todos, onDelete }) {
    return (
        <ListGroup>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDelete={() => onDelete(todo.id)}
                />
            ))}
        </ListGroup>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
            title: PropTypes.string.isRequired,
            assign: PropTypes.string,
            tag: PropTypes.string,
            description: PropTypes.string,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};
export default TodoList;
