import React from 'react';
const Item = ({ task, onRemove }) => {
    return (
        <div className="card mb-2 shadow-sm border-0">
            <div className="card-body d-flex justify-content-between align-items-center py-2">
                <span className="fw-medium">{task.text}</span>

                <button
                    type="button"
                    className="btn btn-sm btn-outline-success d-flex align-items-center gap-1"
                    onClick={() => onRemove(task.id)}
                >
                    ✅ Done
                </button>
            </div>
        </div>
    );
};

export default Item;
