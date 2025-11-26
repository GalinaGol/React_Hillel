import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const PhoneField = ({ label, name, formik, className }) => {
    const { values, errors, touched, setFieldValue, setFieldTouched } = formik;

    return (
        <Form.Group className={className}>
            {label && (
                <Form.Label column="sm" className="fw-semibold">
                    {label}
                </Form.Label>
            )}

            <PhoneInput
                defaultCountry="ua"
                name={name}
                value={values[name] || ""}
                onChange={(value) => setFieldValue(name, value)}
                onBlur={() => setFieldTouched(name, true)}
                className="w-100"
            />

            {touched[name] && errors[name] ? (
                <div className="text-danger">{errors[name]}</div>
            ) : null}
        </Form.Group>
    );
};

PhoneField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    formik: PropTypes.shape({
        values: PropTypes.object.isRequired,
        errors: PropTypes.object.isRequired,
        touched: PropTypes.object.isRequired,
        setFieldValue: PropTypes.func.isRequired,
        setFieldTouched: PropTypes.func.isRequired,
    }).isRequired,
};

export default PhoneField;
