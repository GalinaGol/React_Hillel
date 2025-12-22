import { Row, Col, Alert, Spinner } from "react-bootstrap";
import { useGetPokemonListQuery } from "../store/pokeApi";
import PokemonCard from "./PokemonCard";

export default function PokemonList({ limit, offset, onSelect }) {
    const { data, isLoading, isError } = useGetPokemonListQuery({
        limit,
        offset,
    });

    if (isLoading)
        return <Spinner animation="border" />;

    if (isError)
        return <Alert variant="danger">Error loading pokemon list</Alert>;

    if (!data || data.length === 0)
        return <Alert variant="info">No pokemons found</Alert>;

    return (
        <Row md={6} className="g-3">
            {data.map((pokemon) => (
                <Col key={pokemon.name}>
                    <PokemonCard pokemon={pokemon} onSelect={onSelect} />
                </Col>
            ))}
        </Row>
    );
}
