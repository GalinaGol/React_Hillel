import {Col, Container, Row} from "react-bootstrap";
import ContactCard from "./ContactCard.jsx";
import EmptyList from "./EmptyList.jsx";
import PropTypes from "prop-types";

function ContactsList({contacts , onEdit, onDelete}) {
    return (
        <Container>
            <Row>
                {contacts.length > 0 ? (
                    contacts.map((contact) => (
                        <Col md={4} lg={3} key={contact.id}>
                            <ContactCard
                                contact={contact}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />
                        </Col>
                    ))
                ) : (
                    <Col xs={12}>
                        <EmptyList />
                    </Col>
                )}
            </Row>
        </Container>
    );
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
            ]).isRequired,
            name: PropTypes.string,
            email: PropTypes.string,
            phone: PropTypes.string,
        })
    ).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};


export default ContactsList;