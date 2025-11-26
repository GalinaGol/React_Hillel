import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import validationSchema from "../../schemas/validationShema.js";
import Input from "../FormElements/Input.jsx";
import PhoneField from "../FormElements/PhoneField.jsx";
import PropTypes from "prop-types";

function ContactForm({ onSubmit, initialValues }) {
    const formik = useFormik({
        initialValues: initialValues || {
            name: "",
            phone: "",
            email: "",
        },
        enableReinitialize: true,
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            onSubmit(values);
            resetForm();
        }
    });

    return (
        <Form id="contact-form" onSubmit={formik.handleSubmit}>
            <Input
                className='mb-3'
                label='Name'
                name='name'
                type="text"
                placeholder="Name"
                value={formik.values.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                isTouched={formik.touched.name}
                error={formik.errors.name}
            />

            <Input
                className='mb-3'
                label='Email'
                name='email'
                type="email"
                placeholder="Email"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                isTouched={formik.touched.email}
                error={formik.errors.email}
            />

            <PhoneField
                className="mb-3"
                label="Phone"
                name="phone"
                formik={formik}
            />
        </Form>
    );
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object
};

export default ContactForm;
