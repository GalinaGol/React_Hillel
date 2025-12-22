import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokeApi = createApi({
    reducerPath: "pokeApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://pokeapi.co/api/v2/",
    }),
    endpoints: (builder) => ({
        getPokemonList: builder.query({
            query: ({ limit, offset }) =>
                `pokemon?limit=${limit}&offset=${offset}`,
            transformResponse: (response) =>
                response.results.map((p) => {
                    const id = p.url.split("/").filter(Boolean).pop();
                    return {
                        name: p.name,
                        id,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                    };
                }),
        }),

        getPokemonByName: builder.query({
            query: (nameOrId) => `pokemon/${nameOrId}`,
        }),
    }),
});

export const {
    useGetPokemonListQuery,
    useGetPokemonByNameQuery,
} = pokeApi;
