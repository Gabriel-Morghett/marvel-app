import React, { useRef } from 'react'
import { fetchHero, fetchHeroes } from '../libs/utils';
import { useCookies } from 'react-cookie';

interface SearchBarProps {
    setter: (heroes: any) => void;
  }

export default function SearchBar({setter} : SearchBarProps) {
    const input = useRef<HTMLInputElement>(null);
    const [cookies] = useCookies(['user']);
    console.log("COOKIES AQUI", cookies)

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const value = input.current?.value;
        if (!value) return;

        const { user } = cookies;

        if (user) {
            const { publicKey, privateKey } = user;
      
            try {
                const heroes = await fetchHeroes(value, publicKey, privateKey);
                setter(heroes);
            } catch (err) {
                console.error('Erro ao buscar heróis:', err);
            }
        } else {
            console.error('Usuário não autenticado.');
        }
    }

    return (
        <form>
            <input type="text" placeholder="Search Hero..." ref={input} />
            <button onClick={handleClick}>Search</button>
        </form>
    )
}