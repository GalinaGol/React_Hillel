import React from 'react';
import { useFormik } from 'formik';
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import validationSchema from "../schemas/validationSchema.js";
import Input from "./FormElements/Input";
import Select from "./FormElements/Select";

const TodoForm = ({ onSubmit }) => {

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            tag: '',
            assign: ''
        },
        onSubmit: (values, { resetForm }) => {
            onSubmit(values);
            resetForm();
        },
        validationSchema,
    });

    return (
        <div
            className="p-4 shadow-sm bg-primary bg-opacity-10 border  rounded-4"
        >
            <h4 className="mb-4 fw-bold text-primary">Create Task</h4>

            <Form onSubmit={formik.handleSubmit}>

                <Input
                    className='mb-3'
                    label='Title'
                    type="text"
                    placeholder="Title"
                    name='title'
                    value={formik.values.title}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    isTouched={formik.touched.title}
                    error={formik.errors.title}
                />
                <Select
                    label="Assign to"
                    name="assign"
                    className="mb-3"
                    isTouched={formik.touched.assign}
                    error={formik.errors.assign}
                    value={formik.values.assign}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    options={{
                        halyna: "Halyna",
                        dmytro: "Dmytro",
                        artem: "Artem",
                        tetiana: "Tetiana",
                    }}
                />
                <Select
                    label="Tag"
                    name="tag"
                    className="mb-3"
                    isTouched={formik.touched.tag}
                    error={formik.errors.tag}
                    value={formik.values.tag}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    options={{
                        in_progress: "In Progress",
                        completed: "Completed",
                        urgent: "Urgent",
                        need_attention: "Need Attention",
                    }}
                />

                <Input
                    className="mb-3"
                    type="text"
                    placeholder="Description"
                    name='description'
                    as="textarea"
                    rows="6"
                    value={formik.values.description}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    isTouched={formik.touched.description}
                    error={formik.errors.description}
                />

                <div className="d-flex justify-content-between align-items-center mt-4">

                    <div className="d-flex gap-2">
                        <input
                            type="submit"
                            className="btn btn-primary px-3 border-radius-10"
                            value="Create Task"
                            disabled={!formik.isValid}
                        />

                        <input
                            type="reset"
                            value="Clear"
                            className="btn btn-light border px-3 border-radius-10"
                            onClick={() => formik.resetForm()}
                        />
                    </div>
                </div>
            </Form>
        </div>
    );
};

TodoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default TodoForm;
