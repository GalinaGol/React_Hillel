import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { pokeApi } from "../store/pokeApi";

export default function PokemonCard({ pokemon, onSelect }) {
    const dispatch = useDispatch();

    const handleHover = () => {
        dispatch(
            pokeApi.util.prefetch("getPokemonByName", pokemon.name, { force: false })
        );
    };

    return (
        <Card
            onMouseEnter={handleHover}
            onClick={() => onSelect(pokemon.name)}
            className="h-100 text-center cursor-pointer"
        >
            <Card.Img
                variant="top"
                src={pokemon.sprite}
                alt={pokemon.name}
                className="pokemon-img"
            />
            <Card.Body>
                <Card.Title className="text-capitalize">{pokemon.name}</Card.Title>
            </Card.Body>
        </Card>
    );
}
