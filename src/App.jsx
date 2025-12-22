import { useState } from "react";
import { Container, Button, Stack } from "react-bootstrap";
import PokemonList from "./components/PokemonList";
import PokemonDetailsModal from "./components/PokemonDetailsModal";

const limit = 24;

export default function App() {
    const [offset, setOffset] = useState(0);
    const [selected, setSelected] = useState(null);

    return (
        <Container className="py-4">
            <h1 className="mb-4 text-center">Pokemons</h1>

            <PokemonList
                limit={limit}
                offset={offset}
                onSelect={(name) => setSelected(name)}
            />

            <Stack direction="horizontal" gap={2} className="my-3 justify-content-center">
                <Button
                    variant="primary"
                    disabled={offset === 0}
                    onClick={() => setOffset((o) => Math.max(0, o - limit))}
                >
                    Prev
                </Button>

                <Button variant="primary" onClick={() => setOffset((o) => o + limit)}>
                    Next
                </Button>
            </Stack>

            <PokemonDetailsModal
                name={selected}
                onClose={() => setSelected(null)}
            />
        </Container>
    );
}
