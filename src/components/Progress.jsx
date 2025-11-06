import React from 'react';

function Progress({percentage}) {
    return (
        <div className="progress h-25">
            <div
                className="progress-bar-striped bg-success"
                role="progressbar"
                aria-valuenow={percentage}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label="progressbar"
                style={{ width: `${percentage}%` }}
            >
                {percentage}%
            </div>
        </div>
    );
}

export default Progress;