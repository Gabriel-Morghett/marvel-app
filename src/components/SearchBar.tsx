import React, { useRef } from 'react'
import { fetchHero, fetchHeroes } from '../libs/utils';

export default function SearchBar({setter} : any) {
    let input = useRef<HTMLInputElement>(null);

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        let value = input.current?.value
        if (value === "") return


        try {
            let heroes = await fetchHeroes(value ?? "");
            setter(heroes);
        } catch (err) {
            console.error("Erro ao buscar heróis:", err);
        }
    }

    return (
        <form>
            <input type="text" placeholder="Search Hero..." ref={input} />
            <button onClick={handleClick}>Search</button>
        </form>
    )
}