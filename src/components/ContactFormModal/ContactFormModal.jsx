import Modal from "react-bootstrap/Modal";
import ContactForm from "./ContactForm.jsx";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

function ContactFormModal({ show, onClose, onSubmit, initialValues, mode }) {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {mode === "create" ? "Create contact" : "Edit contact"}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <ContactForm onSubmit={onSubmit} initialValues={initialValues} />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>

                <Button variant="primary" form="contact-form" type="submit">
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

ContactFormModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object,
    mode: PropTypes.oneOf(["create", "edit"]).isRequired
};

export default ContactFormModal;
