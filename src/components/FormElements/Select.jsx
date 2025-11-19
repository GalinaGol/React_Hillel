import React from 'react';
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const Select = ({
                    className,
                    label,
                    isTouched,
                    error,
                    options,
                    name,
                    ...restProps
                }) => {

    return (
        <Form.Group className={className} controlId={name}>
            {label && <Form.Label column='sm' className="fw-semibold">{label}</Form.Label>}

            <Form.Select
                name={name}
                {...restProps}
                className='border-radius-10'
            >
                <option value="">Choose...</option>

                {Object.entries(options).map(([value, text]) => (
                    <option key={value} value={value}>
                        {text}
                    </option>
                ))}
            </Form.Select>

            {isTouched && error && (
                <div className="text-danger small mt-1">{error}</div>
            )}
        </Form.Group>
    );
};

Select.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    isTouched: PropTypes.bool,
    error: PropTypes.string,
    options: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
};

export default Select;
