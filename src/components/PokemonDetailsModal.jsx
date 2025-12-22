import { Modal, Spinner, Alert, ListGroup } from "react-bootstrap";
import { skipToken } from "@reduxjs/toolkit/query";
import { useGetPokemonByNameQuery } from "../store/pokeApi";

export default function PokemonDetailsModal({ name, onClose }) {
    const { data, isFetching, isError } = useGetPokemonByNameQuery(
        name ?? skipToken
    );

    return (
        <Modal show={!!name} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Pokemon details</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {isFetching && <Spinner animation="border" />}

                {isError && <Alert variant="danger">Error loading details</Alert>}

                {data && (
                    <>
                        <h4 className="text-capitalize">
                            {data.name} #{data.id}
                        </h4>

                        <img
                            src={data.sprites.front_default}
                            alt={data.name}
                            className="mb-3"
                        />

                        <h6>Types</h6>
                        <ListGroup className="mb-3">
                            {data.types.map((t) => (
                                <ListGroup.Item key={t.slot}>{t.type.name}</ListGroup.Item>
                            ))}
                        </ListGroup>

                        <h6>Stats</h6>
                        <ListGroup>
                            {data.stats.map((s) => (
                                <ListGroup.Item key={s.stat.name}>
                                    {s.stat.name}: {s.base_stat}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </>
                )}
            </Modal.Body>
        </Modal>
    );
}
