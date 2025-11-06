import React from 'react';

function ListGroup({children}) {
    return (
        <ul className="list-group">
            <li
                className="list-group-item"
                style={{ backgroundColor: 'transparent' }}
            >{children}</li>
        </ul>
    );
}

export default ListGroup;