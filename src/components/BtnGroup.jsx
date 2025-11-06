import React from 'react';
import {useState} from "react";
import classNames from 'classnames';

function BtnGroup() {
    const [active, setActive] = useState('left');
    return (
        <div className="btn-group" role="group">
            <button
                type="button"
                className={classNames("btn", "btn-danger", { active: active === "left"} )}
                onClick={() => setActive('left')}
            >
                Left
            </button>
            <button
                type="button"
                onClick={() => setActive('right')}
                className={classNames("btn", "btn-danger", { active: active === "right"} )}
            >
                Right
            </button>
        </div>
    );
}

export default BtnGroup;