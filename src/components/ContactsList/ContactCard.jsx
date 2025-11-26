import {Button, Card} from "react-bootstrap";
import PropTypes from "prop-types";

function ContactCard({contact, onEdit, onDelete}) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{contact.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{contact.email}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{contact.phone}</Card.Subtitle>
                <div className="d-flex gap-2">
                    <Button variant="primary" onClick={() => onEdit(contact)}>Edit</Button>
                    <Button variant="danger" onClick={() => onDelete(contact.id)}>Delete</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

ContactCard.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]).isRequired,
        name: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
    }).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};


export default ContactCard;