import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import PropTypes from "prop-types";

function TodoItem({ todo, onDelete }) {
    return (
        <Card
            className="mb-3 shadow-sm border-0 bg-light"
            style={{ borderRadius: "14px" }}
        >
            <Card.Body>
                <div className="d-flex justify-content-between align-items-start">
                    <div>
                        <h5 className="fw-bold mb-2">{todo.title}</h5>
                        <div className="d-flex align-items-center gap-2 mb-2">
                            {todo.assign && (
                                <span className="text-muted small">
                                    Assigned to: <span className="fw-semibold">{todo.assign}</span>
                                </span>
                            )}

                            {todo.tag && (
                                <Badge bg={todo.tag === 'urgent' ? 'danger' : 'info'} className="px-2 py-1 text-uppercase small">
                                    {todo.tag}
                                </Badge>
                            )}
                        </div>

                        {todo.description && (
                            <p className="text-muted small mb-0">
                                {todo.description}
                            </p>
                        )}
                    </div>

                    <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={onDelete}
                        style={{ height: "32px" }}
                    >
                        Delete
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        assign: PropTypes.string,
        tag: PropTypes.string,
        description: PropTypes.string,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
