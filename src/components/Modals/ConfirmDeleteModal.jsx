import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

function ConfirmDeleteModal({ show, contact, onCancel, onConfirm }) {
    return (
        <Modal show={show} onHide={onCancel}>
            <Modal.Header closeButton>
                <Modal.Title>Delete contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {contact
                    ? <>Are you sure you want to delete <strong>{contact.name}</strong>?</>
                    : "Are you sure you want to delete this contact?"}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCancel}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={onConfirm}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

ConfirmDeleteModal.propTypes = {
    show: PropTypes.bool.isRequired,
    contact: PropTypes.object,
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
};

export default ConfirmDeleteModal;
