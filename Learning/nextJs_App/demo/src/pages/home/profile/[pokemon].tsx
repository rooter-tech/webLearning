/* eslint-disable @typescript-eslint/no-explicit-any */
import { InferGetServerSidePropsType } from 'next';

interface SpriteSet {
    front_default?: string | null;
    front_shiny?: string | null;
    back_default?: string | null;
    back_shiny?: string | null;
}

interface Generation {
    [game: string]: SpriteSet;
}

interface Poke {
    sprites: {
        versions: {
            [generation: string]: Generation;
        };
    };
    species: { name: string };
    id: number;
    name: string;
}

export default function Home({ poke }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    //const router = useRouter();
    return (
        <>
            <h1>POKEMON ABILITY PROFILE</h1>
            <h2>{poke.name.toUpperCase()}</h2>
            <p><strong>Species:</strong> {poke.species.name}</p>
            <p><strong>Versions:</strong></p>
            <ul>
                {Object.entries(poke.sprites.versions).map(([generation, games]) => (
                    <li key={generation}>
                        <strong>{generation.toUpperCase()}</strong>
                        <ul>
                            {Object.entries(games).map(([game, sprites]) => (
                                <li key={game}>
                                    <strong>{game.replace('-', ' ')}</strong>
                                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                        {sprites.front_default && <img src={sprites.front_default} width={80} />}
                                        {sprites.front_shiny && <img src={sprites.front_shiny} width={80} />}
                                        {sprites.back_default && <img src={sprites.back_default} width={80} />}
                                        {sprites.back_shiny && <img src={sprites.back_shiny} width={80} />}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    );
}

export async function getServerSideProps(pokemon: any) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.query.pokemon}`);
    if (!response.ok) {
        return {
            notFound: true,
        };
    }

    const poke: Poke = await response.json();
    return {
        props: { poke },
    };
}
