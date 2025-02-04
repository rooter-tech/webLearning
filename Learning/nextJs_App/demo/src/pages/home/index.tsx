import { InferGetStaticPropsType } from 'next';
import Link from 'next/link'

interface Pokemon {
    name: string;
    url: string;
}

export default function Home({ allPokemons }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <><h1>
            POKEMON PAGE
        </h1>
            <ul>
                {allPokemons.map((poke) => (
                    <li key={poke.url}>
                        <Link href={`home/profile/${poke.name}`}>{poke.name}</Link>
                    </li>
                ))}
            </ul></>
    );
}


export async function getStaticProps() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data: { results: Pokemon[] } = await response.json();
    return {
        props: { allPokemons: data.results },
    };
}

