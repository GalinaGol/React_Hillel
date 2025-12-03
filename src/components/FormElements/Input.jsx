import React from 'react';
import {Form} from "react-bootstrap";
import PropTypes from "prop-types";

const Input = ({className, label, isTouched, error, ...restProps}) => {
    return (
        <Form.Group className={className} controlId={name}>
            {label ? <Form.Label column='sm' className="fw-semibold" >{label}</Form.Label> : null}
            <Form.Control {...restProps} aria-label={restProps.placeholder} />
            {isTouched && error ? (
                <div className='text-danger'>{error}</div>
            ) : null}
        </Form.Group>
    );
};

Input.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    isTouched: PropTypes.bool,
    error: PropTypes.string,
};

export default Input;