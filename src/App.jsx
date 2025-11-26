import ContactFormModal from './components/ContactFormModal/ContactFormModal';
import ContactsList from './components/ContactsList/ContactsList';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {useEffect, useState} from "react";
import ConfirmDeleteModal from "./components/Modals/ConfirmDeleteModal.jsx";
import Form from "react-bootstrap/Form";
import cloneDeep from "lodash/cloneDeep";
import {CONTACTS_KEY} from "./constants/keys.js";

function App() {
    const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(CONTACTS_KEY)) || []);
    const [modalMode, setModalMode] = useState("create");
    const [editableContact, setEditableContact] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [contactToDelete, setContactToDelete] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [search, setSearch] = useState("");

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        const itemsToJson = JSON.stringify(contacts);
        const lsData = localStorage.getItem(CONTACTS_KEY);
        if(itemsToJson === lsData) return;

        localStorage.setItem(CONTACTS_KEY, itemsToJson);
    }, [contacts]);

    const openCreateModal = () => {
        setModalMode("create");
        setEditableContact(null);
        setShowModal(true);
    };

    const openEditModal = (contact) => {
        setModalMode("edit");
        setEditableContact(contact);
        setShowModal(true);
    };

    const closeModal = () => setShowModal(false);

    const onSubmit = (values) => {
        if (modalMode === "create") {
            const currentId = contacts.length ? contacts[0].id + 1 : 1;
            const contactToAdd = { ...values, id: currentId };

            const contactsCopy = cloneDeep([contactToAdd, ...contacts]);
            setContacts(contactsCopy);
        } else {
            const contactsCopy = cloneDeep(contacts);

            const index = contactsCopy.findIndex(
                (contact) => contact.id === editableContact.id
            );

            if (index !== -1) {
                contactsCopy[index] = {
                    ...contactsCopy[index],
                    ...values,
                };
            }
            setContacts(contactsCopy);
        }

        closeModal();
    };

    const requestDeleteContact = (contactId) => {
        const contact = contacts.find(contact => contact.id === contactId);
        setContactToDelete(contact || null);
        setShowDeleteModal(true);
    };

    const cancelDeleteContact = () => {
        setShowDeleteModal(false);
        setContactToDelete(null);
    };

    const confirmDeleteContact = () => {
        if (contactToDelete) {
            setContacts(prev => prev.filter(contact => contact.id !== contactToDelete.id));
        }
        setShowDeleteModal(false);
        setContactToDelete(null);
    };

    return (
        <Container className="py-4">
            <header className="mb-4 d-flex align-items-center gap-3 px-3">
                <Form>
                    <Form.Group controlId="search">
                        <Form.Control
                            type="text"
                            placeholder="Search by name..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            size="md"
                        />
                    </Form.Group>
                </Form>

                <h1 className="flex-grow-1 text-center m-0">
                    Phone Book
                </h1>

                <Button
                    variant="primary"
                    onClick={openCreateModal}
                >
                    Add contact
                </Button>
            </header>

            <ContactsList
                contacts={filteredContacts}
                onEdit={openEditModal}
                onDelete={requestDeleteContact}
            />

            <ContactFormModal
                show={showModal}
                onClose={closeModal}
                onSubmit={onSubmit}
                initialValues={editableContact}
                mode={modalMode}
            />

            <ConfirmDeleteModal
                show={showDeleteModal}
                contact={contactToDelete}
                onCancel={cancelDeleteContact}
                onConfirm={confirmDeleteContact}
            />
        </Container>
    );
}

export default App;
