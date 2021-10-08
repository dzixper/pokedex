import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './homepage.module.scss';

interface PokemonListRecord {
    name: string;
    url: string;
}
interface PokemonList {
    count: number;
    results: PokemonListRecord[];
}

const POKEMONS_PER_PAGE = 20; 
export const Homepage = (): JSX.Element => {
    const [setOffset, offset] = useState<number>(0);
    const [pokemonList, setPokemonList] = useState<PokemonListRecord[]>([]);
    const GET_POKEMONS_ENDPOINT = `https://pokeapi.co/api/v2/pokemon/?limit=${POKEMONS_PER_PAGE}&offset=${offset}`;
    const fetchPokemonList = async (): Promise<void> => {
        const response: PokemonList = (await axios.get(GET_POKEMONS_ENDPOINT)).data;
        setPokemonList(response.results);
    };
    useEffect(() => {
        fetchPokemonList();
    },[]);
    return (
        <div className={styles.wrapper}>
            {
                pokemonList.map(pokemon => 
                    <p key={pokemon.name}>{pokemon.name} url: {pokemon.url}</p>
                )
            }
        </div>
        //Pokemon list
    );
};
